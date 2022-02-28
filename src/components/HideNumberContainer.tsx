import * as React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';

import EyeHiddenSvg from '../assets/EyeHiddenSvg';
import EyeSvg from '../assets/EyeSvg';
import {Store} from '../core/interfaces';
import {toggleCardVisibility} from '../store/actions';
import {colors} from '../theme/colors';
import {typography} from '../theme/typography';

interface HideNumberContainerProps {}

const HideNumberContainer = ({}: HideNumberContainerProps) => {
  const dispatch = useDispatch();
  const {cardVisiibility} = useSelector((state: Store) => state);
  const toggleShow = () => dispatch(toggleCardVisibility(!cardVisiibility));
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={toggleShow}
      activeOpacity={1}>
      {cardVisiibility ? <EyeHiddenSvg /> : <EyeSvg />}
      <Text style={[typography.h5, typography.h5_c1, {marginLeft: scale(10)}]}>
        {cardVisiibility ? 'Hide card number' : 'Show card number'}
      </Text>
    </TouchableOpacity>
  );
};

export default HideNumberContainer;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: scale(10),
    paddingTop: verticalScale(8),
    paddingBottom: verticalScale(10),
    backgroundColor: colors.text.white,
    borderRadius: moderateScale(6),
    alignItems: 'center',
  },
});
