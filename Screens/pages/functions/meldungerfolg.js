import React from 'react'
import { StyleSheet, Text, View, TextInput,Button, SafeAreaView, TouchableOpacity,ImageBackground } from 'react-native';
import { Textdataset } from '../../../utils/Textdataset'
import { TransactionContext } from '../../../utils/Context';
import { useContext, useEffect, useState } from 'react';

function Meldungerfolg() {
  const [sprache,setzesprache]=useContext(TransactionContext)
  return (
    <View style={styles.abgespeichert}>
        <Text style={{color:'black'}}>
          {Textdataset(sprache?'DE':'EN').Texte.Speichernerfolgreich}
        </Text></View>
  )
}
const styles = StyleSheet.create({
abgespeichert:{
  padding: 10,
  paddingHorizontal:15,
  borderWidth:1,
  width:'80%',
  alignSelf:'center',
  borderColor: '#65a30d',
  borderRadius:6,
  marginTop: 20,
  marginVertical:15,
  flexDirection: 'column',
  alignItems: 'flex-start',
  backgroundColor: '#84cc16',

},
})
export default Meldungerfolg