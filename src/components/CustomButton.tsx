import * as React from 'react';
import {
  Text,
  StyleSheet,
  GestureResponderEvent,
  StyleProp,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import {verticalScale, scale, moderateScale} from 'react-native-size-matters';

import {typography} from '../theme/typography';
import {mixins} from '../theme/mixins';
import {colors} from '../theme/colors';

interface ButtonLargeAtomProps {
  onPress: (event: GestureResponderEvent) => void;
  title: string;
  titleStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  disabled?: boolean;
}

const CustomButton = ({
  onPress,
  title,
  titleStyle,
  containerStyle,
  disabled,
}: ButtonLargeAtomProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.5}
      disabled={disabled}
      style={[
        styles.button,
        containerStyle,
        {backgroundColor: disabled ? colors.disable : colors.secondary},
      ]}>
      <Text style={[typography.h7, titleStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default React.memo(CustomButton);

const styles = StyleSheet.create({
  button: {
    paddingVertical: verticalScale(15),
    paddingHorizontal: scale(20),
    borderRadius: moderateScale(30),
    backgroundColor: colors.secondary,
    ...mixins.center,
  },
});
