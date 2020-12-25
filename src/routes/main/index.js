import { createBottomTabNavigator } from 'react-navigation-tabs';
import Home from 'RentManager/src/routes/home';
import Notification from 'RentManager/src/routes/notification';

const Main = createBottomTabNavigator({
  Home,
  Notification
}, {
  tabBarOptions: {
    style: {
      backgroundColor: "white"
    }
  }
});

export default Main;
