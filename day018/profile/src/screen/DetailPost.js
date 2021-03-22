import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Header, LoadingIndicator} from '../component/reusable';
import {useGetData} from '@lib';

const Item = ({item, onPress}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item]}>
    <Text style={styles.title}>
      {item.name} {'\n'}
    </Text>
    <Text style={styles.title}>{item.body}</Text>
  </TouchableOpacity>
);

export default function DetailPost({navigation, route}) {
  const [selectedId, setSelectedId] = useState(null);
  const data = route.params;
  const [response, err, isLoading] = useGetData(
    'https://jsonplaceholder.typicode.com/comments',
  );
  const dataComments = response.filter((x) => x.postId == data.id);

  const renderItem = ({item}) => {
    return (
      <Item
        item={item}
        onPress={
          () => console.log(dataComments)
        }
      />
    );
  };

  return (
    <View style={{flex: 1}}>
      <View style={styles.container}>
        <Header
          backpressed={() => navigation.navigate('Home')}
          back="Back"
          title="Detail"
        />
        <View style={styles.titleContainer}>
          <Text style={styles.textTitle}>{data.title}</Text>
          <Text />
          <Text>{data.body}</Text>
        </View>
      </View>

      {isLoading ? (
        <LoadingIndicator/>
      ) : (
        <FlatList
          data={dataComments}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          extraData={selectedId}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  textTitle: {
    fontSize: 20,
    alignSelf: 'center',
  },
  titleContainer: {
    padding: 10,
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
    fontSize: 13,
  },
  container: {
    backgroundColor: '#ffffff',
    elevation:5
  },
});
