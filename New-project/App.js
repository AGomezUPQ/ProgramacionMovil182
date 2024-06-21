import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Alert, ImageBackground} from 'react-native';

export default function App() {
  useEffect(() =>{ })
  
  const [nombre, setnombre] = useState('')  
  const [email, setemail] = useState('')  
  const [password, setpassword] = useState('') 

  const formulario = () => {alert( `Formulario enviado....\nNombre: ${nombre}\nEmail: ${email}\nPassword: ${password}`)};

  //Para Telefono

  //const formulario = () => {Alert.alert( `Formulario enviado....\nNombre: ${nombre}\nEmail: ${email}\nPassword: ${password}`)};

  
  return (
    <ImageBackground source={require('./assets/fondo.png')} style={styles.container}>
    <View style={styles.container}>
      <View style={styles.form}>
      <Text><Text style={styles.texto}>Nombre:</Text></Text>
      <TextInput style={styles.input} placeholder='Ingresa tu Nombre' value={nombre} onChangeText={setnombre}/>
      <Text style={styles.texto}>Email:</Text>
      <TextInput style={styles.input} placeholder='Ingresa tu Email' value={email} onChangeText={setemail}/>
      <Text style={styles.texto}>Password:</Text>
      <TextInput style={styles.input} placeholder='Ingresa tu Password' alue={password} onChangeText={setpassword} secureTextEntry/>
      <TouchableOpacity style={styles.boton} onPress={formulario}>
        <text>Guardar</text>
      </TouchableOpacity>
      <StatusBar style="auto" />
      </View>
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    borderRadius: 10,
    backgroundColor: '#85C1E9',
    width: '100%',
    padding: 20,
  },
  texto:{
    textAlign:'justify',
    fontSize: 25,
    color: 'green',
  },
  input:{
    backgroundColor: '#dfd5ed',
    height: 40,
    width: 300,
    margin: 10,
    borderWidth: 2,
    borderColor: 'black',
    padding: 10,
  },
  boton:{
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: 'red',
    fontSize:20,
    color: 'white',
    height: 40,
    width: 300,
  }

});
