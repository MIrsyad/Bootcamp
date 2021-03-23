import React from 'react'
import { View, Text } from 'react-native'
import {CustomButton, Header} from '@components/Reusable'

export default function splashscreen() {
    return (
        <View >
            <Header/>   
            <Text >ini splash Screen</Text>
            <CustomButton text='Next'/>
        </View>
    )
}