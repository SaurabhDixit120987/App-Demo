import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {colors} from '../../../theme/colors';
import {typography} from '../../../theme/typography';

const Payments = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={[typography.h1]}>Payments</Text>
    </SafeAreaView>
  );
};

export default Payments;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
});
