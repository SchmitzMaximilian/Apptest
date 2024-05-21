import React from 'react';
import LangOb from '../../../lang/lang';
import { useContext, useEffect, useState } from 'react';
import PersoenlicheDatenObject from '../../../utils/Objects/PersoenlicheDatenObject';
import Container from '../../fragebogencomps/containercomp/Container';
import TitleTouch from './TitleTouch';
import SpeicherButton from './speicherButoon';
import { StyleSheet, Text, View, TextInput,Button, SafeAreaView, TouchableOpacity,ImageBackground } from 'react-native';
import { TransactionContext } from '../../../utils/Context';

import { Dataset } from '../../../utils/Dataset';
import { MAidContext } from '../functions/contextMitarbeiterid';
import { FCContext } from '../functions/contextFehlercheck';
import { FTContext } from '../functions/contextFehlertext';
import { ECContext } from '../functions/contextErfolgscheck';
import { FNContext } from '../functions/contextFehlernummer';




const Kommunikation=()=>{
  const [PrivateDatenArr,setPrivateDatenArr]=useState(PersoenlicheDatenObject)
  const [sprache,setzesprache]=useContext(TransactionContext)
  const [tab2,settab2]=useState(false)
  const [tab2ausgefuellt,settab2ausgefuellt]=useState(false)
  const [kommunikationBG,setkommunikationBG]=useState([0,0,0])
  const [Fehlercheck,setFehlercheck]=useContext(FCContext)
  const [FehlerText,setFehlerText]=useContext(FTContext)
  const [Erfolgscheck,setErfolgscheck]=useContext(ECContext)
  const [Fehlernummer,setFehlernummer]=useContext(FNContext)
  const [mitarbeiterID,setmitarbeiterID]=useContext(MAidContext)


  const submitdataKOM=async()=>{
    
    
      setFehlercheck(false)
      setFehlerText(false)
      setErfolgscheck(false) 
       let Arr=[]
      let check=true
      if((PrivateDatenArr.Festnetz.trim().toString().length>60)){
        check=false
        Arr.push(1)
      }Arr.push(0)
      if((PrivateDatenArr.Mobil.trim().toString().length>80)){
        check=false
        Arr.push(1)
      }Arr.push(0)
      if((PrivateDatenArr.Email.trim().toString().length>150)){
        check=false
        Arr.push(1)
      }Arr.push(0)
      setkommunikationBG(Arr)
       console.log(mitarbeiterID)
      if(check){
        
        try{
          const request ={
            method: 'POST',
            headers: { 'Content-Type' : 'application/json'},
            body: JSON.stringify({
              "query":3,
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