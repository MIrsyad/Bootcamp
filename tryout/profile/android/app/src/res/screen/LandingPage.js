import React from 'react'
import { useState } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import App from '../../../../../App'

export default function LandingPage(props) {
    const[screen,setScreen]=useState('LandingPage')

    function run() {
        console.log("terpencet");
        setScreen('LogIn')
    }

    return (
        <View style={style.container}>
            <View style={{flex:5,justifyContent:'center',alignItems:'center'}}>
                <Image
                    style={style.image}
                    source={{
                    uri: 'http://pngimg.com/uploads/google/google_PNG19630.png',
                    }}
                />            
            </View>
            {/* <App sc={screen} action={run}/> */}
            <View style={style.container}>
                <View style={{flex:1, flexDirection:'row',justifyContent:'space-around'}}>
                    <TouchableOpacity onPress={() => run()}>
                      <Text style={style.textStyle}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => App({sc:'SignUp'}) }>
                        <Text style={style.textStyle}>Register</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#5DB075'
    },
    textStyle:{
        color:'white',
        fontSize: 18
    },
    image: {
        width:150,
        height: 165,
    }
})