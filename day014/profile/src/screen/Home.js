import React, {useState} from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import {useGetData} from '../lib/index';

const Item = ({item, onPress, style}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
    <Text style={styles.title}>{item.title}</Text>
  </TouchableOpacity>
);

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

export default function Home({navigation}) {
  const [selectedId, setSelectedId] = useState(null);

  const [response, err, isLoading] = useGetData(
    'https://jsonplaceholder.typicode.com/posts',
  );

  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        style={{backgroundColor}}
      />
    );
  };

  return (
    <View>
      {isLoading ? (
        <Text>loading</Text>
      ) : (
        <View>
          <FlatList
            data={response}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            extraData={selectedId}/>
        </View>
      )}
    </View>

    // <View>
    //   <Text>hai</Text>
    // </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 0,
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  });