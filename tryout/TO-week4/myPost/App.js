import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {SplashScreen, Intro} from './src/screen/index'
import {CustomStatusBar} from '@components/Reusable';

export default class App extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <CustomStatusBar/>
        {/* <SplashScreen/> */}
        <Intro/>
      </View>
    )
  }
}
