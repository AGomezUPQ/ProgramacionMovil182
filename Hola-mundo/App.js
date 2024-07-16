import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, ActivityIndicator, } from 'react-native';
import React, { useState, useEffect } from 'react';
import Prueba from './screens/prueba';

export default function App() {

  const [user, setUser] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())
    .then(data => {setUser(data), setLoading(false)})
  },[])

if(loading){
  return <View style={styles.center}>
    <ActivityIndicator size='large' color='#0000ff'/>
    <Text> Cargando.... </Text>
  </View>
}

  return (    
    <View style={styles.container}>

      <FlatList data={user}
      renderItem={({item}) => <Text style={styles.item}> {item.username} </Text> }/>
      
      <Prueba />

            <StatusBar style="auto" />

            
    </View>

    

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'strech',
    justifyContent: 'center',
    paddingTop:40,
  },

  item:{
    padding:10,
    fontSize:25,
    height:50,
    borderColor:'Brown',
    borderBottomWidth:1,

  },

  center:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  /*
  input: {
    backgroundColor: '#dfd5ed',
    height: 40,
    width: 150,
    margin: 10,
    borderWidth: 2,
    borderColor: 'gold',
    padding: 10,
  },
  botonOpaco: {
    backgroundColor: 'yellow',
    padding: 10,
    margin: 10,    
  },
  botonResaltado: {
    backgroundColor: 'gold',
    padding: 10,
    margin: 10,    
  },
  scroll:{
    width:Dimensions.get('window').width
    
  }
  */
});