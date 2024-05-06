import React from 'react';
import { useContext, useEffect, useState } from 'react';
import LangOb from '../../../lang/lang';
import Container from '../../fragebogencomps/containercomp/Container';
import PersoenlicheDatenObject from '../../../utils/Objects/PersoenlicheDatenObject';
import SpeicherButton from './speicherButoon';
import TitleTouch from './TitleTouch';
import { StyleSheet, Text, View, TextInput,Button, SafeAreaView, TouchableOpacity,ImageBackground } from 'react-native';
import { Textdataset } from '../../../utils/Textdataset';
import { Dataset } from '../../../utils/Dataset';
import { TransactionContext } from '../../../utils/Context';
import submitdataBank from '../functions/eingabePruefungen/pruefungBankverbindung';

function Bankverbindung() {
  const [PrivateDatenArr,setPrivateDatenArr]=useState(PersoenlicheDatenObject)
  const [sprache,setzesprache]=useContext(TransactionContext)
  const [tab4,settab4]=useState(false)
  const [tab4ausgefuellt,settab4ausgefuellt]=useState(false)
  const [bankBG,setbankBG]=useState([0,0,0])
  return (<>
    {/**Bankverbindung */}  
  <TitleTouch AGB={tab4ausgefuellt} F={settab4} S={tab4} T={sprache?LangOb.Angabenueberschriften.Bank.DE:LangOb.Angabenueberschriften.Bank.EN}/>  
  {
    tab4?
    <>
    <Text style={styles.Bichinweis}>{Textdataset(sprache?'DE':'EN').Texte.BicHinweis}</Text>
    
      <Container BGInfo={bankBG} W={submitdataBank} Icon={Dataset(sprache?'DE':'EN').BankData.EingabefelderIcons} Labname={Dataset(sprache?'DE':'EN').BankData.Eingabefelder} F={settab4} S={tab4}  SV={PrivateDatenArr} SF={setPrivateDatenArr}/>
    
    </>
    :
    ""
  }
{
	  tab4?
    <> 
    <SpeicherButton SDF={submitdataBank}/>
    </>
    :
    ""
  }
  </>
  )
}
const styles = StyleSheet.create({
  Bichinweis:{
    color:'#fff',
    marginHorizontal: '10%',
    paddingBottom: 5,
    fontSize: 10,
  },
  

})

export default Bankverbindung