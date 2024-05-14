import React from 'react'
import LangOb from '../../../lang/lang'
import { MiniDataset } from '../../../Components/Minijobinhaltsvorlagen/Minijobeingabedataset'
import { MAidContext } from '../functions/contextMitarbeiterid';
import { FCContext } from '../functions/contextFehlercheck';
import { FTContext } from '../functions/contextFehlertext';
import { ECContext } from '../functions/contextErfolgscheck';
import { TransactionContext } from '../../../utils/Context';
import { useContext, useEffect, useState } from 'react';
import Container from '../../fragebogencomps/containercomp/Container';
import TitleTouch from './TitleTouch';

import MiniPersoenlicheDatenObject from '../../../utils/Objects/MiniPersoenlicheDatenObject';
import { StyleSheet, Text, View, TextInput,Button, SafeAreaView, TouchableOpacity,ImageBackground } from 'react-native';
import MinispeicherButton from './MinispeicherButton';

function MiniKommunikation() {
  const [PrivateDatenArr,setPrivateDatenArr]=useState(MiniPersoenlicheDatenObject)
  const [sprache,setzesprache]=useContext(TransactionContext)
  const [tab2,settab2]=useState(false)
  const [tab2ausgefuellt,settab2ausgefuellt]=useState(false)
  const [kommunikationBG,setkommunikationBG]=useState([0,0,0])
  const [Fehlercheck,setFehlercheck]=useContext(FCContext)
  const [FehlerText,setFehlerText]=useContext(FTContext)
  const [Erfolgscheck,setErfolgscheck]=useContext(ECContext)
  const [mitarbeiterID,setmitarbeiterID]=useContext(MAidContext)

  const submitdata2=async()=>{
    setFehlercheck(false)
    setFehlerText(false)
    setErfolgscheck(false)  
   
    let check=true
  
    if(check){
    
      try{
        const request ={
          method: 'POST',
          headers: { 'Content-Type' : 'application/json'},
          body: JSON.stringify({
            "query":8,
            "festnetz":PrivateDatenArr.Festnetz.toString().trim(),
            "mobil":PrivateDatenArr.Mobil.toString().trim(),
            "emailbw":PrivateDatenArr.Email.toString().trim(),
            "mitarbeiterID":mitarbeiterID //für test ID Festlegen
            
          })
        }; 
        const d = await fetch('http://192.168.2.44/datenbankapi/index.php', request);
        let e = await d.json();
        
        if(e.ergebnis==true){
  
          setErfolgscheck(true) 
          setTimeout(()=>{
            setErfolgscheck(false)
          },6000)
          settab2(false)
          settab2ausgefuellt(true)
        }
        else if(e.ergebnis=='DBerror'){//zeigt Datenbankfehler an keine speicherung
          console.log('no Update')
          setFehlercheck(true)
          setFehlerText(true)
          setTimeout(()=>{
            setFehlercheck(false)
          },6000)
        }else{//Fehler bei der Eingabe füllen
          setFehlercheck(true)
          setFehlerText(false)
          setTimeout(()=>{
            setFehlercheck(false)
          },6000)
          console.log('Fehler')
        }
      }
      catch(err){
        console.error(err)
      }
    }else{
      //
      setFehlercheck(true)
      setFehlerText(false)
      setTimeout(()=>{
        setFehlercheck(false)
      },6000)
      setErfolgscheck(false)
    }
  }

  return (
    <>
      {/**Kommunikation */}
  <TitleTouch AGB={tab2ausgefuellt} F={settab2} S={tab2} T={sprache?LangOb.MinijobBogenUeberschriften.Kommunikation.DE:LangOb.MinijobBogenUeberschriften.Kommunikation.EN} /> 
  <Container BGInfo={kommunikationBG} W={submitdata2} Icon={MiniDataset(sprache?'DE':'EN').KontaktData.EingabefelderIcons}Labname={MiniDataset(sprache?'DE': 'EN').KontaktData.Eingabefelder} F={settab2} S={tab2}   SV={PrivateDatenArr} SF={setPrivateDatenArr} />
  {
	  tab2?
    <> 
    <MinispeicherButton SDF={submitdata2}/>
    </>
    :
    ""
  }
    </>
  )
}
const styles = StyleSheet.create({
 

})

export default MiniKommunikation