import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Card, Header, ProfileImg, LoginButton } from '../component/reusable'

export default function Profile(props) {
    // const {dataMatch}=route.params
    // console.log(dataMatch);
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
           <TouchableOpacity onPress={() => <App sc='SignUp'/>}>
                <Text style={style.textStyle}>Log out</Text>
            </TouchableOpacity>
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
    },
    textStyle:{
        color:'black',
        fontSize: 18
    }
})