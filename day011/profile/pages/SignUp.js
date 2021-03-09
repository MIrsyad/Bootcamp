import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Header, Card , LoginButton} from '../src/component/reusable'

export default function SignUp(props) {
    return (
        <View style={{flex:1}}>
            <Header title="Sign Up"></Header>
            <Card
                onChangeText={(password)=>setPassword(password)}
                placeholder="Email"
            />
            <Card
                onChangeText={(password)=>setPassword(password)}
                placeholder="Password"
            />
            <View style={style.loginButton}>
             <LoginButton onpress={props.signUp} btnName="Sign Up"></LoginButton>
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
