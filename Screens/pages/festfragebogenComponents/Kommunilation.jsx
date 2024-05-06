import React from 'react';
import LangOb from '../../../lang/lang';
import { useContext, useEffect, useState } from 'react';
import PersoenlicheDatenObject from '../../../utils/Objects/PersoenlicheDatenObject';
import Container from '../../fragebogencomps/containercomp/Container';
import TitleTouch from './TitleTouch';
import SpeicherButton from './speicherButoon';
import { StyleSheet, Text, View, TextInput,Button, SafeAreaView, TouchableOpacity,ImageBackground } from 'react-native';
import { TransactionContext } from '../../../utils/Context';
import submitdataKOM from '../functions/eingabePruefungen/pruefungNameAnschrift';
import { Dataset } from '../../../utils/Dataset';

const Kommunikation=()=>{
  const [PrivateDatenArr,setPrivateDatenArr]=useState(PersoenlicheDatenObject)
  const [sprache,setzesprache]=useContext(TransactionContext)
  const [tab2,settab2]=useState(false)
  const [tab2ausgefuellt,settab2ausgefuellt]=useState(false)
  const [kommunikationBG,setkommunikationBG]=useState([0,0,0])
  return(
  <>
    {/**Kommunikation */}
    <TitleTouch AGB={tab2ausgefuellt} F={settab2} S={tab2} T={sprache?LangOb.Angabenueberschriften.Kommunikation.DE:LangOb.Angabenueberschriften.Kommunikation.EN} /> 
    <Container BGInfo={kommunikationBG} W={submitdataKOM} Icon={Dataset(sprache?'DE':'EN').KontaktData.EingabefelderIcons}Labname={Dataset(sprache?'DE': 'EN').KontaktData.Eingabefelder} F={settab2} S={tab2}   SV={PrivateDatenArr} SF={setPrivateDatenArr} />
    {
	    tab2?
      <> 
      <SpeicherButton SDF={submitdataKOM}/>
      </>
      :
      ""
    }
  </>
  )
}
const styles = StyleSheet.create({
  

})
export default Kommunikation