import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Card, Header, ProfileImg, LoginButton } from '../src/component/reusable'

export default function Profile(props) {
    const [data, setData] = useState(props.data)
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
            <LoginButton onpress={props.signOut} btnName="LogOut" />
            {/* <LoginButton onpress={() =>console.log(data)} btnName="LogOut" /> */}

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