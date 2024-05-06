import React from 'react';
import { useContext, useEffect, useState } from 'react';
import LangOb from '../../../lang/lang';
import Container from '../../fragebogencomps/containercomp/Container';
import PersoenlicheDatenObject from '../../../utils/Objects/PersoenlicheDatenObject';
import SpeicherButton from './speicherButoon';
import TitleTouch from './TitleTouch';
import { StyleSheet, Text, View, TextInput,Button, SafeAreaView, TouchableOpacity,ImageBackground } from 'react-native';
import { Dataset } from '../../../utils/Dataset';
import { TransactionContext } from '../../../utils/Context';
import submitdataNA from '../functions/eingabePruefungen/pruefungNameAnschrift';
//import SelectPicker from '../../fragebogencomps/selectBoxencomp/PickerSelectBox';
import SelectPicker from './PickerSelectBox';


const NameAnschrift = () => {
  const [PrivateDatenArr,setPrivateDatenArr]=useState(PersoenlicheDatenObject)
  const [sprache,setzesprache]=useContext(TransactionContext)
  const [tab1,settab1]=useState(false)
  const [tab1ausgefuellt,settab1ausgefuellt]=useState(false)
  const [nameAnschriftBG,setnameAnschriftBG]=useState([0,0,0,0,0])

  

  return (
  <>
    {/**Name und Anschrift */}  
    <TitleTouch AGB={tab1ausgefuellt} F={settab1} S={tab1} T={sprache?LangOb.Angabenueberschriften.Personendaten.DE:LangOb.Angabenueberschriften.Personendaten.EN} />
    <SelectPicker S={sprache?'DE':'EN'} V={tab1} I={0} SV={PrivateDatenArr} SF={setPrivateDatenArr}/>
    <Container BGInfo={nameAnschriftBG} W={submitdataNA} Icon={Dataset(sprache?'DE':'EN').PerData.EingabefelderIcons} Labname={Dataset(sprache?'DE':'EN').PerData.Eingabefelder} F={settab1} S={tab1}  SV={PrivateDatenArr} SF={setPrivateDatenArr} /> 
    {
      tab1?
      <> 
      <SpeicherButton SDF={submitdataNA}/>
      </>
      :
      ""
    }
  </>
  )
}
const styles = StyleSheet.create({
 

})

export default NameAnschrift