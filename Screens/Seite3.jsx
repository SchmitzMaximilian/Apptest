import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput,Button } from 'react-native';
import React from 'react';

export default function Seite3({navigation}) {
  
  return (
    <View style={styles.container}>
      <Text style={styles.Überschrift}>Bankverbindung</Text>
      <Text>What am i doing?</Text>
      <Text style={styles.Überschrift}>Angaben zur Steuer</Text>
      <Button title='go back' onPress={()=>navigation.pop()} />
      <Button title='go next' onPress={()=>navigation.navigate("Seite4")} />
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