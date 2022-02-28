import * as React from 'react';
import {
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
  Text,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import {RFValue} from 'react-native-responsive-fontsize';

import {typography} from '../theme/typography';
import {colors} from '../theme/colors';

interface InputAtomProps extends TextInputProps {
  containerStyle?: StyleProp<ViewStyle>;
  hidePlaceholder?: boolean;
}

const Input = (props: InputAtomProps) => {
  return (
    <View style={[styles.containerStyle]}>
      <View style={{flexDirection: 'row', position: 'relative', zIndex: 9}}>
        <View style={styles.dollerContainer}>
          <Text style={[typography.h4, typography.h4_c2]}>S$</Text>
        </View>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          keyboardType={'decimal-pad'}
          numberOfLines={1}
          maxLength={12}
          {...props}
        />
      </View>
    </View>
  );
};

export default React.memo(Input);

const styles = StyleSheet.create({
  containerStyle: {
    borderColor: colors.iconColor,
    borderBottomWidth: verticalScale(1),
    position: 'relative',
    paddingVertical: verticalScale(5),
  },
  placeholder: {
    fontSize: RFValue(12),
    marginHorizontal: scale(2),
    marginVertical: verticalScale(2),
    letterSpacing: 0.6,
    textTransform: 'uppercase',
  },
  dollerContainer: {
    paddingVertical: verticalScale(3),
    paddingHorizontal: scale(12),
    borderRadius: moderateScale(3),
    backgroundColor: colors.secondary,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: scale(10),
  },
  input: {
    ...typography.h4,
    color: colors.text.secondary,
    position: 'relative',
    height: RFValue(25),
    width: '100%',
    maxWidth: '100%',
    paddingHorizontal: 0,
    paddingVertical: verticalScale(2),
    zIndex: 9,
  },
});
