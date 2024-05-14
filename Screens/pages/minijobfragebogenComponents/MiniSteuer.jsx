import React from 'react'
import { useContext, useEffect, useState } from 'react';
import MinispeicherButton from './MinispeicherButton'
import { TransactionContext } from '../../../utils/Context'
import MiniPersoenlicheDatenObject from '../../../utils/Objects/MiniPersoenlicheDatenObject'
import { MiniDataset } from '../../../Components/Minijobinhaltsvorlagen/Minijobeingabedataset'
import LangOb from '../../../lang/lang'
import { FCContext } from '../functions/contextFehlercheck';
import { FTContext } from '../functions/contextFehlertext';
import { ECContext } from '../functions/contextErfolgscheck';
import { MAidContext } from '../functions/contextMitarbeiterid';
import { isSteuerIdValid } from 'validate-steuerid'
import SteuerEinwillligung from '../../fragebogencomps/MinijobCheckboxen/MiniSteuercheck'
import Container from '../../fragebogencomps/containercomp/Container'
import TitleTouch from './TitleTouch'
import { StyleSheet, Text, View, TextInput,Button, SafeAreaView, TouchableOpacity,ImageBackground } from 'react-native';

function MiniSteuer() {
  const [PrivateDatenArr,setPrivateDatenArr]=useState(MiniPersoenlicheDatenObject)
  const [sprache,setzesprache]=useContext(TransactionContext)
  const [tab5,settab5]=useState(false)
  const [tab5ausgefuellt,settab5ausgefuellt]=useState(false)
  const [Steuercheck,setSteuercheck]=useState(false)
  const [steuerBG,setsteuerBG]=useState([0])
   
  const [Fehlercheck,setFehlercheck]=useContext(FCContext)
  const [FehlerText,setFehlerText]=useContext(FTContext)
  const [Erfolgscheck,setErfolgscheck]=useContext(ECContext)
  const [mitarbeiterID,setmitarbeiterID]=useContext(MAidContext)

  const submitdata4=async()=>{
    setFehlercheck(false)
    setFehlerText(false)
    setErfolgscheck(false) 
    let Arr=[]
    let check=true
    
    
      //if(!isSteuerIdValid(PrivateDatenArr.SteuerID.trim())){
      //check=false
      
    // Arr.push(1)
      // }else{
      //   Arr.push(0)
      // }
      // }
      if(PrivateDatenArr.SteuerID.trim()==0)
        {
          check=false
          Arr.push(1)
        }else{Arr.push(0)}
    
    
    setsteuerBG(Arr)
    if(check){
      
      try{
        const request ={
          method: 'POST',
          headers: { 'Content-Type' : 'application/json'},
          body: JSON.stringify({
            "query":10,
            
            "steuerid":PrivateDatenArr.SteuerID.toString().trim(),
            "steuereinwilligung":PrivateDatenArr.SteueridCheck.toString().trim(),
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
          settab5(false)
          settab5ausgefuellt(true)
          console.log('speichertestyeah')
        }
        else if(e.ergebnis=='DBerror'){//zeigt Datenbankfehler an keine speicherung 
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
    {/**Angaben zur Steuer */}
  <TitleTouch AGB={tab5ausgefuellt} F={settab5} S={tab5} T={sprache?LangOb.MinijobBogenUeberschriften.Steuer.DE:LangOb.MinijobBogenUeberschriften.Steuer.EN}/>
    
    <Container BGInfo={steuerBG} W={submitdata4} Icon={MiniDataset(sprache?'DE':'EN').SteuerData.EingabefelderIcons} Labname={MiniDataset(sprache?'DE':'EN').SteuerData.Eingabefelder} F={settab5} S={tab5}  SV={PrivateDatenArr} SF={setPrivateDatenArr}/>
    
    {
      tab5?
      <> 
      <SteuerEinwillligung S={Steuercheck} F={setSteuercheck}  SV={PrivateDatenArr} SF={setPrivateDatenArr}/>
      <MinispeicherButton SDF={submitdata4}/>
      </>
      :
      ""
    }
    </>
  )
}
const styles = StyleSheet.create({
 

})
export default MiniSteuer