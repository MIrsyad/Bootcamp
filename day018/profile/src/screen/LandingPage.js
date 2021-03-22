import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

export default function LandingPage({ navigation }) {
    const [userData, setUserData] = useState([])

    return (
        <View style={style.container}>
            <View style={{ flex: 5, justifyContent: 'center', alignItems: 'center' }}>
                <Image
                    style={style.image}
                    source={{
                        uri: 'https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-download-logo-30.png',
                    }}
                />
            </View>
            <View style={style.container}>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
                    <TouchableOpacity
                        onPress={() =>{
                            console.log(userData);
                            //  props.logInOnPress()
                            navigation.navigate('LogIn', userData)
                        }}>
                        <Text style={style.textStyle}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() =>
                            // props.signUpOnPress()
                            navigation.navigate('SignUp', userData)
                            // AsyncStorage.clear()
                        }>
                        <Text style={style.textStyle}>Register</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#5DB075'
    },
    textStyle: {
        color: 'white',
        fontSize: 18
    },
    image: {
        width: 150,
        height: 165,
    }
})