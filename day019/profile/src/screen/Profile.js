import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {Card, Header, ProfileImg, LoginButton, LoadingIndicator} from '../component/reusable';
import {useUser} from '../Context/UserContext';

export default function Profile({navigation}) {
  const [data, setData] = useState();
  const [edit, setEdit] = useState('update');
  const [isEdit, setIsEdit] = useState(false);
  const [loading, setLoading] = useState(true);

  const { user, clearData, isLogin} = useUser();

  useEffect(() => {
    setLoading(true);
    console.log('didmount');
    getCurrentData();
  },[]);

  async function getCurrentData() {
    console.log('get current user Data');
    try {
      const currentUser = await AsyncStorage.getItem('currentUserData');
      console.log('current user', currentUser);
      setData(JSON.parse(currentUser));
      console.log(data);
    //   return(JSON.parse(currentUser))
    } catch (error) {
      console.log(error);
    } finally {
        // setTimeout(() => {
            setLoading(false);
        // }, 1000);
    }
  }

  async function update() {
    console.log('update clicked');
    console.log(data);

    const userDataJSON = await AsyncStorage.getItem('user_data');
    const userDataString = JSON.parse(userDataJSON);
    console.log({userDataString});

    const userId = userDataString.findIndex(
      (element) => element.email == data.email,
    );
    console.log(`id found at index ${userId}`);

    console.log(data);
    userDataString[userId] = data;
    console.log({userDataString});

    AsyncStorage.setItem('user_data',JSON.stringify(userDataString))
    AsyncStorage.setItem('currentUserData',JSON.stringify(data))
  }

  function logout() {
    // AsyncStorage.removeItem('currentUserData');
    clearData()
    navigation.navigate('LandingScreen');
  }

  return (
    <View style={{flex: 1}}>
      <Header title="Profile" />

      {loading ? (
        <LoadingIndicator/>
      ) : 
        <View>
          <ProfileImg />
          <TextInput
            style={style.title}
            editable={isEdit}
            onChangeText={(first_name) => setData({...data, first_name})}>
            {user.username}
          </TextInput>
          <Text style={style.subTitle}>{/* {data.last_name} */}</Text>
          {/* <Card
            value={data.slogan}
            onChangeText={(slogan) => setData({...data, slogan})}
            editable={isEdit}
            text="Slogan"
          /> */}
          {/* <Card
            editable={isEdit}
            onChangeText={(jobs) => setData({...data, jobs})}
            text="Jobs"
            value={data.jobs}
          /> */}
          {/* <LoginButton
            onpress={() => {
              if (isEdit) {
                update();
                setEdit('Update');
                setIsEdit(false);
              } else {
                setEdit('Save');
                setIsEdit(true);
              }
            }}
            btnName={edit}
          /> */}
          <LoginButton onpress={() => logout()} btnName="LogOut" />
        </View>
      }
    </View>
  );
}

const style = StyleSheet.create({
  title: {
    alignSelf: 'center',
    fontSize: 30,
  },
  subTitle: {
    alignSelf: 'center',
    fontSize: 16,
    marginBottom: 20,
  },
});
