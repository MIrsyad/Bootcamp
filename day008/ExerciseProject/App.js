import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import data from './data.json';

function getNama() {
  let nama = data.name
  return(
    <Text>{ nama }</Text>
);
}

function getPekerjaan() {
  let pekerjaan = data.jobs
  return(<Text>
    {pekerjaan.map((info) => {
      return <Text>{info.title} - {info.tech} {"\n"}</Text>
    })}
  </Text>
);
}

function getAlamat() {
  let alamat = data.address
  return(
    <Text style={styles.rightAlignStyle}>{alamat.hometown} {alamat.city} {alamat.provins}</Text>
);
}


const YourApp = () => {
  return (
    <View>
        <Text>Nama</Text>
        <Text style={styles.lineStyle}></Text>
        {getNama()}
        <Text></Text>

        <Text>Pekerjaan</Text>
        <Text style={styles.lineStyle}></Text>
        <Text style={styles.rightAlignStyle}>{getPekerjaan()}</Text>

        <Text>Alamat</Text>
        <Text style={styles.lineStyle}></Text>
        {getAlamat()}
    </View>
  );
}

const styles = StyleSheet.create({
  lineStyle:{ 
    flex:1,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  
   },
   rightAlignStyle:{
    textAlign:'right'   
   }
 });
export default YourApp;