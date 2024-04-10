import React, { useContext, useState } from 'react';
import {StyleSheet, Text, View } from 'react-native';
import CheckBox from 'expo-checkbox';
import { TransactionContext } from '../utils/Context';
import LANG from '../lang/lang';



export default function GenderCheck() {
  const [checked1, setChecked1] = useState(0);
  const [sprache,setzesprache]=useContext(TransactionContext)
  


  return (<><View style={styles.checkboxContainer}>
        <CheckBox
          value={checked1==1?true:false}
          onValueChange={() => setChecked1(1)}
          style={styles.checkbox}
          />    
      <Text style={styles.beschreibung}>{sprache?LANG.Gendercheckbox.Genderoptionen.w.De:LANG.Gendercheckbox.Genderoptionen.w.EN}</Text></View>
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={checked1==2?true:false}
          onValueChange={() => setChecked1(2)}
          style={styles.checkbox}
          />    
      <Text style={styles.beschreibung}>{sprache?LANG.Gendercheckbox.Genderoptionen.m.De:LANG.Gendercheckbox.Genderoptionen.m.EN}</Text></View>
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={checked1==3?true:false}
          onValueChange={() => setChecked1(3)}
          style={styles.checkbox}
          />    
      <Text style={styles.beschreibung}>{sprache?LANG.Gendercheckbox.Genderoptionen.d.De:LANG.Gendercheckbox.Genderoptionen.d.EN}</Text></View>
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={checked1==4?true:false}
          onValueChange={() => setChecked1(4)}
          style={styles.checkbox}
          />    
      <Text style={styles.beschreibung}>{sprache?LANG.Gendercheckbox.Genderoptionen.u.De:LANG.Gendercheckbox.Genderoptionen.u.EN}</Text></View>
    
   </>
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
});
