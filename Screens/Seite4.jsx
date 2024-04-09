import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput,Button } from 'react-native';
import React from 'react';

export default function Seite4({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Page 4 nice</Text>
      <Text>FIlled out yout C-01 Form yet?</Text>      
      <Button title='go back' onPress={()=>navigation.pop()} />
      <Button title='go next' onPress={()=>navigation.navigate("Seite5")} />
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