import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Card, Header, ProfileImg, LoginButton } from '../component/reusable'

export default function Profile({ navigation }) {
    return (
        <View style={{flex:1}}>
            <Header title="Profile"/>
            <ProfileImg/>
            <Text style={style.title}>Jhon Julian</Text>
            <Text style={style.subTitle}>Im Superman</Text>
            <Card 
                editable={false}
                text='Slogan'
                placeholder='Slogan'
            />
             <Card 
                editable={false}
                text='Jobs'
                placeholder='Jobs'
            />
            <LoginButton btnName="Update"/>
        </View>
    )
}

const style = StyleSheet.create({
    title:{
        alignSelf:'center',
        fontSize:30
    },
    subTitle:{
        alignSelf:'center',
        fontSize:16,
        marginBottom:20
    }
})