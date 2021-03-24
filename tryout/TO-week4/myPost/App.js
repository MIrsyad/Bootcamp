import React, {Component} from 'react';
import {View} from 'react-native';
import {
  SplashScreen,
  Intro,
  LogIn,
  SignUp,
  HomeScreen,
} from './src/screen/index';
import {CustomStatusBar} from '@components/Reusable';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <CustomStatusBar />
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
            {/* <Stack.Screen name="IntroScreen" component={Intro} />
            <Stack.Screen name="LogInScreen" component={LogIn} />
            <Stack.Screen name="SignUpScreen" component={SignUp} />
            <Stack.Screen name="HomeScreen" component={HomeScreen} /> */}
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    );
  }
}
