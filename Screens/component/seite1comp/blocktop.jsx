import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import React, { useContext } from 'react';
import LANG from '../../../lang/lang';
import { TransactionContext } from '../../../utils/Context'; 

export default function Blocktop() {
  const [sprache,setzesprache]=useContext(TransactionContext) 
  
   
  return( 
  <Text style={styles.Titel}  >{
  sprache?LANG.Blocktop.Ueberschrift.De:LANG.Blocktop.Ueberschrift.EN}
  </Text>  
  
)
};

const styles = StyleSheet.create({
  Titel:{
    fontSize:25,
    marginTop:10,
    textShadowColor:'#000',
    textShadowRadius:5,
    textShadowOffset:{width:3,height:3},
    color:'#FFF',
    marginHorizontal: '10%',
  }
});