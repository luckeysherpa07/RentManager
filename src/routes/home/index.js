import { createStackNavigator } from 'react-navigation-stack';
import Home from 'RentManager/src/containers/Home';

const HomeNavigator = createStackNavigator({
  Home: {
    screen: Home
  }
});

HomeNavigator.navigationOptions = {
  tabBarLabel: "Home"
};

export default HomeNavigator;
