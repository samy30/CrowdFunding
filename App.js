import { createAppContainer, createStackNavigator } from 'react-navigation';
import LoginScreen from './WorkSpace/Screens/LoginScreen';
import LoginEmailScreen from './WorkSpace/Screens/LoginEmailScreen';
import SigninScreen from './WorkSpace/Screens/SigninScreen';
import HomeScreen from './WorkSpace/Screens/HomeScreen';
import ProfileScreen from './WorkSpace/Screens/ProfileScreen';
const RootStack = createAppContainer(createStackNavigator({
  Screen1: {
    screen: LoginScreen,
    navigationOptions: {
      header: null,
    },
  },
  Screen2: {
    screen: LoginEmailScreen,
  },
  Screen3: {
    screen: SigninScreen,
  },
  Screen4: {
    screen: HomeScreen,
    navigationOptions: {
header: null, 
    },
    Screen5 : {
      screen: ProfileScreen,
    },
  }
}));

export default RootStack;