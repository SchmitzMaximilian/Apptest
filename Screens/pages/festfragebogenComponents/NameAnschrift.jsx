import React from 'react';
import { useContext, useEffect, useState } from 'react';
import LangOb from '../../../lang/lang';
import Container from '../../fragebogencomps/containercomp/Container';
import PersoenlicheDatenObject from '../../../utils/Objects/PersoenlicheDatenObject';
import SpeicherButton from './speicherButoon';
import TitleTouch from './TitleTouch';
import { StyleSheet } from 'react-native';
import { Dataset } from '../../../utils/Dataset';
import { TransactionContext } from '../../../utils/Context';

//import SelectPicker from '../../fragebogencomps/selectBoxencomp/PickerSelectBox';
import SelectPicker from './PickerSelectBox';
import { FCContext } from '../functions/contextFehlercheck';
import { FTContext } from '../functions/contextFehlertext';
import { ECContext } from '../functions/contextErfolgscheck';
import { MAidContext } from '../functions/contextMitarbeiterid'; 





const NameAnschrift = (props) => {
  const [Fehlercheck,setFehlercheck]=useContext(FCContext)
  const [FehlerText,setFehlerText]=useContext(FTContext)
  const [Erfolgscheck,setErfolgscheck]=useContext(ECContext) 
  const [PrivateDatenArr,setPrivateDatenArr]=useState(props.SV)
  const [sprache,setzesprache]=useContext(TransactionContext)
  const [tab1,settab1]=useState(false)
  const [tab1ausgefuellt,settab1ausgefuellt]=useState(false)
  const [nameAnschriftBG,setnameAnschriftBG]=useState([0,0,0,0,0])
  const [mitarbeiterID,setmitarbeiterID]=useContext(MAidContext)//Nach dem testen wieder auf 0 setzen
  const submitdataNA=async()=>{ 
   
    
      setFehlercheck(false)
      setFehlerText(false)
      setErfolgscheck(false)
      let Arr=[]
      console.log('zeile42'+props.SV)
      let check=true
      if(!(props.SV.BewerberStandort>0)){
              check=false
             
              
      } 
      if(!(props.SV.ArbeitsGrundlage>0)){
        check=false 
        
      }
      if(!(props.SV.Geschlecht>0)){
        check=false
        
      } 
      if(!(props.SV.Vname.trim().toString().length>1) || (props.SV.Vname.trim().toString().length>255)){
        check=false;
        Arr.push(1)
        
        
      }else{
        Arr.push(0)
      }
      if(!(props.SV.Nname.trim().toString().length>0) || (props.SV.Nname.trim().toString().length>255)){
        check=false
        
        
        Arr.push(1)
      }else{
        Arr.push(0)
      }
      
      if(!(props.SV.Adresse.trim().toString().length>2) || (props.SV.Adresse.trim().toString().length>255)){
        check=false
        
        
        Arr.push(1)
      }else{
        Arr.push(0)
      }
      
      if((props.SV.PCode==0) || (props.SV.PCode.trim().toString().length>8)){
        check=false
        
        
        Arr.push(1)
      }else{
        Arr.push(0)
      }
      if(!(props.SV.City.trim().toString().length>1) || (props.SV.City.trim().toString().length>255)){
        check=false
        
        
        Arr.push(1)
      }else{
        Arr.push(0)
      }
      
      setnameAnschriftBG(Arr)
      console.log('check '+check)
      if(check){
        
        try{
          const request ={
            method: 'POST',
            headers: { 'Content-Type' : 'application/json'},
            body: JSON.stringify({
              "query":2,
              "standortSelect": props.SV.BewerberStandort.toString().trim(),
              "geschlechtSelect":props.SV.Geschlecht.toString().trim(),
              "vorname":props.SV.Vname.toString().trim(),
              "nachname":props.SV.Nname.toString().trim(),
              "straßeuzahl":props.SV.Adresse.toString().trim(),
              "plz":props.SV.PCode.toString().trim(),
              "wohnort":props.SV.City.toString().trim(),
              "grundlage":props.SV.ArbeitsGrundlage.toString().trim()
    
              //"username":eingabe1.toString(), teilzeit check box einbinden
            })
          };
           
          const d = await fetch('https://itsnando.com/datenbankapi/index.php', request);
          let e = await d.json();  
          if(e.ergebnis>0 &&(!isNaN(e.ergebnis))){
            setErfolgscheck(true)
            setTimeout(()=>{
              setErfolgscheck(false)
            },6000)
            settab1(false)
            settab1ausgefuellt(true)
            setmitarbeiterID(e.ergebnis)
            let NO=props.SV
            NO.MitarbeiterID=e.ergebnis
            props.SF(NO) 
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
        setnameAnschriftBG(Arr)
        setFehlercheck(true)
        setFehlerText(false)
        setTimeout(()=>{
          setFehlercheck(false)
        },6000)
        setErfolgscheck(false)
      }
    }


    useEffect(()=>{
      console.log(props.SV)
    },[props.SV])
  return (
  <>
    {/**Name und Anschrift */}  
    <TitleTouch AGB={tab1ausgefuellt} F={settab1} S={tab1} T={sprache?LangOb.Angabenueberschriften.Personendaten.DE:LangOb.Angabenueberschriften.Personendaten.EN} />
    <SelectPicker S={sprache?'DE':'EN'} V={tab1} I={0} SV={props.SV} SF={props.SF}/>
    <Container BGInfo={nameAnschriftBG} W={submitdataNA} Icon={Dataset(sprache?'DE':'EN').PerData.EingabefelderIcons} Labname={Dataset(sprache?'DE':'EN').PerData.Eingabefelder} F={settab1} S={tab1}  SV={props.SV} SF={props.SF} /> 
    {
      tab1?
      <> 
      <SpeicherButton SDF={submitdataNA}/>
      </>
      :
      ""
    }
  </>
  )
}
const styles = StyleSheet.create({
 

})

export default NameAnschrift