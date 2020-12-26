import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from 'RentManager/src/containers/Dashboard';

const Stack = createStackNavigator();

export default function Home() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Dashboard" component={Dashboard} />
    </Stack.Navigator>
  );
}