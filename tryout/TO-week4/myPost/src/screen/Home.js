import React from 'react';
import {View, Text} from 'react-native';
import {LoncengLogo, Coolkidsdiscussion, CoolKidsAlone} from '@components/Svg';
import {useSelector} from 'react-redux';
import {Colors} from '@components/Colors';
import {
  CustomInput,
  HeaderHome,
  TagContainer,
  Card,
} from '@components/Reusable';

export default function Home({navigation}) {
  const {data, isLogin, loading} = useSelector(state => {
    return {
      data: state.global.data,
      isLogin: state.global.isLogin,
      loading: state.global.loading,
    };
  });
  const user = data.data;

  return (
    <View style={{flex: 1}}>
      <HeaderHome xmlFile={LoncengLogo} name={user.full_name} />
      <CustomInput placeholder="Search course" />
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 16,
          alignItems: 'center',
        }}>
        <Text style={{marginRight: 8}}>Category :</Text>
        <TagContainer text="#CSS" />
        <TagContainer text="#UX" />
        <TagContainer text="#Swift" />
        <TagContainer text="#UI" />
      </View>
      <View style={{flex: 1, margin: 16}}>
        <Card
          price="$50"
          xmlFile={Coolkidsdiscussion}
          duration="3h 30min"
          title="UI"
          subtitle="Advanced mobile interface design"
        />
        <Card
          color={Colors.bluecontainer}
          price="$50"
          xmlFile={CoolKidsAlone}
          duration="3h 30min"
          title="UI"
          subtitle="Advanced mobile interface design"
        />
      </View>
    </View>
  );
}
