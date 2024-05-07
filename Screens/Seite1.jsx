import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput,Button, SafeAreaView, TouchableOpacity,ImageBackground } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import LANG from './../lang/lang';
import Blocktop from './component/seite1comp/blocktop'; 
import { TransactionContext } from '../utils/Context'; 
import {Octicons, Ionicons} from '@expo/vector-icons';

import Container from './fragebogencomps/containercomp/Container';
import SelectPicker from './fragebogencomps/selectBoxencomp/PickerSelectBox'; 

import SpeicherButton from './pages/festfragebogenComponents/speicherButoon';



import TitleTouch from './fragebogencomps/touchTitle/TitleTouch';
import { Dataset } from '../utils/Dataset';
import { Textdataset } from '../utils/Textdataset';
import SteuerID from './fragebogencomps/selectBoxencomp/SteuerCheckbox';
import { ScrollView } from 'react-native-gesture-handler';
import PersoenlicheDatenObject from '../utils/Objects/PersoenlicheDatenObject'; 
import {isValid} from 'iban'
import { isSteuerIdValid } from 'validate-steuerid'
import * as SecureStore from 'expo-secure-store';
import {Picker} from '@react-native-picker/picker';
import SVNummer from './fragebogencomps/selectBoxencomp/SozialCheckbox';
import { EingabeFeld } from './fragebogencomps/textFeldcomp/EingabeFeld';
//import Fehlermeldung from './fragebogencomps/anzeigefelder/Fehlermeldung';
import  DateTimePicker  from '@react-native-community/datetimepicker';

