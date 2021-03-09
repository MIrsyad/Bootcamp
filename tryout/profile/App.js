import React, {Component} from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LandingPage from './android/app/src/res/screen/LandingPage';
import SignUp from './android/app/src/res/screen/SignUp';
import LogIn from './android/app/src/res/screen/LogIn';
import Profile from './android/app/src/res/screen/Profile';
import { View, Text, StyleSheet, Button} from 'react-native';
import { useState } from 'react';

// const Stack = createStackNavigator();

// export default function App(props) {
//   let screen = <LandingPage/>
//     console.log(props.sc);
//     if (props.sc == 'LogIn') {
//       console.log(props.sc);
//       screen = <LogIn/>
//     }else if (props.sc == 'SignUp') {
//       console.log(props.sc);
//       screen = <SignUp/>
//     }else if (props.sc == 'Profile') {
//       console.log(props.sc);
//       screen = <Profile/>
//     }else{
//       console.log(props.sc);
//       screen = <LandingPage/>
//     }
//   return (
//     <View style={{width:'100%', height:'100%'}}>
//       {screen}
//     </View>
//   )
// }

export class Hi extends Component {
  render() {
    const {name} = this.props
    return (
      <View>
        <Text> Hi {name} </Text>
      </View>
    )
  }
}


const Tab3 = (props) => {
  return (
    <View>
      <Text>Tab 3 </Text>
      <Button title="set tab 1" onPress={() => props.onPress()} />
    </View>
  );
};

export default class App extends Component {
  state={
    currentTab : 0
  }

  openTab(e) {
    this.setState({currentTab: e});
  }

  rendeTab() {
    const {currentTab} = this.state;
    switch (currentTab) {
      case 3:
        return <Tab3 onPress={() => this.openTab(1)} />;
      case 2:
        return <Text>Tab 2</Text>;
      case 1:
      default:
        return <Text>Tab 1</Text>;
    }
  }

  render() {
    return (
      <View style={{flex:1}}>
        <Hi name='Irsyad'/>
        <View style={styles.tabContainer}>
          {[1,2,3].map((e) => (
            <Button
              title={`tab ${e}`}
              onPress={() => this.openTab(e)}
              key={e}
            />
          ))}
        </View>

        {this.rendeTab()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  tabContainer:{
    flexDirection:'row'
  }
})