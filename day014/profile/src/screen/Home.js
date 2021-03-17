import React, {useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import {useGetData} from '../lib/index';

const Item = ({item, onPress, style}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
    <Text style={styles.title}>{item.title}</Text>
  </TouchableOpacity>
);

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
            extraData={selectedId}></FlatList>
        </View>
      )}
    </View>
  );
}
