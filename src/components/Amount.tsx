import * as React from 'react';
import {
  GestureResponderEvent,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';

import {colors} from '../theme/colors';
import {typography} from '../theme/typography';

interface AmountChunkProps {
  amount: string | number;
  onPress: (event: GestureResponderEvent) => void;
  container?: StyleProp<ViewStyle>;
}

const Amount = ({amount, container, onPress}: AmountChunkProps) => {
  return (
    <TouchableOpacity
      style={[styles.container, container]}
      onPress={onPress}
      activeOpacity={0.5}>
      <Text style={[typography.h5, typography.h5_c1]}>S$ {amount}</Text>
    </TouchableOpacity>
  );
};

export default Amount;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: scale(20),
    paddingVertical: verticalScale(10),
    backgroundColor: colors.progreaaBar,
    borderRadius: moderateScale(4),
  },
});
