import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import React, { useContext } from 'react';
import ArbeitszeitCheckbox from '../../../Components/Arbeitszeitcheck';
import LANG from '../../../lang/lang';
import { TransactionContext } from '../../../utils/Context'; 

export default function Blocktop() {
  const [sprache,setzesprache]=useContext(TransactionContext) 
   
  return(<>
  <Text style={styles.Titel}>{
  sprache?LANG.Blocktop.Überschrift.De:LANG.Blocktop.Überschrift.EN}
  </Text>
  <ArbeitszeitCheckbox/>
  
  </>

  )

};

const styles = StyleSheet.create({
  Titel:{
    fontSize:25,
  }
});