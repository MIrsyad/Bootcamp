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
import MyProvider from './src/context/MyProvider';

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
    // this.getUserData();
    // this.clearData()
    setTimeout(() => {
      this.setState({isChecking: false});
    }, 2000);
  }

  // clearing local storage

  // async clearData() {
  //   await AsyncStorage.clear();
  // }

  // componentWillUnmount() {
  //   this.clearData();
  // }
  Home() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    );
  }

  render() {
    const {isChecking} = this.state;
    if (isChecking) {
      return (
        <MyProvider>
          <SplashScreen />
        </MyProvider>
      );
    }
    return (
      <NavigationContainer>
        <MyProvider>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen name="LandingScreen" component={LandingScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
            <Stack.Screen name="LogIn" component={LogInScreen} />
            <Stack.Screen name="Home" component={this.Home} />
            <Stack.Screen name="DetailPost" component={DetailPost} />
          </Stack.Navigator>
        </MyProvider>
      </NavigationContainer>
    );
  }
}
