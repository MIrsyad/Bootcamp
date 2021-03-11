import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Header, Card, LoginButton } from '../component/reusable'

export default function SignUp(props) {
    const [email, setEmail] = useState()
    const [nama, setNama] = useState()
    const [password, setPassword] = useState()
    let { data } = props


    function signup() {
        console.log(data);
        const currentData = data
        if (email !== null && password !== null && nama !== null) {
            console.log('data terisi');
            const dataRegister = {
                email: email,
                first_name: nama,
                password: password
            }
            currentData.push(dataRegister)
            const dataDitambahString = JSON.stringify(currentData)
            AsyncStorage.setItem('user_data', dataDitambahString)
            console.log('data ditambahkan');
            console.log({ currentData });
            props.registerTrue()
        } else {
            alert('data harap diisi');
        }

    }

    function validating(type) {
        if (email.includes('@') && email.includes('.com')) {
            if (password.length > 5) {
                return true
            } else {
                alert('Passwrod length min 6')
            }
        } else {
            alert('email is not valid')
        }
    }

    return (
        <View style={{ flex: 1 }}>
            <Header backpressed={props.backpressed}
                back={props.back}
                title="Sign Up">

            </Header>
            <Card
                onChangeText={(email) => setEmail(email)}
                placeholder="Email"
            />
            <Card
                onChangeText={(nama) => setNama(nama)}
                placeholder="first name"
            />
            <Card
                onChangeText={(password) => setPassword(password)}
                placeholder="Password"
                secure={true}
            />
            <View style={style.loginButton}>
                <LoginButton onpress={() => {
                    if (email == null || password == null || nama == null) {
                        alert('harap isi data')
                    } else {
                        if (validating()) {
                            signup()
                        }
                    }
                }}
                    btnName="Sign Up" />
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