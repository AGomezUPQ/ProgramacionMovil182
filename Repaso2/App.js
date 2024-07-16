import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity, FlatList, Alert, Dimensions} from 'react-native';

export default function App() {

  const pelis = ['Lolita',
    'El Resplandor', 
    'La Ley de Horodes', 
    'La toalla del mojado',
    'El Señor de los anillos: El Retorno del rey',
    'Jhon Wick',
    'Transformes: El despertar de las bestias',
    'La La Land',
    'Warcraft: El choque de dos mundos',
    'Terminator II: El jucio final', ];

const[buscarTitulo, setBuscarTitulo] = useState('');
const[filtroPelicula, setFiltroPelicula] = useState('[]');

const buscarPeli = () => {
  if (!buscarTitulo) {
    setFiltroPelicula(pelis);
  } else {
    const resultados = pelis.filter(peli => peli.toLowerCase().includes(buscarTitulo.toLowerCase()));
    if (resultados.length > 0) {
      setFiltroPelicula(resultados);
    } else {
      Alert.alert('Sin resultados',' No se encontraron coincidencias.....');
      setFiltroPelicula([]);
    }
  }
}; 


  return (
    <ImageBackground source={require('./assets/calaveras.jpg')} style={styles.fondo}>
    <View style={styles.container} >  
      <Text style={styles.texto}>Buscador de peliculas</Text>
      <TextInput placeholder='Titulo o parte' style={styles.input} value={setBuscarTitulo} onChangeText={setBuscarTitulo}></TextInput>
      <TouchableOpacity style={styles.boton} onPress={buscarPeli}>
        <Text style={styles.boton}> BUSCAR </Text>
      </TouchableOpacity>

      <FlatList style={styles.FlatList}
        data={filtroPelicula}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
      />


      <StatusBar style="auto" />
    </View>
    </ImageBackground>

  );
}

const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },


  container: {
    //backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto:{
    fontSize:40,
    color: 'black;',
    fontStyle:'italic',

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
    backgroundColor: '#56D1FF',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize:15,
    color: 'white',
    height: 40,
    width: 300,
  },

  item:{
    padding:10,
    fontSize:25,
    height:50,
    borderColor:'Brown',
    borderBottomWidth:1,
  },

  FlatList: {
    margin: 20,
    padding: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 10,}


});
