import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

import {colors} from '../../../theme/colors';
import {typography} from '../../../theme/typography';

const Credit = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={[typography.h1]}>Credit</Text>
    </SafeAreaView>
  );
};

export default Credit;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
});
