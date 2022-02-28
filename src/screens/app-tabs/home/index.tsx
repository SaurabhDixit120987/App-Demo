import * as React from 'react';
import {StyleSheet, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {colors} from '../../../theme/colors';
import {typography} from '../../../theme/typography';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={[typography.h1]}>Home</Text>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
});
