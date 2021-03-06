import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Header, Card, LoginButton } from '../component/reusable'

export default function SignUp(props) {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const data = props.data


    function signup() {
        console.log('panjang',data.length());
        console.log('bingungh anjir');
        console.log(data);
        if (email !== null && password !== null) {
            console.log('data terisi');
            const dataRegister = {
                email: email,
                password: password
            }
            if (data.length == 0) {
                console.log('data length = 0');
                const dataDitambah = dataRegister
                const dataDitambahString = JSON.stringify(dataDitambah)
                AsyncStorage.setItem('user_data', dataDitambahString)
                console.log(dataDitambahString);
                props.registerTrue()
            } else {
                console.log('data length lebih dari 1');
                const dataDitambah = data.push(dataRegister)
                const dataDitambahString = JSON.stringify(dataDitambah)
                AsyncStorage.setItem('user_data', dataDitambahString)
                console.log(dataDitambahString);
                props.registerTrue()
            }
        } else {
            alert('data harap diisi');
        }
    

    }


    return (
        <View style={{ flex: 1 }}>
            <Header title="Sign Up"></Header>
            <Card
                onChangeText={(email) => setEmail(email)}
                placeholder="Email"
            />
            <Card
                onChangeText={(password) => setPassword(password)}
                placeholder="Password"
            />
            <View style={style.loginButton}>
                <LoginButton onpress={() => signup()} btnName="Sign Up"></LoginButton>
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