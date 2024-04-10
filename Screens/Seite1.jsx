import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput,Button } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import Eingabefeld from '../Components/Texteingabebp';
import GenderCheck from '../Components/Gendercheckbox';
import Block1gname from './component/seite1comp/block1gname';
import Block2adresse from './component/seite1comp/block2adresse';
import Block3Komunikation from './component/seite1comp/block3kommunikation';
import LANG from './../lang/lang'
import Blocktop from './component/seite1comp/blocktop'; 
import { TransactionContext } from '../utils/Context'; 

export default function Seite1({navigation}) {
  const [sprache,setzesprache]=useContext(TransactionContext)  
  return (
    <View style={styles.container}>
      <Button title={sprache?'En':'De'} onPress={()=>setzesprache(!sprache)} />
      <Blocktop/> 

      <Text style= {{width: '90%'}}>{sprache?LANG.SEITE1.De:LANG.SEITE1.En} </Text>

      {/*Block1 */}
      <Block1gname />


      <Block2adresse/>
      

      <Block3Komunikation/>
      
      
      
    

    
      <Button title='go next' onPress={()=>navigation.navigate("Seite2")} />
      <Button title='Test Skip 5' onPress={()=>navigation.navigate("Seite5")} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
    padding: '5%'    
  },
  Überschrift: {
    width: '90%',
        backgroundColor: '#d3d3d3',
    borderWidth: 1,
    textAlign: 'center',
    
  },
  Datenanfrage: {fontSize: 10,
    
    
  },
  GeteilteReihe:{flexDirection:"row",
   width: "45%",
  },

  Spaltenauflistung:{
    flexDirection: 'column',
    alignItems: 'stretch',
    marginLeft: '5%',
    flex: 1
  }
    

});
