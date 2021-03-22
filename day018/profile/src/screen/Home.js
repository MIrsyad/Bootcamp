import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import {LoadingIndicator} from '../component/reusable';
import {useUser} from '../Context/UserContext';
import ProductProvider, {useProduct} from '../Context/productContext';

const Item = ({item, onPress, style}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item]}>
    <Text style={styles.title}>{item.description}</Text>
  </TouchableOpacity>
);

function Home({navigation}) {
  const [selectedId, setSelectedId] = useState(null);
  const {user} = useUser();
  const {getProduct, product, productLoading} = useProduct();

  useEffect(() => {
    console.log('useEffect getproduct run');
    getProduct(user.token);
  }, []);
  const renderItem = ({item}) => {
    return <Item item={item} onPress={() => console.log('clicked')} />;
  };

  return (
    <View style={{backgroundColor: '#f5f5f5', flex: 1}}>
      {productLoading ? (
        <LoadingIndicator />
      ) : (
        <View>
          <FlatList
            data={product}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            extraData={selectedId}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
  },
  item: {
    backgroundColor: '#ffffff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    elevation: 5,
    borderRadius: 10,
  },
  title: {
    fontSize: 17,
  },
});

const Master = () => (
  <ProductProvider>
    <Home />
  </ProductProvider>
);

export default Master;
