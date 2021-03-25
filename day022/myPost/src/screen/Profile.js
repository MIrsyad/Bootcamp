import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {Header, Avatar, CardText} from '@components/Reusable';
import {useSelector} from 'react-redux';

export default function Profile({navigation}) {
  const {data} = useSelector(state => {
    return {
      data: state.global.data,
    };
  });
  const user = data.data;
  useEffect(() => {
    console.log(user);
  }, []);
  return (
    <View>
      <Header title="Profile" onPress={() => navigation.goBack()} />
      <View>
        <Avatar />
        <CardText title='Nama' value={user.full_name} />
        <CardText title='Email' value={user.email} />
      </View>
    </View>
  );
}
