import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';

let data =[{"id":1,"message":"index ke 1","status":"","deleted":false},{"id":2,"message":"index ke 2","status":"","deleted":true},{"id":3,"message":"index ke 3","status":"done","deleted":false}]

const Item = ({id,message}) => (
  <View style={styles.item}>
    <Text >{id}. {message}</Text>
  </View>
);

const Header = ({title}) => (
  <View>
    <Text style={styles.header}>{title}</Text>
  </View>
);  

const ItemDeleted = ({id,message}) => (
  <View style={styles.item}>  
    <Text >{id}. {message}</Text>
  </View>
);
function list(){
  data.forEach(element => {
    if (element.deleted ==true) {
      
    } else if (element.status =='') {
      return <Text>{element.id} {element.message}</Text>
    }else {
      return <Text>{element.id} {element.message} {element.status}</Text>
    }
  })
}

function add(m){
  if (data.length==0) {
    const string = [{id: 1, message: m, status: '', deleted: false}];
    data.push(string)
} else{
    const lastId = data[data.length-1].id
    data.push({id: lastId+1,message: m, status: '', deleted: false})
}
}

function update(i, m) {
  const isIdFound = data.some(element => element.id == i)
    if (isIdFound) {
        const indexfound= data.findIndex(element => element.id == i)
        data[indexfound] = {id: i, message: m, status: data[indexfound].status, deleted: data[indexfound].deleted}
    } else {
        console.log(`tidak ditemukan data dengan id ${i}`);
    }
}

function del(i) {
  const isIdFound = data.some(element => element.id == i)
    if (isIdFound) {
        const indexfound= data.findIndex(element => element.id == i)
        data[indexfound].deleted=true
    } else {
        console.log(`tidak ditemukan data dengan id ${i}`);
    }
}

function clear() {
  const isIdFound = data.some(element => element.id == i)
    if (isIdFound) {
        const indexfound= data.findIndex(element => element.id == i)
        if (data[indexfound].deleted == false) {
            data[indexfound].status='done'
        } else {
            console.log("list sudah deleted");
        }
    } else {
        console.log(`tidak ditemukan data dengan id ${i}`);
    }
}

const App = () => {
  // const [selectedId, setSelectedId] = useState(null);


  const renderItem = ({ item }) => (
    <Item id={item.id} message={item.message}/>
  );

  return (
    <LinearGradient colors={['#73b1bc', '#a4d4de']} style={styles.linearGradient}> 
      <View style={styles.container}>
        <Header title='DAILIST'/>
      </View>
      <View>
        <Text style={styles.subTitle}>Upcoming</Text>
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={renderItem}
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
  background:{
    backgroundColor:'#71b1bc',
    flex: 1
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
  container:{
    flexDirection:'column'
  },
  item: {
    borderRadius: 10,
    backgroundColor: '#fefefe',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
})
export default App;