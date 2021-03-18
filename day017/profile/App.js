import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {
  LandingScreen,
  ProfileScreen,
  SignUpScreen,
  LogInScreen,
  SplashScreen,
  HomeScreen,
  DetailPost,
} from './src/screen/index';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import UserProvider from './src/Context/UserContext';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default class App extends Component {
  state = {
    isLogin: false,
    userData: [],
    currentUserData: {},
    currentScreen: 'LandingPageScreen',
    isChecking: true,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({isChecking: false});
    }, 2000);
  }

  // async clearData() {
  //   await AsyncStorage.clear();
  // }

  // componentWillUnmount() {
  //   this.clearData();
  // }
  Home() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Product" component={HomeScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    );
  }

  render() {
    const {isChecking} = this.state;
    if (isChecking) {
      return <SplashScreen />;
    }
    return (
      <NavigationContainer>
        <UserProvider>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen name="LandingScreen" component={LandingScreen} />
            <Stack.Screen name="Home" component={this.Home} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
            <Stack.Screen name="LogIn" component={LogInScreen} />
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="DetailPost" component={DetailPost} />
          </Stack.Navigator>
        </UserProvider>
      </NavigationContainer>
    );
  }
}
