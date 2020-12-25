import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TenantList from 'RentManager/src/containers/TenantList';

const Stack = createStackNavigator();

export default function Home() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Tenant" component={TenantList} />
    </Stack.Navigator>
  );
}