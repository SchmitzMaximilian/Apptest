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
import JaNeinCheckbox from '../../fragebogencomps/MinijobCheckboxen/MiniJaNeinCheck';
import JaNeinCheckbox1 from '../../fragebogencomps/MinijobCheckboxen/MiniJaNeinCheck1';
import JaNeinCheckbox2 from '../../fragebogencomps/MinijobCheckboxen/MiniJaNeinCheck2';
import { Minijobtextdataset } from '../../../Components/Minijobinhaltsvorlagen/Minijobtextdataset';

function MiniJANEIN() {
  const [PrivateDatenArr,setPrivateDatenArr]=useState(MiniPersoenlicheDatenObject)
  const [sprache,setzesprache]=useContext(TransactionContext)
  const [Fehlercheck,setFehlercheck]=useContext(FCContext)
  const [FehlerText,setFehlerText]=useContext(FTContext)
  const [Erfolgscheck,setErfolgscheck]=useContext(ECContext)
  const [mitarbeiterID,setmitarbeiterID]=useContext(MAidContext)
  const [JaNeinCheck,setJaNeinCheck]=useState(false)
  const [tab7,settab7]=useState(false)
  const [tab7ausgefuellt,settab7ausgefuellt]=useState(false)

  const submitdata7=async()=>{
    setFehlercheck(false)
    setFehlerText(false)
    setErfolgscheck(false) 
    let check=true

    if(PrivateDatenArr.HauptjobCheck==0){
      check=false
    }
    if(PrivateDatenArr.WeitereJobCheck==1){
      if(PrivateDatenArr.GeldGrenzeCheck==0){
        check=false
      }
    }else if(PrivateDatenArr.WeitereJobCheck==0){
      check=false
    }
    
if(check){
      try{
        const request ={
          method: 'POST',
          headers: { 'Content-Type' : 'application/json'},
          body: JSON.stringify({
            "query": 13,
            
            "HauptjobCheck":PrivateDatenArr.HauptjobCheck.toString().trim(),
            "WeitereJobCheck":PrivateDatenArr.WeitereJobCheck.toString().trim(),
            "GeldGrenzeCheck":PrivateDatenArr.GeldGrenzeCheck.toString().trim(),

            "mitarbeiterID":mitarbeiterID
            //
          })
        };
        const d = await fetch('http://192.168.2.154/datenbankapi/index.php', request);
        let e = await d.json();
        if(e.ergebnis==true){
          setErfolgscheck(true)
          setTimeout(()=>{
            setErfolgscheck(false)
          },6000)
          settab7(false)
          settab7ausgefuellt(true)  
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
    {/**Angaben zu weiteren Beschäftigungen */}
  <TitleTouch AGB={tab7ausgefuellt} F={settab7} S={tab7} T={sprache?LangOb.MinijobBogenUeberschriften.OtherJobs.DE:LangOb.MinijobBogenUeberschriften.OtherJobs.EN}/>
  {
	  tab7?
    <> 
    
    <Text style={{color:'#fff', marginHorizontal: '10%',paddingVertical:10}}>{Minijobtextdataset(sprache?'DE':'EN').Texte.BeschreibungJaNeinBox1}</Text>
    <View style={{flexDirection: 'row' , marginHorizontal: '10%',paddingVertical:10}}>
    <JaNeinCheckbox1 SV={PrivateDatenArr} SF={setPrivateDatenArr}/>
    </View>
   
    <Text style={{color:'#fff', marginHorizontal: '10%',paddingVertical:10}}>{Minijobtextdataset(sprache?'DE':'EN').Texte.BeschreibungJaNeinBox2}</Text>
    <View style={{flexDirection: 'row' , marginHorizontal: '10%',paddingVertical:10}}>
    <JaNeinCheckbox S={JaNeinCheck} F={setJaNeinCheck}  SV={PrivateDatenArr} SF={setPrivateDatenArr}/>
    </View>
    {JaNeinCheck?
    <>
    <Text style={{color:'#fff', marginHorizontal: '10%',paddingVertical:10}}>{Minijobtextdataset(sprache?'DE':'EN').Texte.BeschreibungJaNeinBox3}</Text>
    <View style={{flexDirection: 'row' , marginHorizontal: '10%',paddingVertical:10}}>
    <JaNeinCheckbox2  SV={PrivateDatenArr} SF={setPrivateDatenArr}/>
    </View>
    </>
    :
    ""
    }


    <MinispeicherButton SDF={submitdata7}/>
    </>
    :
    ""
  }

    </>
  )
}
const styles = StyleSheet.create({
 

})
export default MiniJANEIN