export default function Seite1({navigation}) {
  const [sprache,setzesprache]=useContext(TransactionContext)  
  const [tab1,settab1]=useState(false)
  const [tab1ausgefuellt,settab1ausgefuellt]=useState(false)  
  const [tab2,settab2]=useState(false)
  const [tab2ausgefuellt,settab2ausgefuellt]=useState(false)  
  
  const [tab3,settab3]=useState(false)
  const [tab3ausgefuellt,settab3ausgefuellt]=useState(false)
  const [SVCheck,setSVCheck]=useState(false) 
  const [JobCheck,setJobCheck]=useState(false)  
  const [SelectedLanguage, setSelectedLanguage] = useState();
  const [tab4,settab4]=useState(false)
  const [tab4ausgefuellt,settab4ausgefuellt]=useState(false)

  const [tab5,settab5]=useState(false)
  const [tab5ausgefuellt,settab5ausgefuellt]=useState(false)
const [Steuercheck,setSteuercheck]=useState(false)

  const [Fehlercheck,setFehlercheck]=useState(false)
  const [FehlerText,setFehlerText]=useState(false)
  const [Erfolgscheck,setErfolgscheck]=useState(false)

  const [nameAnschriftBG,setnameAnschriftBG]=useState([0,0,0,0,0])
  
  const [bankBG,setbankBG]=useState([0,0,0])
  const [steuerBG,setsteuerBG]=useState([0,0,0,0])

  const [rentennummerBG,setrentennummerBG]=useState([0])  
  const [soziBG,setsoziBG]=useState([0,0,0,0])
  const [sonderfall,setsonderfall]=useState([0])
  const [kommunikationBG,setkommunikationBG]=useState([0,0,0])


  const [Fehlercheckindividuell,setFehlercheckindividuell]=useState(false)
  const [Fehlernummer,setFehlernummer]=useState(0)


  const [PrivateDatenArr,setPrivateDatenArr]=useState(PersoenlicheDatenObject)    
  const [mitarbeiterID,setmitarbeiterID]=useState(0)//Nach dem testen wieder auf 0 setzen
  const [image,setimage]=useState({uri: 'https://images.unsplash.com/photo-1622743941533-cde694bff56a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fE5pZ2h0Y2x1YnxlbnwwfHwwfHx8MA%3D%3D'})

  //const image={uri: 'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YnVpc25lc3N8ZW58MHx8MHx8fDA%3D'};
  //const image={uri: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fFJlc3RhdXJhbnRlfGVufDB8fDB8fHww'};
  //const image ={uri: 'https://images.unsplash.com/photo-1630395822970-acd6a691d97e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fERpc2NvfGVufDB8fDB8fHww'};
  //const image={uri: 'https://images.unsplash.com/photo-1516458464372-eea4ab222b31?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fEJhcnxlbnwwfHwwfHx8MA%3D%3D'};
  //const image={uri: 'https://images.unsplash.com/photo-1569924995012-c4c706bfcd51?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TmlnaHRjbHVifGVufDB8fDB8fHww'};
  //const image={uri: 'https://images.unsplash.com/photo-1622743941533-cde694bff56a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fE5pZ2h0Y2x1YnxlbnwwfHwwfHx8MA%3D%3D'};
  //const image={uri: 'https://images.unsplash.com/photo-1568738558403-f4e8c8f7a842?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODh8fENsdWJ8ZW58MHx8MHx8fDA%3D'};
  //const image={uri: ''};
  
  //PrivateDatenArr
  //PrivateDatenArr.Geschlecht


  const [date, setDate] = useState(new Date());
  const [dateText, setDateText] = useState("Geburtsdatum")
  const [showdatePicker,setshowdatePicker] = useState(false);
 
const handleChange = (event, selectedDate) => {  
  const currentDate = selectedDate; 
  setDate(currentDate);
  setDateText(currentDate.toLocaleDateString('de-DE'))
  let Obj=PrivateDatenArr
  Obj.GBDatum=Intl.DateTimeFormat('de-DE',{dateStyle:'short'}).format(currentDate).toString()
  setPrivateDatenArr(Obj)
  setshowdatePicker(false)
    };

  //Seite2 Integration Sozial Inhaltsspeicherung

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
  const datenabruf=async()=>{
    
    setFehlercheck(false)
    setFehlerText(false)
    setErfolgscheck(false)
    let Arr=[]
    
    let check=true 
    console.log(["ssjds",PrivateDatenArr])
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
     
console.log(PrivateDatenArr)

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


  //---------------------------------------------> Name und Anschrift Inhalstabspeicherung
  const submitdata1=async()=>{
    setFehlercheck(false)
    setFehlerText(false)
    setErfolgscheck(false)
    let Arr=[]
    console.log(PrivateDatenArr)
    let check=true
    if(!(PrivateDatenArr.BewerberStandort>0)){
            check=false
            console.log('ich binfals1')
            
    } 
    if(!(PrivateDatenArr.ArbeitsGrundlage>0)){
      check=false 
      console.log('ich binfals2')
    }
    if(!(PrivateDatenArr.Geschlecht>0)){
      check=false
      console.log('ich binfals3')
    } 
    if(!(PrivateDatenArr.Vname.trim().toString().length>1)){
      check=false;
      Arr.push(1)
      console.log('ich binfals4')
      setFehlernummer(1)
    }else{
      Arr.push(0)
    }
    if(!(PrivateDatenArr.Nname.trim().toString().length>0)){
      check=false
      console.log('ich binfals5')
      setFehlernummer(2)
      Arr.push(1)
    }else{
      Arr.push(0)
    }
    
    if(!(PrivateDatenArr.Adresse.trim().toString().length>2)){
      check=false
      console.log('ich binfals6')
      setFehlernummer(3)
      Arr.push(1)
    }else{
      Arr.push(0)
    }
    console.log(PrivateDatenArr.PCode)
    if((PrivateDatenArr.PCode==0) || (PrivateDatenArr.PCode.trim().toString().length!=5)){
      check=false
      console.log('ich binfals7')
      setFehlernummer(4)
      Arr.push(1)
    }else{
      Arr.push(0)
    }
    if(!(PrivateDatenArr.City.trim().toString().length>1)){
      check=false
      console.log('ich binfals8')
      setFehlernummer(5)
      Arr.push(1)
    }else{
      Arr.push(0)
    }
    console.log(check)
    if(check){
      setnameAnschriftBG(Arr)
      try{
        const request ={
          method: 'POST',
          headers: { 'Content-Type' : 'application/json'},
          body: JSON.stringify({
            "query":2,
            "standortSelect": PrivateDatenArr.BewerberStandort.toString().trim(),
            "geschlechtSelect":PrivateDatenArr.Geschlecht.toString().trim(),
            "vorname":PrivateDatenArr.Vname.toString().trim(),
            "nachname":PrivateDatenArr.Nname.toString().trim(),
            "straßeuzahl":PrivateDatenArr.Adresse.toString().trim(),
            "plz":PrivateDatenArr.PCode.toString().trim(),
            "wohnort":PrivateDatenArr.City.toString().trim(),
            "grundlage":PrivateDatenArr.ArbeitsGrundlage.toString().trim()

            //"username":eingabe1.toString(), teilzeit check box einbinden
          })
        };
        const d = await fetch('http://192.168.2.44/datenbankapi/index.php', request);
        let e = await d.json(); 
        console.log(d)
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
      setnameAnschriftBG(Arr)
      setFehlercheck(true)
      setFehlerText(false)
      setTimeout(()=>{
        setFehlercheck(false)
      },6000)
      setErfolgscheck(false)
    }
  }


  //------------------------------------------------> Kommunikation Inhalstabspeicherung
  const submitdata2=async()=>{
    setFehlercheck(false)
    setFehlerText(false)
    setErfolgscheck(false) 
     
    let check=true
    
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


  //-------------------------------------> Bankverbindung Inhaltsabspeicherung
  const submitdata3=async()=>{
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
    if((isValid(PrivateDatenArr.iban.trim().toString())==false)){ 
      check=false
      Arr.push(1)
    }else{
      Arr.push(0)
    }
     
    if(PrivateDatenArr.Inhaber==0){ 
      PrivateDatenArr.Inhaber=PrivateDatenArr.Vname.toString()+' '+PrivateDatenArr.Nname.toString()
    } 
    Arr.push(0)
    if(check){
      setbankBG(Arr)
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

  //--------------------------------------------------> Angaben zur Steuer
  const submitdata4=async()=>{
    setFehlercheck(false)
    setFehlerText(false)
    setErfolgscheck(false) 
    let Arr=[]
    let check=true
    
    //if(!PrivateDatenArr.SteueridCheck>0){
      //if(!isSteuerIdValid(PrivateDatenArr.SteuerID.trim())){
      //check=false
      
    //Arr.push(1)
    //}else{
      //Arr.push(0)
    //}
    //}
    

   
    if(PrivateDatenArr.Steuerklasse==0 || (Number(PrivateDatenArr.Steuerklasse)>6) || !(Number.isInteger(Number(PrivateDatenArr.Steuerklasse)))){
      check=false
      Arr.push(1)
    }else{
      Arr.push(0)
    }
    if((Number.isNaN(PrivateDatenArr.Kinder))){
      check=false
      Arr.push(1)
    }else{
      Arr.push(0)
    }
    if(!(PrivateDatenArr.Konfession.trim().toString().length>4) || PrivateDatenArr.Konfession.trim().toString().length==0){
      check=false
      Arr.push(1)
    }else{
      Arr.push(0)
    } 
    if(check){
      setsteuerBG(Arr)
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
      setsteuerBG(Arr)
      setFehlercheck(true) 
      setFehlerText(false)
      setTimeout(()=>{
        setFehlercheck(false)
      },6000)
      setErfolgscheck(false)
    }
  }
  const imglesen = async (param)=>{
    //loeschen(param)
    const data=await SecureStore.getItemAsync(param);//BGImage
    data?setimage({uri:data.toString()}):'';
  }
  useEffect(()=>{ 
    selectPruefer(0)   
    imglesen('BGImage')    
  },[])

  return (
    <SafeAreaView style={styles.sav} >
      <ImageBackground source={image} resizeMode='cover' style={styles.image}>
        
    {
      Erfolgscheck?
      <View style={styles.abgespeichert}>
        <Text style={{color:'black'}}>
          {Textdataset(sprache?'DE':'EN').Texte.Speichernerfolgreich}
        </Text></View>
      :
      ""
    } 

    {
      Fehlercheckindividuell?
      <Fehlermeldung FN={Fehlernummer}/>
      :
      ""
    }


  {
    Fehlercheck?
    <View style={styles.fehlermeldung}><Text style={{color:'#fff'}}>
      {
        FehlerText?
        Textdataset(sprache?'DE':'EN').Texte.Fehlermeldungdatenbank
        :
        Textdataset(sprache?'DE':'EN').Texte.Fehlermeldung}
      </Text></View>
    :
    ""
  }
      
      <ScrollView style={{backgroundColor: 'transparent'}}>
        
      <View style={styles.container}>      
      <View style={styles.AdminButtonContainer}>

      <TouchableOpacity  style={styles.AdminButton}> 
        <Text style={{color:'#fff'}} >Admin</Text>
      </TouchableOpacity>

        <View style={styles.SprachButton}>
        <TouchableOpacity onPress={()=>(setzesprache(!sprache), dateText=="Geburtsdatum"?setDateText("Date of birth"):setDateText("Geburtsdatum")) } style={styles.InsetSprachButton} > 
          <Text style={{color:'#FFFFFF'}} >{sprache?'EN':'DE'}</Text>
        </TouchableOpacity>
        </View>
        
        <TouchableOpacity onPress={()=>navigation.navigate({name:"SeiteTest",params:{PrivateDatenArr}})} style={styles.AdminButton}> 
          <Text style={{color:'#FFFFFF'}} >Sachbearbeiter</Text>
        </TouchableOpacity>
      </View>

  {/**           Hier Beginnt der Inhalt des  Fragebogen Containers                                                   */}

  
      
  <View style={styles.ContainerFragebogen}> 

  

  <View >
    <Blocktop/>   
    <SelectPicker S={sprache?'DE':'EN'} V={true} I={4} SV={PrivateDatenArr} SF={setPrivateDatenArr} />
    <SelectPicker S={sprache?'DE':'EN'} V={true} I={5} SV={PrivateDatenArr} SF={setPrivateDatenArr} />
    <Text style={{color:'#fff', marginHorizontal: '10%',paddingVertical:10}}>{Textdataset(sprache?'DE':'EN').Texte.Rechtsbelehrung}</Text>
  </View>
 
  <View style={{flexDirection:'column', width:'100%',paddingTop:10}}>

  
  {/**Name und Anschrift */}  
  <TitleTouch AGB={tab1ausgefuellt} F={settab1} S={tab1} T={sprache?LANG.Angabenueberschriften.Personendaten.DE:LANG.Angabenueberschriften.Personendaten.EN} />
  <SelectPicker S={sprache?'DE':'EN'} V={tab1} I={0} SV={PrivateDatenArr} SF={setPrivateDatenArr}/>
  <Container BGInfo={nameAnschriftBG} W={submitdata1} Icon={Dataset(sprache?'DE':'EN').PerData.EingabefelderIcons}  Labname={Dataset(sprache?'DE':'EN').PerData.Eingabefelder} F={settab1} S={tab1}  SV={PrivateDatenArr} SF={setPrivateDatenArr} /> 
  {
	  tab1?
    <> 
    <TouchableOpacity onPress={()=>submitdata1()} style={styles.Abspeichern}>
    <Text style={{color:'black'}}>Speichern</Text>
</TouchableOpacity>
    </>
    :
    ""
  }
 

  {/**Kommunikation */}
  <TitleTouch AGB={tab2ausgefuellt} F={settab2} S={tab2} T={sprache?LANG.Angabenueberschriften.Kommunikation.DE:LANG.Angabenueberschriften.Kommunikation.EN} /> 
  <Container BGInfo={kommunikationBG} W={submitdata2} Icon={Dataset(sprache?'DE':'EN').KontaktData.EingabefelderIcons}Labname={Dataset(sprache?'DE': 'EN').KontaktData.Eingabefelder} F={settab2} S={tab2}   SV={PrivateDatenArr} SF={setPrivateDatenArr} />
  {
	  tab2?
    <> 
    <SpeicherButton SDF={submitdata2}/>
    </>
    :
    ""
  }

  {/**Bankverbindung */}  
  <TitleTouch AGB={tab4ausgefuellt} F={settab4} S={tab4} T={sprache?LANG.Angabenueberschriften.Bank.DE:LANG.Angabenueberschriften.Bank.EN}/>  
  {
    tab4?
    <>
    <Text style={styles.Bichinweis}>{Textdataset(sprache?'DE':'EN').Texte.BicHinweis}</Text>
    
      <Container BGInfo={bankBG} W={submitdata3} Icon={Dataset(sprache?'DE':'EN').BankData.EingabefelderIcons} Labname={Dataset(sprache?'DE':'EN').BankData.Eingabefelder} F={settab4} S={tab4}  SV={PrivateDatenArr} SF={setPrivateDatenArr}/>
    
    </>
    :
    ""
  }
{
	  tab4?
    <> 
    <TouchableOpacity onPress={()=>submitdata3()} style={styles.Abspeichern}>
    <Text style={{color:'black'}}>Speichern</Text>
</TouchableOpacity>
    </>
    :
    ""
  }

  {/**Angaben zur Steuer */}
  <TitleTouch AGB={tab5ausgefuellt} F={settab5} S={tab5} T={sprache?LANG.Angabenueberschriften.Steuer.DE:LANG.Angabenueberschriften.Steuer.EN}/>
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
   <Container BGInfo={steuerBG} W={submitdata4} Icon={["Steuer"]} Labname={[sprache?"Steuer-ID (Pflichtangabe)":"Tax ID (mandatory information)"]} F={settab5} S={tab5}  SV={PrivateDatenArr} SF={setPrivateDatenArr}/>
     }  
    </>
    :
    ""
  }  
  <Container BGInfo={steuerBG} W={submitdata4} Icon={Dataset(sprache?'DE':'EN').SteuerData.EingabefelderIcons} Labname={Dataset(sprache?'DE':'EN').SteuerData.Eingabefelder} F={settab5} S={tab5}  SV={PrivateDatenArr} SF={setPrivateDatenArr}/>
  
  {
	  tab5?
    <> 
    <TouchableOpacity onPress={()=>submitdata4()} style={styles.Abspeichern}>
    <Text style={{color:'black'}}>Speichern</Text>
</TouchableOpacity>
    </>
    :
    ""
  }
  {/**Angaben zur Sozialversicherung */}
  
  <TitleTouch AGB={tab3ausgefuellt} F={settab3} S={tab3} T={sprache?LANG.Angabenueberschriften.Sozial.DE:LANG.Angabenueberschriften.Sozial.EN} />
    {
      tab3?
      <>
      <SVNummer S={SVCheck} F={setSVCheck}  SV={PrivateDatenArr} SF={setPrivateDatenArr}/>
      {
        SVCheck?
        ""
        :
        <Container BGInfo={rentennummerBG} Icon={["Krankenversicherung"]} Labname={[sprache?"Sozialversicherungsnummer/Rentennummer":"Social security number/pension number"]} F={settab3} S={tab3} SV={PrivateDatenArr} SF={setPrivateDatenArr}/> 
      }
      </>
      :
      ""
    }  
  
  <Container BGInfo={soziBG} W={datenabruf} Icon={Dataset(sprache?'DE':'EN').SozialData.EingabefelderIcons} Labname={Dataset(sprache?'DE':'EN').SozialData.Eingabefelder} F={settab3} S={tab3} SV={PrivateDatenArr} SF={setPrivateDatenArr}/>
  {
    tab3?
  <>

    <TouchableOpacity style={styles.StyledInputLabel} onPress={()=>setshowdatePicker(true)}>
    <Text style={{color:"white",alignSelf:'center'}}>{dateText}</Text>
      </TouchableOpacity>
      {showdatePicker?
      <DateTimePicker
            display={"default"}
            value={date}
            mode={'date'}
            is24Hour={true}
            onChange={handleChange}
          />
        :
        ""}
          
    
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
    <TouchableOpacity onPress={()=>datenabruf()} style={styles.Abspeichern}>
    <Text style={{color:'black'}}>Speichern</Text>
</TouchableOpacity>
    </>
    :
    ""
  }
  
  
  </View>


  </View>
      </View>
      </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  StyledInputLabel : {
    color: '#FFF',
    fontSize:16,
    
    textAlign:'left',
    padding: 10,
    
    paddingHorizontal:15,
    borderWidth:2,
    width:'80%',
    alignSelf:'center',
    borderColor: '#475569',
    borderRadius:6,
    marginVertical:30,
    color:'#f8fafc',
    backgroundColor:'#6b728090'

  },
  image:{
    flex: 1,
    justifyContent: 'center',
    
       
    zIndex: 50,
  },
  sav:{
    backfaceVisibility:'hidden',
    flex: 1,
    flexDirection:'column',
    position:'absolute',
    width:'100%',
    height:'100%',
    justifyContent: 'flex-start',},

    container: {    
      flexGrow:1,
      flexDirection:'column',
      flex: 1,
      
      width:'100%',   
      height:'100%',  
      alignItems: 'center',
      justifyContent:'flex-start',
    },
    
    AdminButtonContainer:{
      width:'100%', 
      padding:15, 
      flexDirection:'row', 
    },
    BackButton:{
      alignItems: 'center',
      backgroundColor: '#1d4ed8',
      padding: 10,
      flex:1,
      flexDirection:'row',
      alignSelf:'flex-end',
      height:'auto',
      marginTop:20, 
      borderRadius:5,
      borderTopColor:'#1e3a8a',
      borderTopWidth:2,
      marginRight:5,
      borderBottomColor:'#1e3a8a',
      borderBottomWidth:2,
      width:'15%', 
    },
    InsetSprachButton:{
      alignItems: 'center',
      backgroundColor: '#6b7280',
      padding: 10,
      alignSelf:'center',  
      borderRadius:5, 
      width:'20%', 
    },
    SprachButton:{
      alignItems: 'center',  
      flex:1,    
      borderRadius:5,  
    },
    AdminButton:{
      alignItems: 'center',
      backgroundColor: '#1d4ed8',
      padding: 10,
      height:'auto',
      flex:1,
      alignSelf:'flex-end',
      marginTop:20,
      borderRadius:5,
      borderTopColor:'#1e3a8a',
      borderTopWidth:2,
      marginLeft:5,
      borderBottomColor:'#1e3a8a',
      borderBottomWidth:2,
      width:'25%', 
    },
    Titel:{
      fontSize:35,
      marginTop:20,
      textShadowColor:'#000',
      textShadowRadius:5,
      textShadowOffset:{width:3,height:3},
      color:'#FFF',
    },
    ContainerFragebogen:{
      width:'90%', 
      backgroundColor: '#00000099',  
      paddingHorizontal:20,
      borderRadius:20, 
      marginVertical:20,
      borderColor:'#64748b',
      borderWidth:1,
      marginTop:50,
      alignSelf:'center',
      paddingVertical:60,
    },
    Textelemente:{
      color:'#fff',
      marginHorizontal: '10%',
      paddingVertical:5
    },
    Bichinweis:{
      color:'#fff',
      marginHorizontal: '10%',
      paddingBottom: 5,
      fontSize: 10,
    },
    Abspeichern:{
      alignSelf: 'flex-end',
      alignItems: 'center',
      backgroundColor: '#166534',
      padding: 10,
      height:'auto',    
      borderRadius:5,
      borderTopColor:'#1e3a8a',
      borderTopWidth:2,
      borderBottomColor:'#1e3a8a',
      borderBottomWidth:2,
      width:'25%',
      marginHorizontal: '10%',      
      marginVertical: 30,      
    },
    fehlermeldung:{padding: 10,
    paddingHorizontal:15,
    borderWidth:1,
    width:'80%',
    alignSelf:'center',
    borderColor: '#9d174d',
    borderRadius:6,
    marginTop: 20,
    marginVertical:15,
    flexDirection: 'column',
    alignItems: 'flex-start',
    backgroundColor: '#db2777',
  },
  abgespeichert:{
    padding: 10,
    paddingHorizontal:15,
    borderWidth:1,
    width:'80%',
    alignSelf:'center',
    borderColor: '#65a30d',
    borderRadius:6,
    marginTop: 20,
    marginVertical:15,
    flexDirection: 'column',
    alignItems: 'flex-start',
    backgroundColor: '#84cc16',

  },

});
