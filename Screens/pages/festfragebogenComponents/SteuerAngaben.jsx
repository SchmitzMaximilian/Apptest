import React from 'react'
import { useContext, useEffect, useState } from 'react';
import LangOb from '../../../lang/lang';
import Container from '../../fragebogencomps/containercomp/Container';
import PersoenlicheDatenObject from '../../../utils/Objects/PersoenlicheDatenObject';
import SpeicherButton from './speicherButoon';
import TitleTouch from './TitleTouch';
import { StyleSheet, Text, View, TextInput,Button, SafeAreaView, TouchableOpacity,ImageBackground } from 'react-native';
import { Dataset } from '../../../utils/Dataset';
import { Textdataset } from '../../../utils/Textdataset';
import { TransactionContext } from '../../../utils/Context';
import submitdataSteuer from '../functions/eingabePruefungen/pruefungSteuer';
import SteuerID from '../../fragebogencomps/selectBoxencomp/SteuerCheckbox';
function SteuerAngaben() {
  const [PrivateDatenArr,setPrivateDatenArr]=useState(PersoenlicheDatenObject)
  const [sprache,setzesprache]=useContext(TransactionContext)
  const [tab5,settab5]=useState(false)
  const [tab5ausgefuellt,settab5ausgefuellt]=useState(false)
  const [Steuercheck,setSteuercheck]=useState(false)
  const [steuerBG,setsteuerBG]=useState([0,0,0,0])
  const [SVCheck,setSVCheck]=useState(false) 
  return (
    <>
    {/**Angaben zur Steuer */}
  <TitleTouch AGB={tab5ausgefuellt} F={settab5} S={tab5} T={sprache?LangOb.Angabenueberschriften.Steuer.DE:LangOb.Angabenueberschriften.Steuer.EN}/>
  {
    tab5?
    <>
    <Text style={styles.Textelemente}>{Textdataset(sprache?'DE':'EN').Texte.SteuerHinweis}</Text>
    <SteuerID S={Steuercheck} F={setSteuercheck}  SV={PrivateDatenArr} SF={setPrivateDatenArr}/>
  <Text style={styles.Textelemente}>{Textdataset(sprache?'DE':'EN').Texte.SteuerKlasseNachweis}</Text>
  {
      Steuercheck?
      ""
      :
   <Container BGInfo={steuerBG} W={submitdataSteuer} Icon={["Steuer"]} Labname={[sprache?"Steuer-ID (Pflichtangabe)":"Tax ID (mandatory information)"]} F={settab5} S={tab5}  SV={PrivateDatenArr} SF={setPrivateDatenArr}/>
     }  
    </>
    :
    ""
  }  
  <Container BGInfo={steuerBG} W={submitdataSteuer} Icon={Dataset(sprache?'DE':'EN').SteuerData.EingabefelderIcons} Labname={Dataset(sprache?'DE':'EN').SteuerData.Eingabefelder} F={settab5} S={tab5}  SV={PrivateDatenArr} SF={setPrivateDatenArr}/>
  
  {
	  tab5?
    <> 
    <SpeicherButton SDF={submitdataSteuer}/>
    </>
    :
    ""
  }
    </>
  )
}
const styles = StyleSheet.create({
  Textelemente:{
    color:'#fff',
    marginHorizontal: '10%',
    paddingVertical:5
  },

})
export default SteuerAngaben