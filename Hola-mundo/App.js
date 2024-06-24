import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback, ScrollView } from 'react-native';
import React, { useState } from 'react';

export default function App() {

  const [text, setText] = useState('valor default')
  const [submit, setSubmit] = useState('')

  return (    
    <View style={styles.container}>

      <ScrollView style={styles.scroll}>
      <Text> Componente TextInput: {submit}</Text>
      <Text> Componente TextInput: {submit}</Text>
      <Text> Componente TextInput: {submit}</Text>
      <Text> Componente TextInput: {submit}</Text>
      <Text> Componente TextInput: {submit}</Text>
      <Text> Componente TextInput: {submit}</Text>
      <Text> Componente TextInput: {submit}</Text>
      <Text> Componente TextInput: {submit}</Text>
      <Text> Componente TextInput: {submit}</Text>
      <Text> Componente TextInput: {submit}</Text>
      <Text> Componente TextInput: {submit}</Text>
      <Text> Componente TextInput: {submit}</Text>
      <Text> Componente TextInput: {submit}</Text>
      <Text> Componente TextInput: {submit}</Text>
      <Text> Componente TextInput: {submit}</Text>
      <Text> Componente TextInput: {submit}</Text>
      <Text> Componente TextInput: {submit}</Text>
      <Text> Componente TextInput: {submit}</Text>
      <Text> Componente TextInput: {submit}</Text>
      
      <TextInput style={styles.input} placeholder='Soy una entrada' onChangeText={(t)=>setText(t)} value={text}/>

      <Button title='Presioname' onPress={()=>{setSubmit(text); alert('Texto enviado')}}/>
      
      <TouchableOpacity style={styles.botonOpaco}>
        <Text>Presiona aquí</Text>
      </TouchableOpacity>

      <TouchableHighlight style={styles.botonResaltado} onPress={()=>alert('Tocaste el botón')}>
        <Text>Botón resaltado</Text>
      </TouchableHighlight>

      <TouchableWithoutFeedback onPress={()=>alert('Tocaste el botón')}>
        <View style={styles.botonResaltado}>
          <Text>Botón sin feedback</Text>
        </View>
      </TouchableWithoutFeedback>
      <StatusBar style="auto" />
      </ScrollView> 

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
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
  
});