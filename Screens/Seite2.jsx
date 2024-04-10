import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import React, { useContext } from 'react';
import { TransactionContext } from '../utils/Context';

export default function Seite2({navigation}) {
  const [sprache,setzesprache]=useContext(TransactionContext)
  return (
    <View style={styles.container}>
      <Text style={styles.Überschrift}>Angaben zur Sozialversicherung</Text>
      <Text>What am i doing?</Text>
           
      <Button title='go back' onPress={()=>navigation.pop()} />
      <Button title='go next' onPress={()=>navigation.navigate("Seite3")} />
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