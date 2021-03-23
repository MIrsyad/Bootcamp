import React from 'react'
import { View, Text } from 'react-native'
import { StyleSheet, TouchableOpacity } from "react-native"
import {Colors} from '@components/Colors'
const CustomButton = (props) => {
    return (
      <View>
          <TouchableOpacity style={styles.buttonContainer} >
              <Text style={styles.CustomButtonText}>{props.text}</Text>
          </TouchableOpacity>
      </View>
    );
  };

  const Header = (props) => {
      return(
          <View>
              
              <Text>{props.title}</Text>
          </View>
      )
  }

  const styles = StyleSheet.create({
      buttonContainer: {
          backgroundColor: Colors.primaryColor,
          borderRadius:10,
          marginHorizontal:16,
          marginVertical:32,
          height:56,
          width:311,
          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center'
      },
      CustomButtonText: {
          color: 'white',
          fontSize: 16
      }
  })

  export {CustomButton, Header}