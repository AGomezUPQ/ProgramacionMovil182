import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import React, {useState} from 'react';

//Funcion Fat arrow, regresar un componente

const Texto=({estilo})=>{
  const [contenido, setContenido] = useState('Hola mundo')
  const actualizarContenido = ()=>{
    setContenido('State actualizo este texto')
  }
  return(<Text style={[styles.text,estilo]} onPress={actualizarContenido}>{contenido}</Text>)
}


export default function App() {
  return (
    <View style={styles.container}>

      <Texto estilo={styles.brown}></Texto>
      <Texto estilo={styles.orange} contenido></Texto>
      <Texto estilo={styles.black} contenido></Texto>
      
         
      <Button title='presioname' color="#000000"> </Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //flexDirection:'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  text:{
    color: 'red',
    fontSize: 25,
    height: 150,
    width: 150,
  },
  brown:{
    //flex:1,
    backgroundColor: 'brown',
  },
  orange:{
    //flex:2,
    backgroundColor: 'orange',
  },
  black:{
    //flex:3,
    backgroundColor: 'black',
  }
});

