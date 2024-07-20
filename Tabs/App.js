import * as React from 'react';
import { ImageBackground, Text, View, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const image = require('./assets/fondo.png');
const home = require('./assets/carga.webp');
const otraa = require('./assets/OM0UU.png')


function HomeScreen() {
  return (
    <ImageBackground source={home} resizeMode="cover" style={styles.image}>
    <View>
      <Text style={styles.text}>Index.</Text>
    </View>
    </ImageBackground>
  );
}

function SettingsScreen() {
  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
    <View>
      <Text style={styles.text} > Configuraciones  </Text>
    </View>
    </ImageBackground>
  );
}
function Otro() {
  return (
    <ImageBackground source={otraa} resizeMode="cover" style={styles.image}>
    <View >
      <Text style={styles.text} > Otras aplicaciones.  </Text>
    </View>
    </ImageBackground>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Index" component={HomeScreen} />
        <Tab.Screen name="Configuraciones" component={SettingsScreen} />
        <Tab.Screen name="Otro" component={Otro} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
});