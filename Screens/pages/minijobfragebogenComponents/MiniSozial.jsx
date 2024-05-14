import React from 'react'
import { StyleSheet, Text, View, TextInput,Button, SafeAreaView, TouchableOpacity,ImageBackground } from 'react-native';
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
import MiniBirthdaySelect from './MiniBirthdaySelect';
import { MiniDataset } from '../../../Components/Minijobinhaltsvorlagen/Minijobeingabedataset';

function MiniSozial() {
  const [PrivateDatenArr,setPrivateDatenArr]=useState(MiniPersoenlicheDatenObject)
  const [sprache,setzesprache]=useContext(TransactionContext)
  const [tab3,settab3]=useState(false)
  const [tab3ausgefuellt,settab3ausgefuellt]=useState(false)
  const [SelectedLanguage, setSelectedLanguage] = useState();
  const [Fehlercheck,setFehlercheck]=useContext(FCContext)
  const [FehlerText,setFehlerText]=useContext(FTContext)
  const [Erfolgscheck,setErfolgscheck]=useContext(ECContext)
  const [mitarbeiterID,setmitarbeiterID]=useContext(MAidContext)
  const [soziBG,setsoziBG]=useState([0,0,0,0,0])



  const datenabruf=async()=>{
    setFehlercheck(false)
    setFehlerText(false)
    setErfolgscheck(false)
    let Arr=[]
    let check=true 
    
    
      if(!(PrivateDatenArr.SVNummerfeld.length==12)){
        
      check=false
      Arr.push(1)
    }else{
      Arr.push(0)
    }
      
    
    if(!(PrivateDatenArr.Staatsbuergerschaft.trim().toString().length>0)){
      
      check=false
      Arr.push(1)
    }else{
      Arr.push(0)
    }
    if(!(PrivateDatenArr.GBDatum.trim().toString().length>0)){
     
      check=false
      
    }
    if(PrivateDatenArr.GBName==0) {
      PrivateDatenArr.GBName=PrivateDatenArr.Nname.toString()
      Arr.push(0)
    }else{
      Arr.push(0)
    }
    
   if((PrivateDatenArr.GBOrt==0)){
      
      check=false
      Arr.push(1)
    }else{
      Arr.push(0)
    }
    if(PrivateDatenArr.GBLand==0){
      PrivateDatenArr.GBLand='Deutschland'
      Arr.push(0)
    }else{Arr.push(0)}
   

    console.log(Arr)
     setsoziBG(Arr)
console.log(Arr)
    if(check){
      
      try{
        const request ={
          method: 'POST',
          headers: { 'Content-Type' : 'application/json'},
          body: JSON.stringify({
            "query":11,

            "sozinummer":PrivateDatenArr.SVNummerfeld.toString().trim(),
            "herkunft":PrivateDatenArr.Staatsbuergerschaft.toString().trim(),
            "gbdatum":PrivateDatenArr.GBDatum.toString().trim(),
            "gbort":PrivateDatenArr.GBOrt.toString().trim(),
            "gbland":PrivateDatenArr.GBLand.toString().trim(),
            "gbname":PrivateDatenArr.GBName.toString().trim(),


            "mitarbeiterID":mitarbeiterID
          })
        };
        console.log(request.body)
        const d = await fetch('http://192.168.2.44/datenbankapi/index.php', request);
        let e = await d.json();
        console.log(e)
        if(e.ergebnis==true){
          setErfolgscheck(true)  
          setTimeout(()=>{
            setErfolgscheck(false)
          },6000)
          settab3ausgefuellt(true)
          settab3(false)
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
    {/**Angaben zur Sozialversicherung */}
  
  <TitleTouch AGB={tab3ausgefuellt} F={settab3} S={tab3} T={sprache?LangOb.MinijobBogenUeberschriften.Sozial.DE:LangOb.MinijobBogenUeberschriften.Sozial.EN} />
    
  
    <Container BGInfo={soziBG} W={datenabruf} Icon={MiniDataset(sprache?'DE':'EN').SozialData.EingabefelderIcons} Labname={MiniDataset(sprache?'DE':'EN').SozialData.Eingabefelder} F={settab3} S={tab3} SV={PrivateDatenArr} SF={setPrivateDatenArr}/>
     
          
  
     {
      tab3?
      <> 
      <MiniBirthdaySelect/>
      <MinispeicherButton SDF={datenabruf}/>
      </>
      :
      ""
    }
    </>
  )
}
const styles = StyleSheet.create({
 

})

export default MiniSozial