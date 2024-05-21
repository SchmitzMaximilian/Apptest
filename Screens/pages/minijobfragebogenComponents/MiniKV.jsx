import React from 'react'
import { useContext, useEffect, useState } from 'react';
import MinispeicherButton from './MinispeicherButton'
import { TransactionContext } from '../../../utils/Context'
import MiniPersoenlicheDatenObject from '../../../utils/Objects/MiniPersoenlicheDatenObject'
import LangOb from '../../../lang/lang'
import Container from '../../fragebogencomps/containercomp/Container'
import TitleTouch from './TitleTouch'
import { FCContext } from '../functions/contextFehlercheck';
import { FTContext } from '../functions/contextFehlertext';
import { ECContext } from '../functions/contextErfolgscheck';
import { MAidContext } from '../functions/contextMitarbeiterid';
import { StyleSheet, Text, View, TextInput,Button, SafeAreaView, TouchableOpacity,ImageBackground } from 'react-native';
import { MiniDataset } from '../../../Components/Minijobinhaltsvorlagen/Minijobeingabedataset';
import Privatcheck from '../../fragebogencomps/MinijobCheckboxen/MiniPrivatCheck';
import { FNContext } from '../functions/contextFehlernummer';

function MiniKV() {
  const [PrivateDatenArr,setPrivateDatenArr]=useState(MiniPersoenlicheDatenObject)
  const [sprache,setzesprache]=useContext(TransactionContext)
  const [Fehlercheck,setFehlercheck]=useContext(FCContext)
  const [FehlerText,setFehlerText]=useContext(FTContext)
  const [Erfolgscheck,setErfolgscheck]=useContext(ECContext)
  const [mitarbeiterID,setmitarbeiterID]=useContext(MAidContext)
  const [Fehlernummer,setFehlernummer]=useContext(FNContext)
  const [KVBG,setKVBG]=useState([0])
  const [tab8,settab8]=useState(false)
  const [tab8ausgefuellt,settab8ausgefuellt]=useState(false)
  
  const submitdata8=async()=>{
    setFehlercheck(false)
    setFehlerText(false)
    setErfolgscheck(false) 
    let Arr=[]
    let check=true
    if((PrivateDatenArr.Kassename.trim().toString().length==0) || (PrivateDatenArr.Kassename.trim().toString().length>255)){
      check=false
      Arr.push(1)
    }else{
      Arr.push(0)
    }
    if(PrivateDatenArr.KVArt==1){
      PrivateDatenArr.KVArt=3
     
    }
    setKVBG(Arr)
    
if(check){
  
      try{
        const request ={
          method: 'POST',
          headers: { 'Content-Type' : 'application/json'},
          body: JSON.stringify({
            "query": 14,
            "kassename":PrivateDatenArr.Kassename.toString().trim(),
            "privatCheck":PrivateDatenArr.KVArt.toString().trim(),
            "mitarbeiterID":mitarbeiterID
            //
          })
        };
        const d = await fetch('http://192.168.2.44/datenbankapi/index.php', request);
        let e = await d.json();
        if(e.ergebnis==true){
          setErfolgscheck(true)
          setTimeout(()=>{
            setErfolgscheck(false)
          },6000)
          settab8(false)
          settab8ausgefuellt(true)  
          console.log('speichertestyeah')
        }
        else if(e.ergebnis=='DBerror'){//zeigt Datenbankfehler an keine speicherung
          setFehlercheck(true)
          setFehlerText(true)
          setTimeout(()=>{
            setFehlercheck(false)
          },6000)
          console.log('no Update')
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
      {/**Krankenversicherung */}
  <TitleTouch AGB={tab8ausgefuellt} F={settab8} S={tab8} T={sprache?LangOb.MinijobBogenUeberschriften.Krankenversicherung.DE:LangOb.MinijobBogenUeberschriften.Krankenversicherung.EN}/>
  

  <Container BGInfo={KVBG} W={submitdata8} Icon={MiniDataset(sprache?'DE':'EN').KrankenData.EingabefelderIcons} Labname={MiniDataset(sprache?'DE':'EN').KrankenData.Eingabefelder} F={settab8} S={tab8}  SV={PrivateDatenArr} SF={setPrivateDatenArr}/>
  
  {
	  tab8?
    <>
    <Privatcheck SV={PrivateDatenArr} SF={setPrivateDatenArr}/>
    <MinispeicherButton SDF={submitdata8} />
    </>
    :
    ""
  }
    </>
  )
}

export default MiniKV