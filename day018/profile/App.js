import React, {Component, useState, useEffect} from 'react';
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
import UserProvider, {useUser} from './src/Context/UserContext';
import {View} from 'react-native';

// run/execute the query

const callRates = async () =>
  client
    .query({
      query: QUERY_RATES,
    })
    .then((result) => console.log({result}))
    .catch((e) => console.log({e}))
    .finnaly(() => {
      console.log('done');
    });

// 5 . bungkus provider
// const App = () => {
//   useEffect(() => {
//     callRates();
//   }, []);
//   return (
//     <ApolloProvider client={client}>
//       <View>
//         <Text>Graph Apps</Text>
//         <Home />
//       </View>
//     </ApolloProvider>
//   );
// };

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  const [isChecking, setIsChecking] = useState(true);
  const {isLogin, getLocalUser} = useUser();

  useEffect(() => {
    setTimeout(() => {
      setIsChecking(false);
    }, 2000);
  }, []);

  // async clearData() {
  //   await AsyncStorage.clear();
  // }
  function Home() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Product" component={HomeScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    );
  }

  return (
    <View style={{flex: 1}}>
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
                <Stack.Screen name="Home" component={Home} />

                <Stack.Screen name="DetailPost" component={DetailPost} />
              </>
            ) : (
              <>
                <Stack.Screen name="LandingScreen" component={LandingScreen} />
                <Stack.Screen name="SignUp" component={SignUpScreen} />
                <Stack.Screen name="LogIn" component={LogInScreen} />
              </>
            )}
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </View>
  );
};
const MasterApp = () => (
  <UserProvider>
    <App />
  </UserProvider>
);

export default MasterApp;
