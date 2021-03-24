import React, {useState, useEffect} from 'react';
import {View,Text} from 'react-native';
import {Provider, useSelector} from 'react-redux';
import {
  SplashScreen,
  Intro,
  LogIn,
  SignUp,
  HomeScreen,
  ProfileScreen,
  LogOut
} from './src/screen/index';
import {CustomStatusBar} from '@components/Reusable';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import store from './src/redux/store';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MyTheme = {
  dark: false,
  colors: {
    primary: 'rgb(255, 45, 85)',
    background: 'white',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
};

function App() {
  const [isChecking, setIsChecking] = useState(true);
  const {data, isLogin, loading} = useSelector(state => {
    return {
      data: state.global.data,
      isLogin: state.global.isLogin,
      loading: state.global.loading,
    };
  });

  useEffect(() => {
    setTimeout(() => {
      setIsChecking(false);
    }, 2000);
  }, []);

  function Home() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="HomeScreen" component={HomeScreen} />
        <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
        <Tab.Screen name="LogOut" component={LogOut} />
      </Tab.Navigator>
    );
  }

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <CustomStatusBar />
      {isChecking ? (
        <SplashScreen />
      ) : (
        <NavigationContainer theme={MyTheme}>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}>
            {isLogin ? (
              <>
                {/* <Stack.Screen name="HomeScreen" component={HomeScreen} /> */}
                <Stack.Screen name="TabScreen" component={Home} />
              </>
            ) : (
              <>
                <Stack.Screen name="IntroScreen" component={Intro} />
                <Stack.Screen name="LogInScreen" component={LogIn} />
                <Stack.Screen name="SignUpScreen" component={SignUp} />
              </>
            )}
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </View>
  );
}

const master = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default master;
