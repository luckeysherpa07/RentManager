import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from 'RentManager/src/routes/home';
import Notification from 'RentManager/src/routes/notification';

const Tab = createBottomTabNavigator();

export default function Root() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Notification" component={Notification} />
    </Tab.Navigator>
  );
}
