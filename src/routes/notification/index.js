import { createStackNavigator } from 'react-navigation-stack';
import Notification from 'RentManager/src/containers/Notification';

const NotificationNavigator = createStackNavigator({
  Notification: {
    screen: Notification
  }
});

NotificationNavigator.navigationOptions = {
  tabBarLabel: "Notification"
};

export default NotificationNavigator;
