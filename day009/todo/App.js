import React, {useState} from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Button, TextInput } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';

const Item = ({item, onPress}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item]}>
    <Text >{item.id}. {item.message}</Text>
  </TouchableOpacity>
)

const Header = ({title}) => (
  <View>
    <Text style={styles.header}>{title}</Text>
  </View>
); 


const App = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [myText, setMyText] = useState('default');
  const [todoList, setTodoList]=useState([{"id":1,"message":"Kerjain tugas","status":"","deleted":false}])

  
const add = () =>{
  let lastId = todoList[todoList.length-1].id
  setTodoList([...todoList,{
    id: lastId+1, message: myText
  }])
}

const deleteList = (id) =>{
  todoList.splice(id-1,1)
  setTodoList([...todoList])
}

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";

    return (
      <Item
        item={item}
        onPress={() => deleteList(item.id)}
        style={{ backgroundColor }}
      />
    );
  };

  return (
    <LinearGradient colors={['#73b1bc', '#a4d4de']} style={styles.linearGradient}> 
      <View>
        <Header title='DAILIST'/>
      </View>

      <View>
        <Text style={styles.subTitle}>Upcoming</Text>
        <FlatList
          data={todoList}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          extraData={selectedId}
        />
      </View>
      
      <View style={styles.footer}>
      <TextInput
        style={{height: 40}}
        placeholder="Type here to translate!"
        onChangeText={myText => setMyText(myText)}
      />
        <Button
          title="add list"
          onPress={() => add()}
        />
      </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  header:{
    textAlign:'center',
    color:'white',
    fontFamily:'Arial',
    fontSize: 20,
  },
  subTitle:{
    color:'white',
    fontFamily:'Arial',
    fontSize: 18,
    paddingLeft: 20
  },
  item: {
    borderRadius: 10,
    backgroundColor: '#fefefe',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  footer: {
    flex:1,
    justifyContent:'flex-end',
    marginBottom:20
  }
})
export default App;