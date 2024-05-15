import React,{ useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput,Button, SafeAreaView, TouchableOpacity ,ImageBackground} from 'react-native';
import { EingabeFeld } from '../../registrierung/regcomps/Comps'
import SimpelCheck from '../../fragebogencomps/sachbearbeitungsComps/SimpelCheck'
import Justchecking from '../../fragebogencomps/sachbearbeitungsComps/Justchecking'
import { SachbearbeitungTextdataset } from '../../../utils/Sachbearbeitung/SachbearbeitungTextdataset'
import { TransactionContext } from '../../../utils/Context'

function Zuschläge() {
  const [sprache,setzesprache]=useContext(TransactionContext)
  const [Beseingabe,setBeseingabe]=useState(false)
  return (
    <>
    <Text style={styles.Titelklein}>{SachbearbeitungTextdataset(sprache?"DE":"EN").Entlohnungtitel.Zuschlag}</Text>
      <Justchecking Bezeichnung={SachbearbeitungTextdataset(sprache?"DE":"EN").Feldname.A}/>
      <Justchecking Bezeichnung={SachbearbeitungTextdataset(sprache?"DE":"EN").Feldname.uebliche}/>
      <SimpelCheck Arbeitstag={setBeseingabe} Bezeichnung={SachbearbeitungTextdataset(sprache?"DE":"EN").Feldname.Besondere}/>
      {
        Beseingabe?
        <EingabeFeld Icon={"Sachbearbeitung"} Labname={SachbearbeitungTextdataset(sprache?"DE":"EN").Feldname.Besondere}/>
        :
        ""
      }
    </>
  )
}
const styles = StyleSheet.create({
  Titelklein:{
    fontSize:20,
    marginHorizontal: '10%',
    marginTop:20,
    textShadowColor:'#000',
    textShadowRadius:5,
    textShadowOffset:{width:3,height:3},
    color:'#FFF',
  },
  
  })
export default Zuschläge