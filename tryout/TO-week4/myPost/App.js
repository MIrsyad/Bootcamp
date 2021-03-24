import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {Provider, useSelector} from 'react-redux';
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
import store from './src/redux/store';

const Stack = createStackNavigator();

function App() {
  const [isChecking, setIsChecking] = useState(true);
  const {data, isLogin, loading} = useSelector(state => {
    // console.log({state});
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

  return (
    <View style={{flex: 1}}>
      <CustomStatusBar />
      {isChecking ? (
        <SplashScreen />
      ) : (
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}>
            {isLogin ? (
              <>
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
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
