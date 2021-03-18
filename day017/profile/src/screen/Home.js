import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {LoadingIndicator} from '../component/reusable';
import {useGetData} from '@lib';
import {useUser} from '../Context/UserContext';

const Item = ({item, onPress, style}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item]}>
    <Text style={styles.title}>{item.name}</Text>
  </TouchableOpacity>
);

export default function Home({navigation}) {
  const [selectedId, setSelectedId] = useState(null);

  const {user, getProduct , product} = useUser();

  const [response, err, isLoading] = useGetData(
    'https://jsonplaceholder.typicode.com/posts',
  );

  useEffect(() => {
    console.log('useEffect getproduct run');
    getProduct(user.token)
  }, [product])
  const renderItem = ({item}) => {
    return (
      <Item
        item={item}
        onPress={() => getProduct(user.token)
          // navigation.navigate(
          //   'DetailPost',
          //   response.find((x) => x.id == item.id),
          // )
        }
      />
    );
  };

  return (
    <View style={{backgroundColor: '#f5f5f5'}}>
      {isLoading ? (
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
