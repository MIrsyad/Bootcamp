import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Card, Header, ProfileImg, LoginButton } from '../component/reusable'

export default function Profile(props) {
    const [data, setData] = useState(props.data)

    function update() {
        console.log('update clicked');
        //     console.log(data);
        //     if (email !== null && password !== null) {
        //         console.log('data terisi');
        //         const dataRegister = {
        //             email: email,
        //             password: password
        //         }
        //         const dataDitambah = [...data, dataRegister]
        //         const dataDitambahString=JSON.stringify(dataDitambah)
        //         AsyncStorage.setItem('user_data', dataDitambahString)
        //         console.log(dataDitambahString);
        //         props.registerTrue()
        //     } else {
        //         alert('data harap diisi');
        //     }

    }

    async function removeItemValue(key) {
        try {
            await AsyncStorage.removeItem(key);
            return true;
        }
        catch (exception) {
            return false;
        }
    }

    function logout() {
        AsyncStorage.removeItem('currentUserData')
        props.signOut()
    }

    return (
        <View style={{ flex: 1 }}>
            <Header title="Profile" />
            <ProfileImg />
            <Text style={style.title}>{data.first_name}</Text>
            <Text style={style.subTitle}>{data.last_name}</Text>
            <Card
                editable={false}
                text='Slogan'
                placeholder={data.slogan}
            />
            <Card
                editable={false}
                text='Jobs'
                placeholder={data.jobs}
            />
            <LoginButton onpress={() => update()} btnName="Update" />
            <LoginButton onpress={() => logout()} btnName="LogOut" />
        </View>
    )
}

const style = StyleSheet.create({
    title: {
        alignSelf: 'center',
        fontSize: 30
    },
    subTitle: {
        alignSelf: 'center',
        fontSize: 16,
        marginBottom: 20
    }
})