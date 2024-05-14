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
import { Minijobtextdataset } from '../../../Components/Minijobinhaltsvorlagen/Minijobtextdataset';
import { StyleSheet, Text, View, TextInput,Button, SafeAreaView, TouchableOpacity,ImageBackground } from 'react-native';
import { EingabeFeld } from '../../fragebogencomps/textFeldcomp/EingabeFeld';
import { Picker } from '@react-native-picker/picker';
function MiniStatus() {

  const [EigeneingabeBG,setEigeneingabeBG]=useState([0])
  const [JobCheck,setJobCheck]=useState(false)
  const [PrivateDatenArr,setPrivateDatenArr]=useState(MiniPersoenlicheDatenObject)
  const [sprache,setzesprache]=useContext(TransactionContext)
  const [Fehlercheck,setFehlercheck]=useContext(FCContext)
  const [FehlerText,setFehlerText]=useContext(FTContext)
  const [Erfolgscheck,setErfolgscheck]=useContext(ECContext)
  const [mitarbeiterID,setmitarbeiterID]=useContext(MAidContext)
  const [SelectedLanguage, setSelectedLanguage] = useState()
  const [tab6,settab6]=useState(false)
  const [tab6ausgefuellt,settab6ausgefuellt]=useState(false)
  const selectPruefer=(T)=>{
    let O=PrivateDatenArr;
    O.StatusCheck=T+1;
    setPrivateDatenArr(O)
    if((T+1)==4){
      setJobCheck(true)
    }else{
      setJobCheck(false)
  
    }
  }

  const submitdata6=async()=>{
    setFehlercheck(false)
    setFehlerText(false)
    setErfolgscheck(false)
    let Arr=[] 
    let check=true
    if(PrivateDatenArr.StatusCheck==4){
      if(PrivateDatenArr.Eintragsonstige.trim().toString().length==0){
      check=false
      Arr.push(1)}Arr.push(0)
    }else{
      Arr.push(0)
    }
    setEigeneingabeBG(Arr)
if(check){
      try{
        const request ={
          method: 'POST',
          headers: { 'Content-Type' : 'application/json'},
          body: JSON.stringify({
            "query": 12,
            "jobstatus": PrivateDatenArr.StatusCheck.toString().trim(),
            "selbsteintrag": PrivateDatenArr.Eintragsonstige.toString().trim(),
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
          settab6(false)
          settab6ausgefuellt(true)  
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
            {/**Status zu Beginn der Beschäftigung */}
  <TitleTouch AGB={tab6ausgefuellt} F={settab6} S={tab6} T={sprache?LangOb.MinijobBogenUeberschriften.Arbeitsverhältnis.DE:LangOb.MinijobBogenUeberschriften.Arbeitsverhältnis.EN}/>
  {
    tab6?
  <>
    <Text  style={styles.Textelemente}>{(sprache?'Arbeitsstatus':'Work status')}</Text>
    <View style={{borderRadius:2,borderWidth:1,borderColor:'#4b5563', width:'80%',marginLeft:'10%',backgroundColor:'#6b728090'}}>
     <Picker style={{color:'#FFF'}}  dropdownIconColor={"#FFF"} selectedValue={SelectedLanguage} multiline={true} numberOfLines={2} onValueChange={(itemValue, itemIndex) =>
    {selectPruefer(itemValue);setSelectedLanguage(itemValue)}
  }  >
    {
      (sprache?["(1) Schüler(in)","(2) Student(in)","(3) Beamtin/Beamter","(4) Sonstiger"]:["(1) Pupil","(2) student","(3) civil servant","(4) Other"]).map((item,index)=>(
        <Picker.Item  key={'pickup'+index+item}  color="#000" label={item} value={index} />

      ))
    }
  </Picker> 
   {tab6?
   <>
   {
    JobCheck&&tab6?
      <>
      <EingabeFeld BGInfo={EigeneingabeBG} Icon={"Krankenversicherung"} Labname={Minijobtextdataset(sprache?'DE':'EN').SoloCheckboxText.Sonstig}  SV={PrivateDatenArr} SF={setPrivateDatenArr}/>
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
	  tab6?
    <> 
    <MinispeicherButton SDF={submitdata6}/>
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
export default MiniStatus