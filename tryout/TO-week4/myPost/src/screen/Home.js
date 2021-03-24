import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, FlatList} from 'react-native';
import {LoncengLogo, Coolkidsdiscussion, CoolKidsAlone} from '@components/Svg';
import {useDispatch, useSelector} from 'react-redux';
import {Colors} from '@components/Colors';
import {
  CustomInput,
  HeaderHome,
  TagContainer,
  Card,
} from '@components/Reusable';
import {getProduct} from '../redux/product/action';

const Item = ({item}) => (
  // <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
  //   <Text style={styles.title}>{item.title}</Text>
  // </TouchableOpacity>
  <Card
    price={item.price}
    xmlFile={Coolkidsdiscussion}
    duration="3h 30min"
    title={item.name}
    subtitle="Advanced mobile interface design"
  />
);

export default function Home({navigation}) {
  const [selectedId, setSelectedId] = useState(null);
  const {product, loading, data} = useSelector(state => {
    return {
      data: state.global.data,
      product: state.product.product,
      loading: state.product.loading,
    };
  });

  const dispatch = useDispatch();
  const user = data.data;

  useEffect(() => {
    dispatch(getProduct(data.data.token));
    console.log('use effect run',product);
  }, []);

  const renderItem = ({item}) => {
    return (
      <Item
        item={item}
        // onPress={() => setSelectedId(item.id)}
        // style={{ backgroundColor }}
      />
    );
  };

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
      <FlatList
        style={{marginHorizontal: 16}}
        data={product}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
      />
      {/* <ScrollView style={{flex: 1, margin: 16}}>
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
      </ScrollView> */}
    </View>
  );
}
