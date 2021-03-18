import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';



export default function splashscreen() {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{
                    uri: 'https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-download-logo-30.png',
                }} />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'black'
    },
    image: {
        width: 150,
        height: 165,
    }
})