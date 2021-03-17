import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Header, Card, LoginButton } from '../component/reusable'
import { useEmailValidation, usePasswordValidation, useAuth } from '../lib/index';

export default function SignUp({ navigation, route }) {
    // const { data } = props // data = props.data & {data} = props bedanya apa?
    const [isValidEmail, setTextEmail] = useEmailValidation()
    const [isValidPassword, setTextPassword] = usePasswordValidation()
    const [isMatch, currentUser, setEmailAuth, setPasswordAuth, setData] = useAuth(route.params)

    return (
        <View style={{ flex: 1 }}>
            <Header
                backpressed={() => navigation.navigate('LandingScreen')}
                back='Back'
                title="Log In"
            ></Header>
            <Card
                onChangeText={(email) => {
                    setEmailAuth(email)
                    setTextEmail(email)
                }}
                placeholder="Email"
            />
            <Card
                onChangeText={(password) => {
                    setPasswordAuth(password)
                    setTextPassword(password)
                }}
                secure={true}
                placeholder="password"
            />
            <View style={style.loginButton}>
                <LoginButton
                    disabled={!isValidEmail}
                    onpress={() => {

                        if (isMatch) {
                            navigation.navigate('Home')
                        } else {
                            alert('email ditemukan tetapi password salah')
                        }
                        console.log(isMatch);
                    }}
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