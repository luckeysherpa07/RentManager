import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TenantList from 'RentManager/src/containers/TenantList';
import User from 'RentManager/src/containers/User';

const Stack = createStackNavigator();

export default function Tenant() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Tenant" component={TenantList} />
      <Stack.Screen name="User" component={User} />
    </Stack.Navigator>
  );
}