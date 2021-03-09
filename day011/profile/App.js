import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import { LandingScreen, ProfileScreen, SignUpScreen, LogInScreen } from './pages/index';
import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem('@storage_Key', jsonValue)
  } catch (e) {
    // saving error
  }
}

export default class App extends Component {
  state = {
    isLogin: false,
    userData: { nama: 'irsyad' },
    currentUserData: {},
    currentScreen: 'LandingPageScreen'
  }

  async getUserData() {
    const userDataJSON = await AsyncStorage.getItem('user_data');
    console.log('user data local', { userDataJSON });
    if (userDataJSON !== null) {
      const userDataString = JSON.parse(userDataJSON);
      this.setState({ userData: userDataString })
      console.log('data sudah tersimpan di state');
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
    // const { userData } = this.state
    // console.log('user data state', userData);
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
    const { currentScreen } = this.state;
    const { userData } = this.state;
    const { currentUserData } = this.state;
    switch (currentScreen) {
      case 'LogInScreen':
        return <LogInScreen
          data={userData}
          logintrue={() => this.renderScreenMatch('ProfileScreen')}
        />
      case 'SignUpScreen':
        return <SignUpScreen
          signUp={() => this.renderScreen('ProfileScreen')}
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

  render() {
    const { isLogin, userData } = this.state;
    return (
      <View style={{ width: '100%', height: '100%' }}>
        {this.rendeTab()}
      </View>
    )
  }
}
