import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {Header, CourseDetail} from '@components/Reusable';
import {Colors} from '@components/Colors';

export default function ProductDetail({navigation, route}) {
  const product = route.params;
  const String = `You can launch a new career in web development today by learning HTML & CSS. You don't need a computer science degree or expensive software. All you need is a computer, a bit of time, a lot of determination, and a teacher you trust.Once the form data has been validated on the client-side, it is okay to submit the form. And, since we covered validation in the previous article, we're ready to submit! This article looks at what happens when a user submits a form — where does the data go, and how do we handle it when it gets there? We also look at some of the security concerns.
  `;
  useEffect(() => {
    console.log(product);
  }, []);
  return (
    <View style={{flex: 1}}>
      <Header title="Product Detail" onPress={() => navigation.goBack()} />
      <View style={{marginHorizontal: 16, marginTop: 20}}>
        <CourseDetail
          author={product.supplier.full_name}
          bgColor={Colors.bluecontainer}
          date="20 Feb 2020"
          title="Introduction"
          contenttext={String}
        />
      </View>
    </View>
  );
}
