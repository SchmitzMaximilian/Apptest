import { StyleSheet, Text, View, TextInput,Button, SafeAreaView, TouchableOpacity,ImageBackground } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import LangOb from '../../../lang/lang';
import { Minijobtextdataset } from '../../../Components/Minijobinhaltsvorlagen/Minijobtextdataset';
import SelectPicker from '../festfragebogenComponents/PickerSelectBox';
import { TransactionContext } from '../../../utils/Context';
import MiniPersoenlicheDatenObject from '../../../utils/Objects/MiniPersoenlicheDatenObject';

function MiniBogeneinleitung() {
  const [sprache,setzesprache]=useContext(TransactionContext)
  const [PrivateDatenArr,setPrivateDatenArr]=useState(MiniPersoenlicheDatenObject)

  return (
    <>
    <View >
      <Text style={styles.Titel}  >{sprache?LangOb.MinijobBogenUeberschriften.TitelOben.DE:LangOb.MinijobBogenUeberschriften.TitelOben.EN}
  </Text>
  <Text style={styles.Titel2}  >{sprache?LangOb.MinijobBogenUeberschriften.TitelUnten.DE:LangOb.MinijobBogenUeberschriften.TitelUnten.EN}
  </Text>
    
    <SelectPicker S={sprache?'DE':'EN'} V={true} I={5} SV={PrivateDatenArr} SF={setPrivateDatenArr} />
    <Text style={{color:'#fff', marginHorizontal: '10%',paddingVertical:10}}>{Minijobtextdataset(sprache?'DE':'EN').Texte.Rechtsbelehrung}</Text>
  </View>
    </>
  )
}
const styles = StyleSheet.create({
  Titel:{
    fontSize:25,
    marginTop:10,
    textShadowColor:'#000',
    textShadowRadius:5,
    textShadowOffset:{width:3,height:3},
    color:'#FFF',
    marginHorizontal: '10%',
  },
  Titel2:{
    fontSize:20,
    marginTop:10,
    textShadowColor:'#000',
    textShadowRadius:5,
    textShadowOffset:{width:3,height:3},
    color:'#FFF',
    marginHorizontal: '10%',
  },
})

export default MiniBogeneinleitung