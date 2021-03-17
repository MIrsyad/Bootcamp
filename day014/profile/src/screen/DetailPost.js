import React from 'react';
import {View, Text} from 'react-native';
import { Header, Card, LoginButton } from '../component/reusable'


export default function DetailPost({navigation, route}) {
    const data = route.params;
//   const data = {
//     userId: 1,
//     id: 1,
//     title:
//       'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
//     body:
//       'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
//   };

  return (
    <View>
      <Header
        backpressed={() => navigation.navigate('Home')}
        back="Back"
        title="Detail"/>
      <Text>{data.title}</Text>
      <Text />
      <Text>{data.body}</Text>
    </View>
  );
}
