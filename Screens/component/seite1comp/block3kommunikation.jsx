import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import React, { useContext } from 'react';
import Eingabefeld from '../../../Components/Texteingabebp';
import { TransactionContext } from '../../../utils/Context';
import LangOb from '../../../lang/lang';


export default function Block3Komunikation(){
  const [sprache,setzesprache]=useContext(TransactionContext)  
  return(
  <>
  
  <Text style={styles.Überschrift}>{sprache?LangOb.Kommunikation.Überschrift.De:LangOb.Kommunikation.Überschrift.EN}</Text>
  <Eingabefeld/>
  <Text style={styles.Datenanfrage}>{sprache?LangOb.Kommunikation.Tele.De:LangOb.Kommunikation.Tele.EN}</Text>
  <Eingabefeld/>
  <Text style={styles.Datenanfrage}>{sprache?LangOb.Kommunikation.Mobil.De:LangOb.Kommunikation.Mobil.EN}</Text>
  <Eingabefeld/>
  <Text style={styles.Datenanfrage}>{sprache?LangOb.Kommunikation.EMail.De:LangOb.Kommunikation.EMail.EN}</Text>
  
  </>)


};

const styles = StyleSheet.create({

  Überschrift: {
    width: '90%',
        backgroundColor: '#d3d3d3',
    borderWidth: 1,
    textAlign: 'center',
    
  },
  Datenanfrage: {fontSize: 10,color:'#fff',
        
  },
  
  GeteilteReihe:{flexDirection:"row",
  
 },


});