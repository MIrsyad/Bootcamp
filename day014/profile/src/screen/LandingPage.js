import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

export default function LandingPage({ navigation }) {
    const [userData, setUserData] = useState()

    useEffect(() => {
        getUserData();
    }, [])

    async function getUserData() {
        console.log('get user Data');
        try {
            const currentUser = await AsyncStorage.getItem('currentUserData');
            if (currentUser !== null) {
                console.log('current user ditemukan',currentUser);
                navigation.navigate('Home',currentUser)
            } else {
                console.log('current user tidak ditemukan');
                const userDataJSON = await AsyncStorage.getItem('user_data');
                if (userDataJSON !== null) {
                    const userDataString = JSON.parse(userDataJSON);
                    console.log('user data local', userDataString);
                    setUserData(userDataString)
                    console.log('data sudah tersimpan di state');
                } else {
                    console.log('data user masih kosong');
                }
            }
        } catch (error) {
            console.log(error);
        }
    }

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
                        onPress={() =>
                            //  props.logInOnPress()
                            navigation.navigate('LogIn', userData)
                        }>
                        <Text style={style.textStyle}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() =>
                            // props.signUpOnPress()
                            navigation.navigate('SignUp', userData)
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