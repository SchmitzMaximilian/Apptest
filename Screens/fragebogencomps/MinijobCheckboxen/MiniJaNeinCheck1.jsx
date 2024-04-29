import React, { Fragment, useContext, useState } from 'react';
import {StyleSheet, Text, View } from 'react-native';
import CheckBox from 'expo-checkbox';
import { TransactionContext } from '../../../utils/Context';
import { Minijobtextdataset } from '../../../Components/Minijobinhaltsvorlagen/Minijobtextdataset';



export default function JaNeinCheckbox1(props) {
  const [checked1, setChecked1] = useState(0)
  const [sprache,setzesprache]=useContext(TransactionContext)
  
  
  const JaNeinPruefer=(isChecked)=>{
    let O=props?.SV
        
    if(checked1==1){
      O.HauptjobCheck=(1)
    }else{
      O.HauptjobCheck=(2)
  
    }
    props.SF(O) 
  }
  
  
  return( <>
        <View style={styles.checkboxContainer}>
        <CheckBox
          value={checked1==1?true:false}//true:false:false 
          onValueChange={(isChecked) => {setChecked1(1) ,isChecked?JaNeinPruefer(1):""}}
          style={styles.checkbox}
          /><Text style={styles.beschreibung}>{Minijobtextdataset(sprache?'DE':'EN').CheckBoxTitel.Ja}</Text>
          </View >

          <View style={styles.checkboxContainer}>
          <CheckBox
            value={checked1==2?true:false}
            onValueChange={(isChecked) => {setChecked1(2) ,isChecked?JaNeinPruefer(2):""}}
            style={styles.checkbox}
            /><Text style={styles.beschreibung}>{Minijobtextdataset(sprache?'DE':'EN').CheckBoxTitel.Nein}</Text>
            </View >
            
            </>
 );   
   }
/* useState{Anzal der Optionen} 
      value={checked1==Optionsnummer?true:false}
      onValueChange={() => setChecked1(Optionsnummer)}
      {sprache?LangOb.}

*/
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
      
      padding:'3%'
    },
    checkboxLabel: {
      marginLeft: 8,
      fontWeight: 500,
      fontSize: 18,
    },
    beschreibung: {
      marginLeft: '3%',
      fontSize: 18,
      color:'#fff'
      
    },
  })

