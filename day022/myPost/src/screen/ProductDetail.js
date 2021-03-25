import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {Header, CourseDetail} from '@components/Reusable';
import {Colors} from '@components/Colors'

export default function ProductDetail({navigation, route}) {
  const product = route.params;
  useEffect(() => {
    console.log(product);
  }, []);
  return (
    <View style={{flex: 1}}>
      <Header title="Product Detail" />
      <View style={{marginHorizontal: 16, marginTop: 20}}>
        <CourseDetail author="Irsyad" bgColor={Colors.bluecontainer} date="20 Feb 2020" />
      </View>
    </View>
  );
}
