import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import { LandingScreen, ProfileScreen, SignUpScreen, LogInScreen, SplashScreen } from './src/screen/index';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class App extends Component {
  state = {
    isLogin: false,
    userData: [],
    currentUserData: {},
    currentScreen: 'LandingPageScreen',
    isChecking: true
  }

  async getUserData() {
    try {
      const currentUser = await AsyncStorage.getItem('currentUserData');
      if (currentUser !== null) {
        console.log('current user ditemukan');
        this.renderScreenMatch('ProfileScreen')
      } else {
        console.log('current user tidak ditemukan');
        const userDataJSON = await AsyncStorage.getItem('user_data');
        if (userDataJSON !== null) {
          const userDataString = JSON.parse(userDataJSON);
          console.log('user data local', userDataString);
          this.setState({ userData: userDataString })
          console.log('data sudah tersimpan di state');
        } else {
          console.log('data user masih kosong');
        }
      }
    } catch (error) {

    } finally {
      setTimeout(() => {
        this.setState({ isChecking: false })
      }, 2000);
    }
  }

  async getCurrentUserData() {
    const currenUserDataJSON = await AsyncStorage.getItem('currentUserData');
    console.log('current user data local', { currenUserDataJSON });
    if (currenUserDataJSON !== null) {
      const currentUserDataString = JSON.parse(currenUserDataJSON);
      this.setState({ currentUserData: currentUserDataString })
      console.log('data current sudah tersimpan di state');
    }
  }

  componentDidMount() {
    this.getUserData();
  }

  renderScreen = (e) => {
    this.setState({ currentScreen: e });
  }

  renderScreenMatch = async (e) => {
    const currenUserDataJSON = await AsyncStorage.getItem('currentUserData');
    if (currenUserDataJSON !== null) {
      const currentUserDataString = JSON.parse(currenUserDataJSON);
      this.setState({ currentUserData: currentUserDataString })
      console.log('data current sudah tersimpan di state');
      this.setState({ currentScreen: e });
    }
  }

  rendeTab() {
    const { currentScreen, userData, currentUserData } = this.state;
    switch (currentScreen) {
      case 'LogInScreen':
        return <LogInScreen
          backpressed={() => this.renderScreen('LandingPage')}
          back='Back'
          data={userData}
          logintrue={() => this.renderScreenMatch('ProfileScreen')}
        />
      case 'SignUpScreen':
        return <SignUpScreen
          backpressed={() => this.renderScreen('LandingPage')}
          back='Back'
          data={userData}
          registerTrue={() => this.renderScreen('LandingPage')}
        />
      case 'ProfileScreen':
        return <ProfileScreen
          data={currentUserData}
          signOut={() => this.renderScreen('LandingPage')}
        />
      default:
        return <LandingScreen
          logInOnPress={() => this.renderScreen('LogInScreen')}
          signUpOnPress={() => this.renderScreen('SignUpScreen')}
        />
    }
  }

  // async clearData() {
  //   await AsyncStorage.clear();
  // }

  // componentWillUnmount() {
  //   this.clearData();
  // }
  render() {
    const { isChecking } = this.state;
    if (isChecking) {
      return <SplashScreen />
    }
    return (
      <View style={{ width: '100%', height: '100%' }}>
        {this.rendeTab()}
      </View>
    )
  }
}