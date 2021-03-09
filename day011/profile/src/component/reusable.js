import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Image } from 'react-native'

const Header = (props) => {
    return (
        <View style={style.header}>
                <Text style={style.textStyle}>{props.title}</Text>
                <Text>{props.subTitle}</Text>
        </View>
    )
}

const Card= (props) => {
    return (
        <View>
            <Text style={style.cardText}>{props.text}</Text>
            <TextInput
            editable={props.editable}
            onChangeText={props.onChangeText}
            placeholder={props.placeholder}
            style={style.textInput}
            />
        </View>
    )
}

const ProfileImg = (props) => {
    return (
        <View>
            <Image source={{ uri:"https://www.t-nation.com/system/publishing/articles/10005529/original/6-Reasons-You-Should-Never-Open-a-Gym.png" }} style={style.profileImg} />
        </View>
    )
}

const LoginButton = (props) => {
    return(
        <TouchableOpacity onPress={props.onpress} style={style.button}>
            <Text style={style.textButton} >{props.btnName}</Text>
        </TouchableOpacity> 
    )
}

const style = StyleSheet.create({
    header:{
        flexDirection:'row',
        justifyContent:'center'
    },
    textStyle: {
        paddingTop:15,
        fontSize: 30
    },
    textInput:{
        borderRadius: 8,
        borderWidth:1,
        borderStyle:'solid',
        borderColor:'#E8E8E8',
        backgroundColor: '#F6F6F6',
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    button:{
        backgroundColor: "#5DB075",
        borderRadius:100,
        display:'flex',
        alignItems:'center',
        paddingVertical:16,
        marginHorizontal:16
    },
    textButton:{
        color:'#FFFFFF',
        fontSize:16
    },
    profileImg: {
        margin: 30,
        height: 150,
        width: 150,
        borderRadius: 100,
        alignSelf:'center'
    },
    cardText: {
        marginHorizontal:20
    }
})

export{
    Header,
    Card,
    LoginButton,
    ProfileImg
}