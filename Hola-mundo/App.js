import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SectionList} from 'react-native';
//import React, { useState } from 'react';

export default function App() {
  
  return (    
    <View style={styles.container}>
      
    <SectionList 
      sections={[
        {title:'Grupo A',
          data:[
            {key:1, name:'ivan isay'}, 
            {key:2, name:'Victor'},] 
        },
        {title:'Grupo B',
          data:[
            {key:3, name: 'Elias'},
            {key:4, name: 'Alan'},]
        },
        {title:'Grupo C',
          data:[
            {key:5, name: 'Pablo'},
            {key:6, name: 'Lilian'},
            {key:7, name: 'Juan Luis Mosqueda Orta'},]
        },
      ]} 
      renderItem={({item})=> <Text style={styles.item}> {item.name} </Text>} 
      renderSectionHeader={({section})=> <Text style={styles.section}> {section.title} </Text>}
      />
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

  section:{
    fontSize:30,
    backgroundColor: 'blue',
    


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