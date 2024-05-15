import React,{ useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput,Button, SafeAreaView, TouchableOpacity ,ImageBackground} from 'react-native';
import { SachbearbeitungTextdataset } from '../../../utils/Sachbearbeitung/SachbearbeitungTextdataset'
import SimpelCheck from '../../fragebogencomps/sachbearbeitungsComps/SimpelCheck'

import { TransactionContext } from '../../../utils/Context';
import { EingabeFeld } from '../../registrierung/regcomps/Comps';

function ArbeitstageCheck() {
  const [sprache,setzesprache]=useContext(TransactionContext)
  const [ArbeitMoCheck,setArbeitMoCheck]=useState(false)
  const [ArbeitDiCheck,setArbeitDiCheck]=useState(false)
  const [ArbeitMiCheck,setArbeitMiCheck]=useState(false)
  const [ArbeitDoCheck,setArbeitDoCheck]=useState(false)
  const [ArbeitFrCheck,setArbeitFrCheck]=useState(false)
  const [ArbeitSaCheck,setArbeitSaCheck]=useState(false)
  const [ArbeitSoCheck,setArbeitSoCheck]=useState(false)
  return (<>
      <EingabeFeld Icon={"Sachbearbeitung"} Labname={SachbearbeitungTextdataset(sprache?"DE":"EN").Feldname.Eintrittsdatum}/>
      <EingabeFeld Icon={"Sachbearbeitung"} Labname={SachbearbeitungTextdataset(sprache?"DE":"EN").Feldname.Enddatum}/>
      
      
      
      <EingabeFeld Icon={"Sachbearbeitung"} Labname={SachbearbeitungTextdataset(sprache?"DE":"EN").Feldname.ZeitGesamt}/>
      <Text style={styles.Textelemente}>{SachbearbeitungTextdataset(sprache?"DE":"EN").Feldname.ZeitTag}</Text>

      <SimpelCheck  Arbeitstag={setArbeitMoCheck} Bezeichnung={SachbearbeitungTextdataset(sprache?"DE":"EN").Feldname.Mo}/>
      {
        ArbeitMoCheck?

        <EingabeFeld Icon={"Sachbearbeitung"} Labname={SachbearbeitungTextdataset(sprache?"DE":"EN").Feldname.Mo}/>
        :
        ""
      }
      
      
      <SimpelCheck Arbeitstag={setArbeitDiCheck} Bezeichnung={SachbearbeitungTextdataset(sprache?"DE":"EN").Feldname.Di}/>
      
      {
        ArbeitDiCheck?
        <EingabeFeld Icon={"Sachbearbeitung"} Labname={SachbearbeitungTextdataset(sprache?"DE":"EN").Feldname.Di}/>
        :
        ""
      }
      <SimpelCheck Arbeitstag={setArbeitMiCheck} Bezeichnung={SachbearbeitungTextdataset(sprache?"DE":"EN").Feldname.Mi}/>
      
      {
        ArbeitMiCheck?
        <EingabeFeld Icon={"Sachbearbeitung"} Labname={SachbearbeitungTextdataset(sprache?"DE":"EN").Feldname.Mi}/>
        :
        ""
      }
      <SimpelCheck Arbeitstag={setArbeitDoCheck} Bezeichnung={SachbearbeitungTextdataset(sprache?"DE":"EN").Feldname.Do}/>
      
      {
        ArbeitDoCheck?
        <EingabeFeld Icon={"Sachbearbeitung"} Labname={SachbearbeitungTextdataset(sprache?"DE":"EN").Feldname.Do}/>
        :
        ""
      }
      <SimpelCheck Arbeitstag={setArbeitFrCheck} Bezeichnung={SachbearbeitungTextdataset(sprache?"DE":"EN").Feldname.Fr}/>
      
      {
        ArbeitFrCheck?
        <EingabeFeld Icon={"Sachbearbeitung"} Labname={SachbearbeitungTextdataset(sprache?"DE":"EN").Feldname.Fr}/>
        :
        ""
      }
      <SimpelCheck Arbeitstag={setArbeitSaCheck} Bezeichnung={SachbearbeitungTextdataset(sprache?"DE":"EN").Feldname.Sa}/>
      
      {
        ArbeitSaCheck?
        <EingabeFeld Icon={"Sachbearbeitung"} Labname={SachbearbeitungTextdataset(sprache?"DE":"EN").Feldname.Sa}/>
        :
        ""
      }
      <SimpelCheck Arbeitstag={setArbeitSoCheck} Bezeichnung={SachbearbeitungTextdataset(sprache?"DE":"EN").Feldname.So}/>
      
      {
        ArbeitSoCheck?
        <EingabeFeld Icon={"Sachbearbeitung"} Labname={SachbearbeitungTextdataset(sprache?"DE":"EN").Feldname.So}/>
        :
        ""
      }
      <EingabeFeld Icon={"Sachbearbeitung"} Labname={SachbearbeitungTextdataset(sprache?"DE":"EN").Feldname.Urlaub}/>
</>
  )
}
const styles = StyleSheet.create({


Textelemente:{
  color:'#fff',
  fontSize: 18,
  paddingHorizontal:10,
  paddingVertical:10,
},
})

export default ArbeitstageCheck