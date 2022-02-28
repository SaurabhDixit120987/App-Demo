import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';

import HomeSvg from '../assets/HomeSvg';
import {Store} from '../core/interfaces';
import {useSelector} from 'react-redux';
import {spacingStyles} from '../theme/spacing';
import {Text} from 'react-native-paper';
import {colors} from '../theme/colors';
import {typography} from '../theme/typography';

interface TabHeaderProps {}

const TabHeader = (props: TabHeaderProps) => {
  const {cardDetails} = useSelector((state: Store) => state);
  return (
    <View style={styles.container}>
      <View>
        <Text style={[typography.h1, {marginTop: verticalScale(15)}]}>
          Debit Card
        </Text>
        <Text style={[typography.h3, {marginTop: verticalScale(24)}]}>
          Available balance
        </Text>
        <View style={styles.balanceContainer}>
          <View style={[styles.dollerContainer]}>
            <Text style={[typography.h5]}>S$</Text>
          </View>
          <Text style={typography.h1}>
            {cardDetails.usage && parseInt(cardDetails.usage?.usageLimit) > 0
              ? parseInt(cardDetails.usage?.usageLimit) -
                parseInt(cardDetails.usage?.spendings)
              : '0'}
          </Text>
        </View>
      </View>
      <HomeSvg color={colors.secondary} />
    </View>
  );
};

export default TabHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    ...spacingStyles.container,
    paddingTop: verticalScale(16),
  },
  balanceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: verticalScale(10),
  },
  dollerContainer: {
    paddingHorizontal: scale(10),
    backgroundColor: colors.secondary,
    borderRadius: moderateScale(4),
    paddingVertical: verticalScale(3),
    marginRight: scale(10),
  },
});
