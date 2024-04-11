import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import React, { useContext } from 'react';
import GenderCheck from '../../../Components/Gendercheckbox';
import Eingabefeld from '../../../Components/Texteingabebp';
import LANG from '../../../lang/lang';
import { TransactionContext } from '../../../utils/Context';
 


export default function Block1gname() {
  const [sprache,setzesprache]=useContext(TransactionContext)
 
    return (
      <>
      
      <View style= {styles.GeteilteReihe}>

        <View >
        <GenderCheck /></View>
        <View style={styles.Spaltenauflistung}>
        <TextInput
        style={{ height: 40,width :'86%', borderColor: '#fff', borderBottomWidth: 1 ,}}
        
      />
      <Text style={styles.Datenanfrage}>{sprache?LANG.SEITE1.Block1.Vorname.De:LANG.SEITE1.Block1.Vorname.En}</Text>
      <TextInput
        style={{ height: 40,width :'86%', borderColor: '#fff', borderBottomWidth: 1 ,}}
        
      />
      <Text style={styles.Datenanfrage}>{sprache?LANG.SEITE1.Block1.Nachname.De:LANG.SEITE1.Block1.Nachname.En}</Text></View>

      </View>
      </>)};

  const styles = StyleSheet.create({

    Ueberschrift: {
  width: '90%',
      backgroundColor: '#d3d3d3',
  borderWidth: 1,
  textAlign: 'center',
  
},
Datenanfrage: {fontSize: 10,
  color:'#fff',
  
  
},
GeteilteReihe:{flexDirection:"row",
 width: "100%",
},

Spaltenauflistung:{
  flexDirection: 'column',
  alignItems: 'stretch',
  
  flex: 1
}
 } );
  

 


