import React, { Fragment, useContext, useState } from 'react';
import {StyleSheet, Text, View } from 'react-native';
import CheckBox from 'expo-checkbox';
import { Minijobtextdataset } from '../../../Components/Minijobinhaltsvorlagen/Minijobtextdataset';
import { TransactionContext } from '../../../utils/Context';

export default function Privatcheck(props) {
  const [checked1, setChecked1] = useState(0)//value abfrage hier
  const [sprache,setzesprache]=useContext(TransactionContext)
  const speicherSteuerdata=(I)=>{
    checked1?setChecked1(0):setChecked1(1)
   let O=props?.SV
    props.SF(O) 
   if(I==true){
    O.KVArt=(1)
   }else{
    O.KVArt=(0)
   } 
   
   
  }
  
  return( 
        <View style={styles.checkboxContainer}>
        <CheckBox
          value={checked1?true:false}
          onValueChange={(itemValue) => speicherSteuerdata(itemValue)}
          style={styles.checkbox}
          /><Text style={styles.beschreibung}>{Minijobtextdataset(sprache?'DE':'EN').SoloCheckboxText.VersicherungPrivat}</Text>
          </View >         
            
            
 );   
   

 
}
const styles = StyleSheet.create({
  checkboxBase: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: 2,
    borderColor: 'grey',
    backgroundColor: 'transparent',
  },
  checkboxChecked: {
    backgroundColor: 'royalblue',
  },
  appContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  appTitle: {
    marginVertical: 16,
    fontWeight: 'bold',
    fontSize: 24,
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginHorizontal: '10%',
    padding:'3%'
  },
  checkboxLabel: {
    marginLeft: 8,
    fontWeight: 500,
    fontSize: 18,
  },
  beschreibung: {
    marginLeft: '3%',
    fontSize: 12,
    color:'#fff'
  },
})