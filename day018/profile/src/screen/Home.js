import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Button,
} from 'react-native';
import {useQuery, useMutation} from '@apollo/client';
import {Card, LoadingIndicator, LoginButton} from '@component/reusable';
import {query_user, add_todo, update_todo} from '../graphql/query/getUser';
import {GraphProvider} from '../graphql/apollo';

const Item = ({item, onPress, style}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item]}>
    <Text style={styles.title}>{item.description}</Text>
  </TouchableOpacity>
);

function Home({navigation}) {
  const [selectedId, setSelectedId] = useState(null);
  const [task, setTask] = useState();
  const [desc, setDesc] = useState();
  const {loading, data, error} = useQuery(query_user);
  const [
    addNewUser,
    {data: taksData, error: errorTask, loading: loadingTask},
  ] = useMutation(add_todo);
  const [
    updateTask,
    {data: updateData, error: updateError, loading: updateLoading},
  ] = useMutation(update_todo);


  useEffect(() => {
    if (data !== undefined) {
      console.log(data.Users[0].Tasks);
      setTask(data.Users[0].Tasks);
    } else {
      console.log('error', error);
    }
  }, [data]);
  const renderItem = ({item}) => {
    return <Item item={item} onPress={() => console.log('clicked')} />;
  };

  return (
    <View style={{backgroundColor: '#f5f5f5', flex: 1}}>
      {loading ? (
        <LoadingIndicator />
      ) : (
        <View style={styles.container}>
          <FlatList
            data={task}
            renderItem={renderItem}
            keyExtractor={(item) => item.task_id}
            extraData={selectedId}
          />
          <View style={styles.gravityBottom}>
            <Card
              onChangeText={(desc) => {
                setDesc(desc);
              }}
              placeholder="Tambahkan data"
            />

            {/* <LoginButton
              onPress={() => {alert('clicked')}}
              btnName="Add"
            /> */}

            <TouchableOpacity
              onPress={() => {
                updateTask({
                  variables: {
                    desc: desc,
                  },
                });
                console.log('file dirubah', desc);
              }}
              style={styles.button}>
              <Text style={styles.textButton}>Update</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                addNewUser({
                  variables: {
                    desc: desc,
                  },
                });
                console.log('file ditambahkan', desc);
              }}
              style={styles.button}>
              <Text style={styles.textButton}>Add</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  gravityBottom: {
    justifyContent: 'flex-end',
  },
  button: {
    margin: 10,
    backgroundColor: '#5DB075',
    borderRadius: 100,
    display: 'flex',
    alignItems: 'center',
    paddingVertical: 16,
    marginHorizontal: 16,
  },
  textButton: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});

const Master = () => (
  <GraphProvider>
    <Home />
  </GraphProvider>
);

export default Master;
