import React, { Fragment, useContext, useEffect, useState } from 'react';
import {StyleSheet, Text, View } from 'react-native';
import CheckBox from 'expo-checkbox';
import { Minijobtextdataset } from '../../../Components/Minijobinhaltsvorlagen/Minijobtextdataset';
import { TransactionContext } from '../../../utils/Context';

export default function SimpelCheck(props) {
  const [checked1, setChecked1] = useState(0)//value abfrage hier
  const [sprache,setzesprache]=useContext(TransactionContext)
  const speicherSteuerdata=(itemValue)=>{
    
    checked1?setChecked1(0):setChecked1(1)
    if(itemValue==true){
      props.Arbeitstag(1)
    }else{props.Arbeitstag(0)}

    let O=props?.SV
    switch(props.Bezeichnung){
      case "Montag":
        O.MontagCheck=itemValue
        break;
      case "Dienstag":
        O.DiensttagCheck=itemValue
        break;
      case "Mittwoch":
        O.MittwochCheck=itemValue
        break;
      case "Donnerstag":
        O.DonnerstagCheck=itemValue
        break;
      case "Freitag":
        O.FreitagCheck=itemValue
        break;
      case "Samstag":
        O.SamstagCheck=itemValue
        break;
      case "Sonntag":
        O.SonntagCheck=itemValue
        break;


      case "Stundenlohn":
        O.Stundenlohncheck=itemValue
        break;
      case "Festlohn":
        O.Festlohncheck=itemValue
        break;
      case "Festgehalt":
        O.Festgehaltcheck=itemValue
        break;
      case "Besondere":
        O.BesondereCheck=itemValue
        break;      

    }     
   props.SF(O)
   
  }
  useEffect(()=>{
    if(props.UG){
      setChecked1(props.UG)
    }
  },[])
  return( 
        <View style={styles.checkboxContainer}>
        <CheckBox
          value={checked1?true:false}
          onValueChange={(itemValue) => speicherSteuerdata(itemValue)}
          style={styles.checkbox}
          /><Text style={styles.beschreibung}>{props.Bezeichnung}</Text>
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
    fontSize: 13,
    color:'#fff'
  },
})