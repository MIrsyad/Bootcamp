import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LandingPage from './android/app/src/res/screen/LandingPage';
import SignUp from './android/app/src/res/screen/SignUp';
import LogIn from './android/app/src/res/screen/LogIn';
import Profile from './android/app/src/res/screen/Profile';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LandingPage" component={LandingPage} options={{headerShown:false}}/>
        <Stack.Screen name="LogIn" component={LogIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>

    // <LandingPage/>
  )
}
