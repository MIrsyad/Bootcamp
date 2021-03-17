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

  // async getUserData() {
  //   try {
  //     const currentUser = await AsyncStorage.getItem('currentUserData');
  //     if (currentUser !== null) {
  //       console.log('current user ditemukan');
  //       this.renderScreenMatch('ProfileScreen')
  //     } else {
  //       console.log('current user tidak ditemukan');
  //       const userDataJSON = await AsyncStorage.getItem('user_data');
  //       if (userDataJSON !== null) {
  //         const userDataString = JSON.parse(userDataJSON);
  //         console.log('user data local', userDataString);
  //         this.setState({ userData: userDataString })
  //         console.log('data sudah tersimpan di state');
  //       } else {
  //         console.log('data user masih kosong');
  //       }
  //     }
  //   } catch (error) {

  //   } finally {
  //     setTimeout(() => {
  //       this.setState({ isChecking: false })
  //     }, 2000);
  //   }
  // }

  componentDidMount() {
    // this.getUserData();
    // this.clearData()
    setTimeout(() => {
      this.setState({isChecking: false});
    }, 2000);
  }

  // renderScreen = (e) => {
  //   this.setState({ currentScreen: e });
  // }

  // renderScreenMatch = async (e) => {
  //   const currenUserDataJSON = await AsyncStorage.getItem('currentUserData');
  //   if (currenUserDataJSON !== null) {
  //     const currentUserDataString = JSON.parse(currenUserDataJSON);
  //     this.setState({ currentUserData: currentUserDataString })
  //     console.log('data current sudah tersimpan di state');
  //     this.setState({ currentScreen: e });
  //   }

  // }

  // rendeTab() {
  //   const { currentScreen, userData, currentUserData } = this.state;
  //   switch (currentScreen) {
  //     case 'LogInScreen':
  //       return <LogInScreen
  //         backpressed={() => this.renderScreen('LandingPage')}
  //         back='Back'
  //         data={userData}
  //         logintrue={() => this.renderScreenMatch('ProfileScreen')}
  //       />
  //     case 'SignUpScreen':
  //       return <SignUpScreen
  //         backpressed={() => this.renderScreen('LandingPage')}
  //         back='Back'
  //         data={userData}
  //         registerTrue={() => this.renderScreen('LandingPage')}
  //       />
  //     case 'ProfileScreen':
  //       return <ProfileScreen
  //         data={currentUserData}
  //         signOut={() => {
  //           this.getUserData()
  //           this.renderScreen('LandingPage')
  //         }}
  //       />
  //     default:
  //       return <LandingScreen
  //         logInOnPress={() => this.renderScreen('LogInScreen')}
  //         signUpOnPress={() => this.renderScreen('SignUpScreen')}
  //       />
  //   }
  // }

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
        <Tab.Screen name="Profil  e" component={ProfileScreen} />
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
      </NavigationContainer>

      // <View>
      //   <Text>Text</Text>
      // </View>

      // <View style={{ width: '100%', height: '100%' }}>
      //   {this.rendeTab()}
      // </View>
    );
  }
}
