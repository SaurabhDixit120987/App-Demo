import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';

import {colors} from '../theme/colors';
import {vw} from '../theme/dimen';
import DebitCard from './DebitCard';
import HideNumberContainer from './HideNumberContainer';

const CardContainer = () => {
  return (
    <View style={[styles.container]}>
      <View style={styles.btnContainer}>
        <HideNumberContainer />
      </View>
      <View style={styles.cardContainer}>
        <DebitCard />
      </View>
    </View>
  );
};

export default CardContainer;

const styles = StyleSheet.create({
  btnContainer: {
    position: 'absolute',
    backgroundColor: colors.white,
    alignSelf: 'flex-end',
    borderRadius: moderateScale(5),
    bottom: verticalScale(15),
  },
  container: {
    padding: moderateScale(24),
    borderRadius: moderateScale(10),
    alignSelf: 'center',
    width: vw(90),
    position: 'absolute',
  },
  cardContainer: {
    position: 'absolute',
    backgroundColor: colors.secondary,
    borderRadius: moderateScale(10),
    left: scale(0),
    right: scale(0),
    top: verticalScale(20),
  },
});
