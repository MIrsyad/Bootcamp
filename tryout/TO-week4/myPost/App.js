import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {SplashScreen} from './src/screen/index'

export default class App extends Component {
  render() {
    return (
      <View>
        <SplashScreen/>
      </View>
    )
  }
}
