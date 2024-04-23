import React, { Fragment, useContext, useState } from 'react';
import {StyleSheet, Text, View } from 'react-native';
import CheckBox from 'expo-checkbox';
import { Textdataset } from '../../../utils/Textdataset';
import { TransactionContext } from '../../../utils/Context';

export default function SVNummer(props) {
  const [checked2, setChecked2] = useState(0)
  const [sprache,setzesprache]=useContext(TransactionContext)
  console.log(props)
  
  const speicherSozialdata=(I)=>{
    props.S?props.F(0):props.F(1)
    let O=props?.SV
    if(I==true){
      O.RentenCheck=(1)
    }else{
      O.RentenCheck=(0)
    }
    props.SF(O) 

    
  }
  
   
  
  return( 
        <View style={styles.checkboxContainer}>
        <CheckBox
          value={props.S?true:false}
          onValueChange={(I) => speicherSozialdata(I)}
          style={styles.checkbox}
          /><Text style={styles.beschreibung}>{Textdataset(sprache?'DE':'EN').SoloCheckboxText.Sozial}</Text>
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
    color: '#fff',
  },
})