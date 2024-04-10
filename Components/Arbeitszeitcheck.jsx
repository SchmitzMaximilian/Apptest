import React, { Fragment, useContext, useState } from 'react';
import {StyleSheet, Text, View } from 'react-native';
import CheckBox from 'expo-checkbox';
import { TransactionContext } from '../utils/Context';
import LangOb from '../lang/lang';

export default function ArbeitszeitCheckbox() {
  const [checked1, setChecked1] = useState(0)
  const [sprache,setzesprache]=useContext(TransactionContext)
  
  return( <>
  <View >
        <View style={styles.checkboxContainer}>
        <CheckBox
          value={checked1==1?true:false}
          onValueChange={() => setChecked1(1)}
          style={styles.checkbox}
          /><Text style={styles.beschreibung}>{sprache?LangOb.Zeit.Arbeitsdauer.VZ.De:LangOb.Zeit.Arbeitsdauer.VZ.EN}</Text>
          </View >

          <View style={styles.checkboxContainer}>
          <CheckBox
            value={checked1==2?true:false}
            onValueChange={() => setChecked1(2)}
            style={styles.checkbox}
            /><Text style={styles.beschreibung}>{sprache?LangOb.Zeit.Arbeitsdauer.TZ.De:LangOb.Zeit.Arbeitsdauer.TZ.EN}</Text>
            </View >

            <View style={styles.checkboxContainer}>
          <CheckBox
            value={checked1==3?true:false}
            onValueChange={() => setChecked1(3)}
            style={styles.checkbox}
            /><Text style={styles.beschreibung}>{sprache?LangOb.Zeit.Arbeitsdauer.Student.De:LangOb.Zeit.Arbeitsdauer.Student.EN}</Text>
            </View >
            </View>
            </>
 );   
   

  

}const styles = StyleSheet.create({
    
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
      
    },
  })