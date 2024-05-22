import React from 'react';
import { StyleSheet, Text, View, TextInput,Button, SafeAreaView, TouchableOpacity,ImageBackground } from 'react-native';
import { useContext, useEffect, useState } from 'react';
import { Fehlerdataset } from './fehlermeldungdataset';
import { TransactionContext } from '../../../utils/Context';

const FehlermeldungIndividuell=(props) =>{
  const [sprache,setzesprache]=useContext(TransactionContext)
  const [fehlertext,setfehlertext]=useState('')
switch(props.FN){

  case 1 : setfehlertext(Fehlerdataset(sprache?"DE":"EN").NameAnschrift.Vorname)
  break;
  case 2 : setfehlertext(Fehlerdataset(sprache?"DE":"EN").NameAnschrift.Nachname)
  break;
  case 3 : setfehlertext(Fehlerdataset(sprache?"DE":"EN").NameAnschrift.StraßeHaus)
  break;
  case 4 : setfehlertext(Fehlerdataset(sprache?"DE":"EN").NameAnschrift.PLZ)
  break;
  case 5 : setfehlertext(Fehlerdataset(sprache?"DE":"EN").NameAnschrift.Wohnort)
  break;

  case 6 : setfehlertext(Fehlerdataset(sprache?"DE":"EN").Bankverbindung.Bankname)
  break;
  case 7 : setfehlertext(Fehlerdataset(sprache?"DE":"EN").Bankverbindung.IBAN)
  break;
  case 8 : setfehlertext(Fehlerdataset(sprache?"DE":"EN").Bankverbindung.Inhaber)
  break;

  case 9 : setfehlertext(Fehlerdataset(sprache?"DE":"EN").Steuer.SteuerID)
  break;
  case 10: setfehlertext(Fehlerdataset(sprache?"DE":"EN").Steuer.Steuerklasse)
  break;
  case 11: setfehlertext(Fehlerdataset(sprache?"DE":"EN").Steuer.Kinder)
  break;
  case 12: setfehlertext(Fehlerdataset(sprache?"DE":"EN").Steuer.Konfession)
  break;

  case 13: setfehlertext(Fehlerdataset(sprache?"DE":"EN").Sozialversicherung.SVNummer)
  break;
  case 14: setfehlertext(Fehlerdataset(sprache?"DE":"EN").Sozialversicherung.Staatsangehörigkeit)
  break;
  case 15: setfehlertext(Fehlerdataset(sprache?"DE":"EN").Sozialversicherung.GBOrt)
  break;
  case 16: setfehlertext(Fehlerdataset(sprache?"DE":"EN").Sozialversicherung.GBLand)
  break;
  case 17: setfehlertext(Fehlerdataset(sprache?"DE":"EN").Sozialversicherung.Kassename)
  break;
  case 18: setfehlertext(Fehlerdataset(sprache?"DE":"EN").Sozialversicherung.Arbeitgeber)
  break;

  default: setfehlertext("")

}


  return (
    <>
    <View style={styles.fehlermeldung}>
      <Text style={{color:'#fff'}}>{fehlertext}</Text>
      </View>
    </>
  )
}
const styles = StyleSheet.create({

fehlermeldung:{padding: 10,
  paddingHorizontal:15,
  borderWidth:1,
  width:'80%',
  alignSelf:'center',
  borderColor: '#9d174d',
  borderRadius:6,
  marginTop: 20,
  marginVertical:15,
  flexDirection: 'column',
  alignItems: 'flex-start',
  backgroundColor: '#db2777',
},})
//<Text>{Fehlerdataset(sprache?"DE":"EN").}</Text>
export default FehlermeldungIndividuell