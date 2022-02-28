/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {ThemeProvider} from 'react-native-paper';
import {navigationRef} from './core/services/navigation/navigation.service';
import store from './store';

import MyStack from './navigation';
import {LoaderAtom} from './components';
import theme from './theme/app.theme';

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar translucent barStyle="light-content" />
      <ThemeProvider theme={theme}>
        <SafeAreaProvider>
          <LoaderAtom />
          <NavigationContainer ref={navigationRef}>
            <MyStack />
          </NavigationContainer>
        </SafeAreaProvider>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
