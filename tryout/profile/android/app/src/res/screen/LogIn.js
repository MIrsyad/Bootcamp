import React,{useState} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Header, Card , LoginButton} from '../component/reusable'

export default function SignUp({navigation}) {
    const[email,setEmail]=useState()
    const[password,setPassword]=useState()

    return (
        <View style={{flex:1}}>
            <Header title="Log In"></Header>
            <Card
                onChangeText={(email)=>setEmail(email)}
                placeholder="Email"
            />
            <Card
                onChangeText={(password)=>setPassword(password)}
                placeholder="Password"
            />
            <View style={style.loginButton}>
            <LoginButton 
                onpress={() => navigation.navigate('Profile')}
                btnName="Log In"
            />
             <Text style={style.forgotStyle}>Forgot your password?</Text>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    loginButton:{
        flex:1,
        justifyContent:'flex-end',
        marginBottom:30
    },
    forgotStyle:{
        color:'#5DB075',
        alignSelf:'center',
        padding:16,
        fontSize:16
    }
})
