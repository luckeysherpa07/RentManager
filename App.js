/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import Root from './src/routes/root';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return(
  <NavigationContainer>
    <Root />
  </NavigationContainer>
  )
};

export default App;
