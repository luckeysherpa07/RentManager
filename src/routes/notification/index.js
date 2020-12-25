import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import NotificationList from 'RentManager/src/containers/NotificationList';

const Stack = createStackNavigator();

export default function Notification() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="NotificationList" component={NotificationList} />
    </Stack.Navigator>
  );
}