import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { Card, Header, ProfileImg, LoginButton } from '../component/reusable'

export default function Profile({navigation, route}) {
    const [data, setData] = useState(route.params)
    const [edit, setEdit] = useState('update')
    const [isEdit, setIsEdit] = useState(false)

    async function update() {
        console.log('update clicked');
        console.log(data );

        const userDataJSON = await AsyncStorage.getItem('user_data');
        const userDataString = JSON.parse(userDataJSON);
        console.log({ userDataString });

        const userId = userDataString.findIndex(element => element.email == data.email)
        console.log(`id found at index ${userId}`);

        console.log(data);
        userDataString[userId] = data
        console.log({ userDataString });

        // AsyncStorage.setItem('user_data',JSON.stringify(userDataString))
        // AsyncStorage.setItem('currentUserData',JSON.stringify(data))
    }

    function logout() {
        AsyncStorage.removeItem('currentUserData')
        navigation.navigate('LandingScreen')
    }

    return (
        <View style={{ flex: 1 }}>
            <Header title="Profile" />
            <ProfileImg />
            <TextInput 
            style={style.title}
            editable={isEdit}
            onChangeText={(first_name) => setData({ ...data, first_name })}
            >{data.first_name}</TextInput>
            <Text style={style.subTitle}>{data.last_name}</Text>
            <Card
                value={data.slogan}
                onChangeText={(slogan) => setData({ ...data, slogan })}
                editable={isEdit}
                text='Slogan'
            />
            <Card
                editable={isEdit}
                onChangeText={(jobs) => setData({ ...data, jobs })}
                text='Jobs'
                value={data.jobs}
            />
            <LoginButton
                onpress={() => {
                    if (isEdit) {
                        update()
                        setEdit('Update')
                        setIsEdit(false)
                    } else {
                        setEdit('Save')
                        setIsEdit(true)
                    }
                }}
                btnName={edit}
            />
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