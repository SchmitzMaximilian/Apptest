import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput ,Button} from 'react-native';
import React from 'react';
import SchulCheck from '../Components/SchulabschlussCheck';
import AusbildungsCheck from '../Components/Ausbildungsabschluss';

export default function Seite5({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.Überschrift}>Schulabschluss</Text>
      <SchulCheck/>
      <Text style={styles.Überschrift}>Ausbildungsabschluss</Text>
      <AusbildungsCheck/>
            <Button title='go back' onPress={()=>navigation.pop()} />
            <Button title='Submit'/>
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
  Überschrift: {
    width: '90%',
        backgroundColor: '#d3d3d3',
    borderWidth: 1,
    textAlign: 'center',
    
  },
  Datenanfrage: {
    borderWidth: 1,
  },
    
});