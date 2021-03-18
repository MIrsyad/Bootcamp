import React, {useState} from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import {useGetData} from '../lib/index';

const Item = ({item, onPress, style}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item]}>
    <Text style={styles.title}>{item.title}</Text>
  </TouchableOpacity>
);

export default function Home({navigation}) {
  const [selectedId, setSelectedId] = useState(null);

  const [response, err, isLoading] = useGetData(
    'https://jsonplaceholder.typicode.com/posts',
  );

  const renderItem = ({item}) => {

    return (
      <Item
        item={item}
        onPress={() => navigation.navigate('DetailPost',response.find(x => x.id == item.id))}
      />
    );
  };

  return (
    <View style={{backgroundColor:'#f5f5f5'}}>
      {isLoading ? (
        <Text>loading</Text>
      ) : (
        <View>
          <FlatList
            data={response}
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
    borderRadius:10,
  },
  title: {
    fontSize: 17,
  },
});
