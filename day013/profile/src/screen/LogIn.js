import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Header, Card, LoginButton } from '../component/reusable'

export default function SignUp(props) {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const {data} = props // data = props.data & {data} = props bedanya apa?


    function login() {
        console.log({data});
        const userId = data.findIndex(element => element.email == email)
        if (userId >= 0) {
            const isPasswordMatch = (data[userId].password == password)
            if (isPasswordMatch) {
                const dataMatch = data[userId]
                console.log('data Benar');
                AsyncStorage.setItem('currentUserData',JSON.stringify(dataMatch))
                console.log('data saved to local');
                props.logintrue()
            } else {
                alert("Password tidak sesuai")
            }
        } else {
            alert("email tidak terdaftar")
        }

    }

    return (
        <View style={{ flex: 1 }}>
            <Header 
            backpressed={props.backpressed}
            back={props.back}
            title="Log In"
            ></Header>
            <Card
                onChangeText={(email) => setEmail(email)}
                placeholder="Email"
            />
            <Card
                onChangeText={(password) => setPassword(password)}
                placeholder="Password"
                secure={true}
            />
            <View style={style.loginButton}>
                <LoginButton
                    onpress={() => login()}
                    btnName="Log In"
                />
                <Text style={style.forgotStyle}>Forgot your password?</Text>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    loginButton: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 30
    },
    forgotStyle: {
        color: '#5DB075',
        alignSelf: 'center',
        padding: 16,
        fontSize: 16
    }
})