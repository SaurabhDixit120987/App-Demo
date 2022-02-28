import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {moderateScale, verticalScale} from 'react-native-size-matters';

import {HeaderWithBackButton} from '../../components';
import {colors} from '../../theme/colors';
import {gutter} from '../../theme/spacing';
import {typography} from '../../theme/typography';
import FormContainer from './components/FormContainer';

const SpendingLimit = () => {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderWithBackButton />
      <View style={styles.innerContainer}>
        <Text style={[typography.h1]}>Spending limit</Text>
      </View>
      <View style={styles.overlayContainer}>
        <FormContainer />
      </View>
    </SafeAreaView>
  );
};

export default SpendingLimit;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  innerContainer: {
    paddingHorizontal: gutter.paddingLargeHorizontal,
    paddingBottom: verticalScale(40),
  },
  overlayContainer: {
    flex: 1,
    backgroundColor: colors.text.white,
    borderTopLeftRadius: moderateScale(24),
    borderTopRightRadius: moderateScale(24),
  },
});
