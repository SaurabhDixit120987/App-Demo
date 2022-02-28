/***
 * @description app route stack navigator
 */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SpendingLimit from '../screens/spendingLimits';
import {dashboard, spendingLimit} from './labels';
import TabNavigator from './mainRoute';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={dashboard} component={TabNavigator} />
      <Stack.Screen name={spendingLimit} component={SpendingLimit} />
    </Stack.Navigator>
  );
};

export default MyStack;
