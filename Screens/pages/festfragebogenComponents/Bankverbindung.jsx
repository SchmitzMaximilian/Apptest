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
//import {isValid} from 'iban'
import { FCContext } from '../functions/contextFehlercheck';
import { FTContext } from '../functions/contextFehlertext';
import { ECContext } from '../functions/contextErfolgscheck';
import { MAidContext } from '../functions/contextMitarbeiterid';
import { FNContext } from '../functions/contextFehlernummer';

function Bankverbindung() {
  const [PrivateDatenArr,setPrivateDatenArr]=useState(PersoenlicheDatenObject)
  const [sprache,setzesprache]=useContext(TransactionContext)
  const [tab4,settab4]=useState(false)
  const [tab4ausgefuellt,settab4ausgefuellt]=useState(false)
  const [bankBG,setbankBG]=useState([0,0,0])
  const [Fehlercheck,setFehlercheck]=useContext(FCContext)
  const [FehlerText,setFehlerText]=useContext(FTContext)
  const [Erfolgscheck,setErfolgscheck]=useContext(ECContext)
  const [mitarbeiterID,setmitarbeiterID]=useContext(MAidContext)
  const [Fehlernummer,setFehlernummer]=useContext(FNContext)

  const submitdataBank=async()=>{
    
  
    setFehlercheck(false)
    setFehlerText(false)
    setErfolgscheck(false) 
    let Arr=[]
    let check=true 
    
    if(!(PrivateDatenArr.Bankname.trim().toString().length>2)){ 
      check=false
      Arr.push(1)
    }else{
      Arr.push(0)
    }
    if((PrivateDatenArr.iban.trim().toString())==0){ 
      check=false
      Arr.push(1)
    }else{
      Arr.push(0)
    }
     
    if(PrivateDatenArr.Inhaber==0){ 
      PrivateDatenArr.Inhaber=PrivateDatenArr.Vname.toString()+' '+PrivateDatenArr.Nname.toString()
    } 
    Arr.push(0)
    setbankBG(Arr)
    if(check){
      
      try{
        const request ={
          method: 'POST',
          headers: { 'Content-Type' : 'application/json'},
          body: JSON.stringify({
            "query":4,
            "bankname":PrivateDatenArr.Bankname.toString().trim(),
            "iban":PrivateDatenArr.iban.toString().trim(), 
            "inhaber":PrivateDatenArr.Inhaber.toString().trim(),
            "mitarbeiterID":mitarbeiterID 
          })
        };
        const d = await fetch('http://192.168.2.44/datenbankapi/index.php', request);
        let e = await d.json(); 
        if(e.ergebnis==true){
  
          setErfolgscheck(true)
          setTimeout(()=>{
            setErfolgscheck(false)
          },6000)
          settab4(false)
          settab4ausgefuellt(true)
          console.log('speichertestyeah')
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
      setbankBG(Arr)
      setFehlercheck(true)
      setFehlerText(false)
      setTimeout(()=>{
        setFehlercheck(false)
      },6000)
      setErfolgscheck(false)
      
    }
  }

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