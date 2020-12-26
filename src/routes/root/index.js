import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Tenant from 'RentManager/src/routes/tenant';
import Notification from 'RentManager/src/routes/notification';
import Dashboard from 'RentManager/src/routes/Dashboard';

const Tab = createBottomTabNavigator();

export default function Root() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="Tenent" component={Tenant} />
      <Tab.Screen name="Notification" component={Notification} />
    </Tab.Navigator>
  );
}
