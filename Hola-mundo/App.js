import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import React, {useState} from 'react';

//Funcion Fat arrow, regresar un componente

const Texto=()=>{
  const [contenido, setContenido] = useState('Hola mundo')
  const actualizarContenido = ()=>{
    setContenido('State actualizo este texto')
  }
  return(<Text onPress={actualizarContenido}>{contenido}</Text>)
}




export default function App() {
  return (
    <View style={styles.container}>

      
      <Texto contenido></Texto>
      <Texto contenido></Texto>
      
      
      
      <Button title='presioname' color="#000000"> </Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
