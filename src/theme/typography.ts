import {Platform, StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

import {colors} from './colors';

export const typography = StyleSheet.create({
  h1: {
    fontSize: RFValue(24),
    color: colors.text.white,
  },
  h2: {
    fontSize: RFValue(22),
    color: colors.text.white,
  },
  h3: {
    fontSize: RFValue(14),
    color: colors.text.white,
  },
  h4: {
    fontSize: RFValue(13),
    color: colors.text.white,
  },
  h5: {
    fontSize: RFValue(12),
    color: colors.text.white,
  },
  h6: {
    fontSize: RFValue(9),
    color: colors.text.tertiary,
  },
  h7: {
    fontSize: RFValue(16),
    color: colors.text.white,
  },
  h5_c1: {
    color: colors.text.tertiary,
  },
  h3_c1: {
    color: colors.text.primary,
  },
  h3_c2: {
    color: colors.text.secondary,
  },
  h4_c1: {
    color: colors.iconColor,
    fontWeight: 'normal',
  },
  h4_c2: {},
  h4_c3: {
    color: colors.text.secondary,
  },
  h6_c1: {
    color: colors.iconColor,
  },
});
