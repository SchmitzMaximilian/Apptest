import React from 'react'
import { useContext, useEffect, useState } from 'react';
import LangOb from '../../../lang/lang';
import Container from '../../fragebogencomps/containercomp/Container';
import PersoenlicheDatenObject from '../../../utils/Objects/PersoenlicheDatenObject';
import SpeicherButton from './speicherButoon';
import TitleTouch from './TitleTouch';
import { StyleSheet, Text, View, TextInput,Button, SafeAreaView, TouchableOpacity,ImageBackground } from 'react-native';
import { Dataset } from '../../../utils/Dataset';
import { Textdataset } from '../../../utils/Textdataset';
import { TransactionContext } from '../../../utils/Context';
import SVNummer from '../../fragebogencomps/selectBoxencomp/SozialCheckbox';
import GBDatumSelect from './BirthdaySelect';

import {Picker} from '@react-native-picker/picker';
import { MAidContext } from '../functions/contextMitarbeiterid';
import { FCContext } from '../functions/contextFehlercheck';
import { FTContext } from '../functions/contextFehlertext';
import { ECContext } from '../functions/contextErfolgscheck';
import { EingabeFeld } from '../../fragebogencomps/textFeldcomp/EingabeFeld';


function Sozialversicherung() {
  const [PrivateDatenArr,setPrivateDatenArr]=useState(PersoenlicheDatenObject)
  const [sprache,setzesprache]=useContext(TransactionContext)
  const [tab3,settab3]=useState(false)
  const [tab3ausgefuellt,settab3ausgefuellt]=useState(false)
  const [SVCheck,setSVCheck]=useState(false)
  const [JobCheck,setJobCheck]=useState(false)
  const [SelectedLanguage, setSelectedLanguage] = useState();

  const [rentennummerBG,setrentennummerBG]=useState([0])  
  const [soziBG,setsoziBG]=useState([0,0,0,0])
  const [sonderfall,setsonderfall]=useState([0])

  const [mitarbeiterID,setmitarbeiterID]=useContext(MAidContext)
  const [Fehlercheck,setFehlercheck]=useContext(FCContext)
  const [FehlerText,setFehlerText]=useContext(FTContext)
  const [Erfolgscheck,setErfolgscheck]=useContext(ECContext)


  const selectPruefer=(T)=>{
    let O=PrivateDatenArr;
    O.KVArt=T+1;
    setPrivateDatenArr(O)
    if((T+1)==4){
      setJobCheck(true)
    }else{
      setJobCheck(false)
  
    }
  }

  const submitdataSozial=async()=>{

      setFehlercheck(false)
      setFehlerText(false)
      setErfolgscheck(false)
      let Arr=[]
      let check=true 
      
      if(!(PrivateDatenArr.RentenCheck>0)){
        if(!(PrivateDatenArr.SVNummerfeld.length==12)){
        check=false
        setrentennummerBG([1])
        }else{
          setrentennummerBG([0])
        }
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
      if(!(PrivateDatenArr.GBOrt.trim().toString().length>0)){
        check=false
        Arr.push(1)
      }else{
        Arr.push(0)
      }
      if(PrivateDatenArr.GBLand==0){
        PrivateDatenArr.GBLand='Deutschland'
        Arr.push(0)
      }else if(!(PrivateDatenArr.GBLand.trim().toString().length>3)){
        check=false
        Arr.push(1)
        console.log('du doof')
      }else{
        Arr.push(0)
      }
      if(!(PrivateDatenArr.Kassename.trim().toString().length>0)){
        check=false
        Arr.push(1)
      }else{
        Arr.push(0)
      } 
      if(!(PrivateDatenArr.KVArt>0)){
        check=false
      }
    
      if(PrivateDatenArr.KVArt==4){
        if(!(PrivateDatenArr.AndereArbeitgeber.trim().toString().length>4)){
        check=false
        setsonderfall([1])
      }else{
        setsonderfall([0])
      } 
      }
       
    setsoziBG(Arr)
      if(check){
        try{
          const request ={
            method: 'POST',
            headers: { 'Content-Type' : 'application/json'},
            body: JSON.stringify({
              "query":6,
              "sozialCheck":PrivateDatenArr.RentenCheck.toString().trim(),
              "sozinummer":PrivateDatenArr.SVNummerfeld.toString().trim(),
              "herkunft":PrivateDatenArr.Staatsbuergerschaft.toString().trim(),
              "gbdatum":PrivateDatenArr.GBDatum.toString().trim(),
              "gbort":PrivateDatenArr.GBOrt.toString().trim(),
              "gbland":PrivateDatenArr.GBLand.toString().trim(),
              "krankenkassename":PrivateDatenArr.Kassename.toString().trim(),
              "soziSelect":PrivateDatenArr.KVArt.toString().trim(),
              "arbeitgeberListe":PrivateDatenArr.AndereArbeitgeber.toString().trim(),
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
        setsoziBG(Arr)
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
  
  <TitleTouch AGB={tab3ausgefuellt} F={settab3} S={tab3} T={sprache?LangOb.Angabenueberschriften.Sozial.DE:LangOb.Angabenueberschriften.Sozial.EN} />
    {
      tab3?
      <>
      <SVNummer S={SVCheck} F={setSVCheck}  SV={PrivateDatenArr} SF={setPrivateDatenArr}/>
      {
        SVCheck?
        ""
        :
        <Container BGInfo={rentennummerBG} W={submitdataSozial} Icon={["Krankenversicherung"]} Labname={[sprache?"Sozialversicherungsnummer/Rentennummer":"Social security number/pension number"]} F={settab3} S={tab3} SV={PrivateDatenArr} SF={setPrivateDatenArr}/> 
      }
      </>
      :
      ""
    }  
  
  <Container BGInfo={soziBG} W={submitdataSozial} Icon={Dataset(sprache?'DE':'EN').SozialData.EingabefelderIcons} Labname={Dataset(sprache?'DE':'EN').SozialData.Eingabefelder} F={settab3} S={tab3} SV={PrivateDatenArr} SF={setPrivateDatenArr}/>
  {
    tab3?
  <>

    <GBDatumSelect/>
          
    
    <Text  style={styles.Textelemente}>{(sprache?'Art der Krankenversicherung (Pflichtangabe, zutreffendes makieren)':'Type of health insurance (mandatory information, mark as applicable)')}</Text>
    <View style={{borderRadius:2,borderWidth:1,borderColor:'#4b5563', width:'80%',marginLeft:'10%',backgroundColor:'#6b728090'}}>
     <Picker style={{color:'#FFF'}}  dropdownIconColor={"#FFF"} selectedValue={SelectedLanguage} multiline={true} numberOfLines={2} onValueChange={(itemValue, itemIndex) =>
    {selectPruefer(itemValue);setSelectedLanguage(itemValue)}
  }  >
    {
      (sprache?["(1)Gesetzlich","(2)Freiwillig","(3)Privat","(4)Ich übe neben dieser noch weitere Beschäftigungen aus(Bitte fügen Sie eine vollständige Liste aller weiteren Arbeitgeber bei)"]:["(1)Legally","(2)Voluntarily","(3)Private","(4)I have other jobs besides this one (please include a complete list of all other employers)"]).map((item,index)=>(
        <Picker.Item  key={'pickup'+index+item}  color="#000" label={item} value={index} />

      ))
    }
  </Picker> 
   {tab3?
   <>
   {
    JobCheck&&tab3?
      <>
      <EingabeFeld BGInfo={sonderfall} Icon={"Krankenversicherung"} Labname={Textdataset(sprache?'DE':'EN').SoloCheckboxText.OtherJobs}  SV={PrivateDatenArr} SF={setPrivateDatenArr}/>
      </>
      :
      "" }</>
      :
      ""
      }
  </View>
  </>
  :''
   }
   {
	  tab3?
    <> 
    <SpeicherButton SDF={submitdataSozial}/>
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
export default Sozialversicherung