import React from 'react'
import { useContext, useEffect, useState } from 'react';
import LangOb from '../../../lang/lang';
import Container from '../../fragebogencomps/containercomp/Container';

import TitleTouch from './TitleTouch';
import { StyleSheet, Text, View, TextInput,Button, SafeAreaView, TouchableOpacity,ImageBackground } from 'react-native';

import { TransactionContext } from '../../../utils/Context';

import { FCContext } from '../functions/contextFehlercheck';
import { FTContext } from '../functions/contextFehlertext';
import { ECContext } from '../functions/contextErfolgscheck';
import { MAidContext } from '../functions/contextMitarbeiterid';
import { MiniDataset } from '../../../Components/Minijobinhaltsvorlagen/Minijobeingabedataset';
import MiniPersoenlicheDatenObject from '../../../utils/Objects/MiniPersoenlicheDatenObject';
import MiniSelectPicker from './MiniPickerSelectBox';
import MinispeicherButton from './MinispeicherButton';

function MiniNameAnschrift() {
  const [Fehlercheck,setFehlercheck]=useContext(FCContext)
  const [FehlerText,setFehlerText]=useContext(FTContext)
  const [Erfolgscheck,setErfolgscheck]=useContext(ECContext)
  const [PrivateDatenArr,setPrivateDatenArr]=useState(MiniPersoenlicheDatenObject)
  const [sprache,setzesprache]=useContext(TransactionContext)
  const [tab1,settab1]=useState(false)
  const [tab1ausgefuellt,settab1ausgefuellt]=useState(false)
  const [nameAnschriftBG,setnameAnschriftBG]=useState([0,0,0,0,0])
  const [mitarbeiterID,setmitarbeiterID]=useContext(MAidContext)

  const submitdata1=async()=>{
    setFehlercheck(false)
    setFehlerText(false)
    setErfolgscheck(false)
    let Arr=[]
    console.log(PrivateDatenArr)
    let check=true
    if(!(PrivateDatenArr.BewerberStandort>0)){
            check=false
            
    } 
    
    if(!(PrivateDatenArr.Geschlecht>0)){
      check=false
      
    } 
    if(!(PrivateDatenArr.Vname.trim().toString().length>1)){
      check=false
      Arr.push(1)
      
    }else{
      Arr.push(0)
    }
    if(!(PrivateDatenArr.Nname.trim().toString().length>0)){
      check=false
      Arr.push(1)
      }else{
        Arr.push(0)
      }
    
    if(!(PrivateDatenArr.Adresse.trim().toString().length>2)){
      check=false
      Arr.push(1)
    }else{
      Arr.push(0)
    }
    if((PrivateDatenArr.PCode==0) || (PrivateDatenArr.PCode.trim().toString().length!=5)){
      check=false
      
      
      Arr.push(1)
    }else{
      Arr.push(0)
    }
    if(!(PrivateDatenArr.City.trim().toString().length>1)){
      check=false
      Arr.push(1)
    }else{
      Arr.push(0)
    }
    console.log(Arr)
    setnameAnschriftBG(Arr)
    console.log(nameAnschriftBG)
    if(check){

      
      
      try{
        const request ={
          method: 'POST',
          headers: { 'Content-Type' : 'application/json'},
          body: JSON.stringify({
            "query":7,
            "standortSelect": PrivateDatenArr.BewerberStandort.toString().trim(),
            "geschlechtSelect":PrivateDatenArr.Geschlecht.toString().trim(),
            "vorname":PrivateDatenArr.Vname.toString().trim(),
            "nachname":PrivateDatenArr.Nname.toString().trim(),
            "straßeuzahl":PrivateDatenArr.Adresse.toString().trim(),
            "plz":PrivateDatenArr.PCode.toString().trim(),
            "wohnort":PrivateDatenArr.City.toString().trim(),
            

            //"username":eingabe1.toString(), teilzeit check box einbinden
          })
        };
        const d = await fetch('http://192.168.2.154/datenbankapi/index.php', request);
        let e = await d.json(); 
        if(e.ergebnis>0 &&(!isNaN(e.ergebnis))){
          setErfolgscheck(true)
          setTimeout(()=>{
            setErfolgscheck(false)
          },6000)
          settab1(false)
          settab1ausgefuellt(true)
          setmitarbeiterID(e.ergebnis)
          let NO=PrivateDatenArr
          NO.MitarbeiterID=e.ergebnis
          setPrivateDatenArr(NO)
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
    {/**Name und Anschrift */}  
  <TitleTouch AGB={tab1ausgefuellt} F={settab1} S={tab1} T={sprache?LangOb.MinijobBogenUeberschriften.Personendaten.DE:LangOb.MinijobBogenUeberschriften.Personendaten.EN} />
  <MiniSelectPicker S={sprache?'DE':'EN'} V={tab1} I={0} SV={PrivateDatenArr} SF={setPrivateDatenArr}/>
  <Container BGInfo={nameAnschriftBG} W={submitdata1} Icon={MiniDataset(sprache?'DE':'EN').PerData.EingabefelderIcons} Labname={MiniDataset(sprache?'DE':'EN').PerData.Eingabefelder} F={settab1} S={tab1}  SV={PrivateDatenArr} SF={setPrivateDatenArr} /> 
  {
	  tab1?
    <> 
    <MinispeicherButton SDF={submitdata1}/>
    </>
    :
    ""
  }
    </>
  )
}
const styles = StyleSheet.create({
 

})

export default MiniNameAnschrift