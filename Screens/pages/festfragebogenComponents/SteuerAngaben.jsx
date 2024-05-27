import React from 'react'
import { useContext, useEffect, useState } from 'react';
import LangOb from '../../../lang/lang';
import Container from '../../fragebogencomps/containercomp/Container';
import PersoenlicheDatenObject from '../../../utils/Objects/PersoenlicheDatenObject';
import SpeicherButton from './speicherButoon';
import TitleTouch from './TitleTouch';
import { StyleSheet, Text} from 'react-native';
import { Dataset } from '../../../utils/Dataset';
import { Textdataset } from '../../../utils/Textdataset';
import { TransactionContext } from '../../../utils/Context';
import { isSteuerIdValid } from 'validate-steuerid'
import SteuerID from '../../fragebogencomps/selectBoxencomp/SteuerCheckbox';
import { FCContext } from '../functions/contextFehlercheck';
import { FTContext } from '../functions/contextFehlertext';
import { ECContext } from '../functions/contextErfolgscheck';
import { MAidContext } from '../functions/contextMitarbeiterid'; 
function SteuerAngaben() {
  const [PrivateDatenArr,setPrivateDatenArr]=useState(PersoenlicheDatenObject)
  const [sprache,setzesprache]=useContext(TransactionContext)
  const [tab5,settab5]=useState(false)
  const [tab5ausgefuellt,settab5ausgefuellt]=useState(false)
  const [Steuercheck,setSteuercheck]=useState(false)
  const [steuerBG,setsteuerBG]=useState([0,0,0,0])
  const [steuerBGid,setsteuerBGid]=useState([0])
  const [Fehlercheck,setFehlercheck]=useContext(FCContext)
  const [FehlerText,setFehlerText]=useContext(FTContext)
  const [Erfolgscheck,setErfolgscheck]=useContext(ECContext)
  const [mitarbeiterID,setmitarbeiterID]=useContext(MAidContext) 
  
  const submitdataSteuer=async()=>{

      setFehlercheck(false)
      setFehlerText(false)
      setErfolgscheck(false) 
      let Arr=[]
      let idArr=[]
      let check=true
      
      
      if(!PrivateDatenArr.SteueridCheck>0){
        if(PrivateDatenArr.SteuerID.trim()==0 || (PrivateDatenArr.SteuerID.trim().toString().length>50))
          {
            check=false
            idArr.push(1)
          }else{idArr.push(0)}
      
     }else{idArr.push(0)}
      
    
     
      if(PrivateDatenArr.Steuerklasse==0 || (Number(PrivateDatenArr.Steuerklasse)>6) || !(Number.isInteger(Number(PrivateDatenArr.Steuerklasse)))){
        check=false
        Arr.push(1)
      }else{
        Arr.push(0)
      }
       if(!(Number.isInteger(Number(PrivateDatenArr.Kinder))) || (PrivateDatenArr.Kinder.trim().toString().length>100)){
        check=false
        Arr.push(1)
      }else{
        Arr.push(0)
      }
      if( PrivateDatenArr.Konfession.trim().toString().length==0 || (PrivateDatenArr.Konfession.trim().toString().length>255)){
        check=false
        Arr.push(1)
      }else{
        Arr.push(0)
      } 
      console.log(Arr)
      setsteuerBG(Arr)
      setsteuerBGid(idArr)
      if(check){
        
        try{
          const request ={
            method: 'POST',
            headers: { 'Content-Type' : 'application/json'},
            body: JSON.stringify({
              "query":5,
              "steuerCheck":PrivateDatenArr.SteueridCheck.toString().trim(),
              "steuerid":PrivateDatenArr.SteuerID.toString().trim(),
              "steuerklasse":PrivateDatenArr.Steuerklasse.toString().trim(),
              "kinder":PrivateDatenArr.Kinder.toString().trim(),
              "konfession":PrivateDatenArr.Konfession.toString().trim(),
              "mitarbeiterID":mitarbeiterID
              //
            })
          };
          const d = await fetch('https://itsnando.com/datenbankapi/index.php', request);
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
  <TitleTouch AGB={tab5ausgefuellt} F={settab5} S={tab5} T={sprache?LangOb.Angabenueberschriften.Steuer.DE:LangOb.Angabenueberschriften.Steuer.EN}/>
  {
    tab5?
    <>
    <Text style={styles.Textelemente}>{Textdataset(sprache?'DE':'EN').Texte.SteuerHinweis}</Text>
    <SteuerID S={Steuercheck} F={setSteuercheck}  SV={PrivateDatenArr} SF={setPrivateDatenArr}/>
  <Text style={styles.Textelemente}>{Textdataset(sprache?'DE':'EN').Texte.SteuerKlasseNachweis}</Text>
  {
      Steuercheck?
      ""
      :
   <Container BGInfo={steuerBGid} W={submitdataSteuer} Icon={["Steuer"]} Labname={[sprache?"Steuer-ID (Pflichtangabe)":"Tax ID (mandatory information)"]} F={settab5} S={tab5}  SV={PrivateDatenArr} SF={setPrivateDatenArr}/>
     }  
    </>
    :
    ""
  }  
  <Container BGInfo={steuerBG} W={submitdataSteuer} Icon={Dataset(sprache?'DE':'EN').SteuerData.EingabefelderIcons} Labname={Dataset(sprache?'DE':'EN').SteuerData.Eingabefelder} F={settab5} S={tab5}  SV={PrivateDatenArr} SF={setPrivateDatenArr}/>
  
  {
	  tab5?
    <> 
    <SpeicherButton SDF={submitdataSteuer}/>
    </>
    :
    ""
  }
    </>
  )
}
const styles = StyleSheet.create({
  Textelemente:{
    color:'#fff',
    marginHorizontal: '10%',
    paddingVertical:5
  },

})
export default SteuerAngaben