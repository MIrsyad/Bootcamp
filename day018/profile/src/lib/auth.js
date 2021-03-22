import React, { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function useAuth(userData) {
  const [data, setData] = useState(userData)
  const [currentUser, setCurrentUser] = useState()
  const [emailAuth, setEmailAuth] = useState('');
  const [passwordAuth, setPasswordAuth] = useState('');
  const [isMatch, setIsMatch] = useState(false);

  function login() {
    // console.log({ data });
    const userId = data.findIndex(element => element.email == emailAuth)
    if (userId >= 0) {
      const isPasswordMatch = (data[userId].password == passwordAuth)
      if (isPasswordMatch) {
        const dataMatch = data[userId]
        console.log('data Benar');
        setCurrentUser(dataMatch)
        AsyncStorage.setItem('currentUserData', JSON.stringify(dataMatch))
        console.log('data saved to local');
        setIsMatch(true)
      } else {
        console.log('data tidak sesuai');
      }
    } else {
      // console.log('email tidak terdaftar');
    }

  }

  useEffect(() => {
    login()
  });

  return [isMatch, currentUser, setEmailAuth, setPasswordAuth, setData]
}
