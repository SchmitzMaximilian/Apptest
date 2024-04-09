import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import React from 'react';
import Eingabefeld from '../Components/Texteingabebp';
import GenderCheck from '../Components/Gendercheckbox';




export default function Seite1({navigation}) {
  return (
    <View style={styles.container}>


      <Text style= {{width: '90%'}}>Bitte machen Sie nachfolgend vollständige Angaben um spätere Rückfragen und
Verzögerungen bei der Sachbearbeitung der Abrechnungen zu vermeiden. Schäden
die durch falsche oder unverständliche Angaben entstehen gehen zu Ihren Lasten.</Text>
      <Text style={styles.Überschrift}>Name und Anschrift</Text>
      <View style= {styles.GeteilteReihe}>
        <View style={styles.checkboxContainer}>
        <GenderCheck />
        </View>
      <Text style={styles.Datenanfrage}>Vorname</Text>
      <Eingabefeld/></View>
      <Text>What am i doing?</Text>
      <Text style={styles.Überschrift}>Kommunikation</Text>
      <Eingabefeld/>
      <Text></Text>
      
      
    

    
      <Button title='go next' onPress={()=>navigation.navigate("Seite2")} />
      <Button title='Test Skip 5' onPress={()=>navigation.navigate("Seite5")} />
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
  GeteilteReihe:{flexDirection:"row", width: "90%"},
    

});
