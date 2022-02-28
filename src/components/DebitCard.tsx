import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {useSelector} from 'react-redux';
import {Text} from 'react-native-paper';

import AspireLogoSvg from '../assets/AspireLogoSvg';
import VisaSvg from '../assets/VisaSvg';
import {colors} from '../theme/colors';
import {typography} from '../theme/typography';
import {Store} from '../core/interfaces';

const DebitCard = () => {
  const {cardVisiibility, cardDetails} = useSelector((state: Store) => state);
  return (
    <View style={[styles.container]}>
      <View style={{alignSelf: 'flex-end'}}>
        <AspireLogoSvg />
      </View>
      <Text style={[typography.h2]}>Mark Henry</Text>
      <Text
        style={[
          typography.h3,
          {letterSpacing: scale(5), marginTop: verticalScale(24)},
        ]}>
        {cardVisiibility ? cardDetails.cardNumber : '............'}
      </Text>
      <View style={[styles.cvvContainer]}>
        <Text style={[typography.h3]}>Thru {cardDetails.validThru}</Text>
        <Text style={[typography.h3, {marginLeft: scale(30)}]}>
          CVV: {cardVisiibility ? cardDetails.cvv : '***'}
        </Text>
      </View>
      <View style={{alignSelf: 'flex-end'}}>
        <VisaSvg />
      </View>
    </View>
  );
};

export default DebitCard;

const styles = StyleSheet.create({
  container: {
    padding: moderateScale(24),
    backgroundColor: colors.secondary,
    borderRadius: moderateScale(10),
  },
  cvvContainer: {
    flexDirection: 'row',
    marginTop: verticalScale(15),
    alignItems: 'center',
  },
});
