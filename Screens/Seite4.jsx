import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput,Button, SafeAreaView, TouchableOpacity,ImageBackground } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import LANG from './../lang/lang';
import Blocktop from './component/seite1comp/blocktop'; 
import { TransactionContext } from '../utils/Context'; 
import {Octicons, Ionicons} from '@expo/vector-icons';
import Container from './fragebogencomps/containercomp/Container';
import TitleTouch from './fragebogencomps/touchTitle/TitleTouch';
import { Minijobtextdataset } from '../Components/Minijobinhaltsvorlagen/Minijobtextdataset';
import {MiniDataset } from './../Components/Minijobinhaltsvorlagen/Minijobeingabedataset';
import { Textdataset } from '../utils/Textdataset';
import SelectPicker from './fragebogencomps/selectBoxencomp/PickerSelectBox'; 
import SteuerEinwillligung from './fragebogencomps/MinijobCheckboxen/MiniSteuercheck';
import { ScrollView } from 'react-native-gesture-handler';
import MiniPersoenlicheDatenObject from '../utils/Objects/MiniPersoenlicheDatenObject'; 
import {isValid} from 'iban'
import { isSteuerIdValid } from 'validate-steuerid'
import * as SecureStore from 'expo-secure-store';
import {Picker} from '@react-native-picker/picker';
import Privatcheck from './fragebogencomps/MinijobCheckboxen/MiniPrivatCheck';
import { EingabeFeld } from './fragebogencomps/textFeldcomp/EingabeFeld';
import Zahlungsart from './fragebogencomps/selectBoxencomp/Checkbox';
import JaNeinCheckbox from './fragebogencomps/MinijobCheckboxen/MiniJaNeinCheck';
import JaNeinCheckbox1 from './fragebogencomps/MinijobCheckboxen/MiniJaNeinCheck1';
import JaNeinCheckbox2 from './fragebogencomps/MinijobCheckboxen/MiniJaNeinCheck2';



export default function Seite2({navigation}) {
  const [sprache,setzesprache]=useContext(TransactionContext)  
  const [tab1,settab1]=useState(false)
  const [tab1ausgefuellt,settab1ausgefuellt]=useState(false)  
  const [tab2,settab2]=useState(false)
  const [tab2ausgefuellt,settab2ausgefuellt]=useState(false)  
  const [Barcheck,setBarcheck]=useState(false)
  const [tab3,settab3]=useState(false)
  const [tab3ausgefuellt,settab3ausgefuellt]=useState(false)
  const [Steuercheck,setSteuercheck]=useState(false) 
  const [JobCheck,setJobCheck]=useState(false)
  const [JaNeinCheck,setJaNeinCheck]=useState(false)//flase für verstecken
  const [Versicherungscheck,setVersicherungscheck]=useState(false) 
  const [SelectedLanguage, setSelectedLanguage] = useState()
  const [tab4,settab4]=useState(false)
  const [tab4ausgefuellt,settab4ausgefuellt]=useState(false)
  const [tab5,settab5]=useState(false)
  const [tab5ausgefuellt,settab5ausgefuellt]=useState(false)
  const [tab6,settab6]=useState(false)
  const [tab6ausgefuellt,settab6ausgefuellt]=useState(false)
  const [tab7,settab7]=useState(false)
  const [tab7ausgefuellt,settab7ausgefuellt]=useState(false)
  const [tab8,settab8]=useState(false)
  const [tab8ausgefuellt,settab8ausgefuellt]=useState(false)
  const [Fehlercheck,setFehlercheck]=useState(false)
  const [FehlerText,setFehlerText]=useState(false)
  const [Erfolgscheck,setErfolgscheck]=useState(false)
  const [PrivateDatenArr,setPrivateDatenArr]=useState(MiniPersoenlicheDatenObject)    
  const [mitarbeiterID,setmitarbeiterID]=useState(0)//Nach dem testen wieder auf 0 setzen
  const [image,setimage]=useState({uri: 'https://images.unsplash.com/photo-1622743941533-cde694bff56a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fE5pZ2h0Y2x1YnxlbnwwfHwwfHx8MA%3D%3D'})

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
    let check=true 
    
    
      if(!PrivateDatenArr.SVNummerfeld==12){
      check=false
    }
      
    
    if(!PrivateDatenArr.Staatsbuergerschaft.trim().toString().length>0){
      check=false
    }
    if(!PrivateDatenArr.GBDatum.trim().toString().length>0){
      check=false
    }
    if(!PrivateDatenArr.GBOrt.trim().toString().length>0){
      check=false
    }
    if(PrivateDatenArr.GBLand==0){
      PrivateDatenArr.GBLand='Deutschland'
      
    }
    if(!PrivateDatenArr.Kassename.trim().toString().length>0){
      check=false
    } 
    if(!PrivateDatenArr.KVArt>0){
      check=false
    }

    if(PrivateDatenArr.KVArt==4){
      if(!PrivateDatenArr.AndereArbeitgeber.trim().toString().length>4){
      check=false
    } 
    }
     
console.log(PrivateDatenArr)
    if(check){
      try{
        const request ={
          method: 'POST',
          headers: { 'Content-Type' : 'application/json'},
          body: JSON.stringify({
            "query":11,
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
        const d = await fetch('http://192.168.2.154/datenbankapi/index.php', request);
        let e = await d.json();
        console.log(e)
        if(e.ergebnis==true){
          setErfolgscheck(true)  
          setTimeout(()=>{
            setErfolgscheck(false)
          },4000)
          settab3ausgefuellt(true)
          settab3(false)
          console.log('speichertestyeah')
        }
        else if(e.ergebnis=='DBerror'){//zeigt Datenbankfehler an keine speicherung
          setFehlercheck(true)
          setFehlerText(true)
          setTimeout(()=>{
            setFehlercheck(false)
          },4000)
          console.log('no Update')
        }else{//Fehler bei der Eingabe füllen
          setFehlercheck(true)
          setFehlerText(false)
          setTimeout(()=>{
            setFehlercheck(false)
          },4000)
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
      },4000)
      setErfolgscheck(false)
    }
  }


  //---------------------------------------------> Name und Anschrift Inhalstabspeicherung
  const submitdata1=async()=>{
    setFehlercheck(false)
    setFehlerText(false)
    setErfolgscheck(false)
    
    console.log(PrivateDatenArr)
    let check=true
    if(!(PrivateDatenArr.BewerberStandort>0)){
            check=false
            console.log('ich binfals1')
    } 
    
    if(!(PrivateDatenArr.Geschlecht>0)){
      check=false
      console.log('ich binfals3')
    } 
    if(!(PrivateDatenArr.Vname.trim().toString().length>2)){
      check=false
      console.log('ich binfals4')
    }
    if(!(PrivateDatenArr.Nname.trim().toString().length>2)){
      check=false
      console.log('ich binfals5')
    }
    
    if(!(PrivateDatenArr.Adresse.trim().toString().length>2)){
      check=false
      console.log('ich binfals6')
    }
    if(!(PrivateDatenArr.PCode.trim().toString().length==5)){
      check=false
      console.log('ich binfals7')
    }
    if(!(PrivateDatenArr.City.trim().toString().length>2)){
      check=false
      console.log('ich binfals8')
    }

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
          },4000)
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
          },4000)
          console.log('no Update')
        }else{//Fehler bei der Eingabe füllen
          setFehlercheck(true)
          setFehlerText(false)
          setTimeout(()=>{
            setFehlercheck(false)
          },4000)
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
      },4000)
      setErfolgscheck(false)
    }
  }


  //------------------------------------------------> Kommunikation Inhalstabspeicherung
  const submitdata2=async()=>{
    setFehlercheck(false)
    setFehlerText(false)
    setErfolgscheck(false)  
    let check=true
    if(!PrivateDatenArr.Festnetz.trim().toString().length>2){
      check=false
    }
    
    if(!PrivateDatenArr.Mobil.trim().toString().length>2){
      check=false
    }
    if(!PrivateDatenArr.Email.trim().toString().length>2){
      check=false
    }
     console.log(mitarbeiterID)
    if(check){
      try{
        const request ={
          method: 'POST',
          headers: { 'Content-Type' : 'application/json'},
          body: JSON.stringify({
            "query":8,
            "festnetz":PrivateDatenArr.Festnetz.toString().trim(),
            "mobil":PrivateDatenArr.Mobil.toString().trim(),
            "emailbw":PrivateDatenArr.Email.toString().trim(),
            "mitarbeiterID":mitarbeiterID //für test ID Festlegen
            
          })
        }; 
        const d = await fetch('http://192.168.2.154/datenbankapi/index.php', request);
        let e = await d.json();
        
        if(e.ergebnis==true){
  
          setErfolgscheck(true) 
          setTimeout(()=>{
            setErfolgscheck(false)
          },4000)
          settab2(false)
          settab2ausgefuellt(true)
        }
        else if(e.ergebnis=='DBerror'){//zeigt Datenbankfehler an keine speicherung
          console.log('no Update')
          setFehlercheck(true)
          setFehlerText(true)
          setTimeout(()=>{
            setFehlercheck(false)
          },4000)
        }else{//Fehler bei der Eingabe füllen
          setFehlercheck(true)
          setFehlerText(false)
          setTimeout(()=>{
            setFehlercheck(false)
          },4000)
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
      },4000)
      setErfolgscheck(false)
    }
  }


  //-------------------------------------> Bankverbindung Inhaltsabspeicherung
  const submitdata3=async()=>{
    setFehlercheck(false)
    setFehlerText(false)
    setErfolgscheck(false) 
    let check=true 

    if(!PrivateDatenArr.Barzahlung>0){
    if(!PrivateDatenArr.Bankname.trim().toString().length>2){ 
      check=false
    }
    if((isValid(PrivateDatenArr.iban.trim().toString())==false)){ 
      check=false
    }
     }
     
    if(check){
      try{
        const request ={
          method: 'POST',
          headers: { 'Content-Type' : 'application/json'},
          body: JSON.stringify({
            "query":9,
            "bargeldcheck":PrivateDatenArr.Barzahlung.toString().trim(),
            "bankname":PrivateDatenArr.Bankname.toString().trim(),
            "iban":PrivateDatenArr.iban.toString().trim(), 
            
            "mitarbeiterID":mitarbeiterID 
          })
        };
        const d = await fetch('http://192.168.2.154/datenbankapi/index.php', request);
        let e = await d.json(); 
        if(e.ergebnis==true){
  
          setErfolgscheck(true)
          setTimeout(()=>{
            setErfolgscheck(false)
          },4000)
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
          },4000)
        }else{//Fehler bei der Eingabe füllen
          setFehlercheck(true)
          setFehlerText(false)
          setTimeout(()=>{
            setFehlercheck(false)
          },4000)
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
      },4000)
      setErfolgscheck(false)
      
    }
  }

  //--------------------------------------------------> Angaben zur Steuer
  const submitdata4=async()=>{
    setFehlercheck(false)
    setFehlerText(false)
    setErfolgscheck(false) 
    let check=true
    
    
      //if(!isSteuerIdValid(PrivateDatenArr.SteuerID.trim())){
      //check=false
      
    //}
    
    
    
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
        const d = await fetch('http://192.168.2.154/datenbankapi/index.php', request);
        let e = await d.json(); 
        
        if(e.ergebnis==true){
  
          setErfolgscheck(true)
          setTimeout(()=>{
            setErfolgscheck(false)
          },4000)
          settab5(false)
          settab5ausgefuellt(true)
          console.log('speichertestyeah')
        }
        else if(e.ergebnis=='DBerror'){//zeigt Datenbankfehler an keine speicherung 
          setFehlercheck(true)
          setFehlerText(true)
          setTimeout(()=>{
            setFehlercheck(false)
          },4000)
        }else{//Fehler bei der Eingabe füllen
          setFehlercheck(true)
          setFehlerText(false)
          setTimeout(()=>{
            setFehlercheck(false)
          },4000)
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
      },4000)
      setErfolgscheck(false)
    }
  }

  //-----------------------------> Angaben Beginn Beschäftigung
  const submitdata6=async()=>{
    setFehlercheck(false)
    setFehlerText(false)
    setErfolgscheck(false) 
    let check=true
    if(PrivateDatenArr.StatusCheck==4){
      if(!PrivateDatenArr.Eintragsonstige.trim().toString().length>2){
      check=false}
    }
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
        const d = await fetch('http://192.168.2.154/datenbankapi/index.php', request);
        let e = await d.json();
        if(e.ergebnis==true){
          setErfolgscheck(true)
          setTimeout(()=>{
            setErfolgscheck(false)
          },4000)
          settab6(false)
          settab6ausgefuellt(true)  
          console.log('speichertestyeah')
        }
        else if(e.ergebnis=='DBerror'){//zeigt Datenbankfehler an keine speicherung
          setFehlercheck(true)
          setFehlerText(true)
          setTimeout(()=>{
            setFehlercheck(false)
          },4000)
          console.log('no Update')
        }else{//Fehler bei der Eingabe füllen
          
          setFehlercheck(true)
          setFehlerText(false)
          setTimeout(()=>{
            setFehlercheck(false)
          },4000)
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
      },4000)
      setErfolgscheck(false)
    }
  }

  //-----------------------------> Angaben weitere Beschäftigungen
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
            
            //"":,
            //"":,
            //"":,

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
          },4000)
          settab7(false)
          settab7ausgefuellt(true)  
          console.log('speichertestyeah')
        }
        else if(e.ergebnis=='DBerror'){//zeigt Datenbankfehler an keine speicherung
          setFehlercheck(true)
          setFehlerText(true)
          setTimeout(()=>{
            setFehlercheck(false)
          },4000)
          console.log('no Update')
        }else{//Fehler bei der Eingabe füllen
          
          setFehlercheck(true)
          setFehlerText(false)
          setTimeout(()=>{
            setFehlercheck(false)
          },4000)
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
      },4000)
      setErfolgscheck(false)
    }
  }
//-----------------------------> Krankenversicherung
  const submitdata8=async()=>{
    setFehlercheck(false)
    setFehlerText(false)
    setErfolgscheck(false) 
    let check=true
    if(!PrivateDatenArr.Kassename.trim().toString.length>2){
      check=false
    }
if(check){
      try{
        const request ={
          method: 'POST',
          headers: { 'Content-Type' : 'application/json'},
          body: JSON.stringify({
            "query": 14,
            "kassename":PrivateDatenArr.Kassename.toString().trim(),
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
          },4000)
          settab8(false)
          settab8ausgefuellt(true)  
          console.log('speichertestyeah')
        }
        else if(e.ergebnis=='DBerror'){//zeigt Datenbankfehler an keine speicherung
          setFehlercheck(true)
          setFehlerText(true)
          setTimeout(()=>{
            setFehlercheck(false)
          },4000)
          console.log('no Update')
        }else{//Fehler bei der Eingabe füllen
          
          setFehlercheck(true)
          setFehlerText(false)
          setTimeout(()=>{
            setFehlercheck(false)
          },4000)
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
      },4000)
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
    <SafeAreaView style={styles.sav} backgroundColor={'#335155'}>
      <ImageBackground source={image} resizeMode='cover' style={styles.image}>
      <ScrollView style={{backgroundColor: 'transparent'}}>
      <View style={styles.container}>
      <View style={styles.AdminButtonContainer}>
        <TouchableOpacity onPress={()=>navigation.pop()} style={styles.BackButton}> 
        <Ionicons  name={'arrow-back'} color={'#FFFFFF'} style={{marginRight:8}}/>
          <Text  style={{color:'#FFFFFF'} } >Back</Text>
        </TouchableOpacity>
        <View style={styles.SprachButton}>
        <TouchableOpacity onPress={()=>setzesprache(!sprache)} style={styles.InsetSprachButton} > 
          <Text style={{color:'#FFFFFF'}} >{sprache?'EN':'DE'}</Text>
        </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={()=>navigation.navigate("Seite5")} style={styles.AdminButton}> 
          <Text style={{color:'#FFFFFF'}} >Next</Text>
        </TouchableOpacity>
      </View>


      {/**Angabensozialversicherung*/}
      <View style={styles.ContainerFragebogen}>
      <View >
      <Text style={styles.Titel}  >{sprache?LANG.MinijobBogenUeberschriften.TitelOben.DE:LANG.MinijobBogenUeberschriften.TitelOben.EN}
  </Text>
  <Text style={styles.Titel2}  >{sprache?LANG.MinijobBogenUeberschriften.TitelUnten.DE:LANG.MinijobBogenUeberschriften.TitelUnten.EN}
  </Text>
    
    <SelectPicker S={sprache?'DE':'EN'} V={true} I={5} SV={PrivateDatenArr} SF={setPrivateDatenArr} />
    <Text style={{color:'#fff', marginHorizontal: '10%',paddingVertical:10}}>{Minijobtextdataset(sprache?'DE':'EN').Texte.Rechtsbelehrung}</Text>
  </View>
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
  <View style={{flexDirection:'column', width:'100%',paddingTop:10}}>


  {/**Name und Anschrift */}  
  <TitleTouch AGB={tab1ausgefuellt} F={settab1} S={tab1} T={sprache?LANG.MinijobBogenUeberschriften.Personendaten.DE:LANG.MinijobBogenUeberschriften.Personendaten.EN} />
  <SelectPicker S={sprache?'DE':'EN'} V={tab1} I={0} SV={PrivateDatenArr} SF={setPrivateDatenArr}/>
  <Container W={submitdata1} Icon={MiniDataset(sprache?'DE':'EN').PerData.EingabefelderIcons} Labname={MiniDataset(sprache?'DE':'EN').PerData.Eingabefelder} F={settab1} S={tab1}  SV={PrivateDatenArr} SF={setPrivateDatenArr} /> 
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
  <TitleTouch AGB={tab2ausgefuellt} F={settab2} S={tab2} T={sprache?LANG.MinijobBogenUeberschriften.Kommunikation.DE:LANG.MinijobBogenUeberschriften.Kommunikation.EN} /> 
  <Container W={submitdata2} Icon={MiniDataset(sprache?'DE':'EN').KontaktData.EingabefelderIcons}Labname={MiniDataset(sprache?'DE': 'EN').KontaktData.Eingabefelder} F={settab2} S={tab2}   SV={PrivateDatenArr} SF={setPrivateDatenArr} />
  {
	  tab2?
    <> 
    <TouchableOpacity onPress={()=>submitdata2()} style={styles.Abspeichern}>
    <Text style={{color:'black'}}>Speichern</Text>
</TouchableOpacity>
    </>
    :
    ""
  }

  {/**Bankverbindung */}  
  <TitleTouch AGB={tab4ausgefuellt} F={settab4} S={tab4} T={sprache?LANG.MinijobBogenUeberschriften.Bank.DE:LANG.MinijobBogenUeberschriften.Bank.EN}/>  
  {
    tab4?
    <>
    
    <Text style={styles.Bichinweis}>{Textdataset(sprache?'DE':'EN').Texte.BicHinweis}</Text>
    <Zahlungsart S={Barcheck} F={setBarcheck}  SV={PrivateDatenArr} SF={setPrivateDatenArr}/>
      

      {
      Barcheck?
      ""
      :
      <Container W={submitdata3} Icon={MiniDataset(sprache?'DE':'EN').BankData.EingabefelderIcons} Labname={MiniDataset(sprache?'DE':'EN').BankData.Eingabefelder} F={settab4} S={tab4}  SV={PrivateDatenArr} SF={setPrivateDatenArr}/>
    
    } 
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
  <TitleTouch AGB={tab5ausgefuellt} F={settab5} S={tab5} T={sprache?LANG.MinijobBogenUeberschriften.Steuer.DE:LANG.MinijobBogenUeberschriften.Steuer.EN}/>
    
  <Container W={submitdata4} Icon={MiniDataset(sprache?'DE':'EN').SteuerData.EingabefelderIcons} Labname={MiniDataset(sprache?'DE':'EN').SteuerData.Eingabefelder} F={settab5} S={tab5}  SV={PrivateDatenArr} SF={setPrivateDatenArr}/>
  
  {
	  tab5?
    <> 
    <SteuerEinwillligung S={Steuercheck} F={setSteuercheck}  SV={PrivateDatenArr} SF={setPrivateDatenArr}/>
    <TouchableOpacity onPress={()=>submitdata4()} style={styles.Abspeichern}>
    <Text style={{color:'black'}}>Speichern</Text>
</TouchableOpacity>
    </>
    :
    ""
  }
  {/**Angaben zur Sozialversicherung */}
  
  <TitleTouch AGB={tab3ausgefuellt} F={settab3} S={tab3} T={sprache?LANG.MinijobBogenUeberschriften.Sozial.DE:LANG.MinijobBogenUeberschriften.Sozial.EN} />
    
  
  <Container Icon={MiniDataset(sprache?'DE':'EN').SozialData.EingabefelderIcons} Labname={MiniDataset(sprache?'DE':'EN').SozialData.Eingabefelder} F={settab3} S={tab3} SV={PrivateDatenArr} SF={setPrivateDatenArr}/>
   
   
 
   


    

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
        
        {/**Status zu Beginn der Beschäftigung */}
  <TitleTouch AGB={tab6ausgefuellt} F={settab6} S={tab6} T={sprache?LANG.MinijobBogenUeberschriften.Arbeitsverhältnis.DE:LANG.MinijobBogenUeberschriften.Arbeitsverhältnis.EN}/>
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
      <EingabeFeld Icon={"Krankenversicherung"}   SV={PrivateDatenArr} SF={setPrivateDatenArr}/>
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
    <TouchableOpacity onPress={()=>submitdata6()} style={styles.Abspeichern}>
    <Text style={{color:'black'}}>Speichern</Text>
</TouchableOpacity>
    </>
    :
    ""
  }

  {/**Angaben zu weiteren Beschäftigungen */}
  <TitleTouch AGB={tab7ausgefuellt} F={settab7} S={tab7} T={sprache?LANG.MinijobBogenUeberschriften.OtherJobs.DE:LANG.MinijobBogenUeberschriften.OtherJobs.EN}/>
  


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


    <TouchableOpacity onPress={()=>submitdata7()} style={styles.Abspeichern}>
    <Text style={{color:'black'}}>Speichern</Text>
</TouchableOpacity>
    </>
    :
    ""
  }

  {/**Krankenversicherung */}
  <TitleTouch AGB={tab8ausgefuellt} F={settab8} S={tab8} T={sprache?LANG.MinijobBogenUeberschriften.Krankenversicherung.DE:LANG.MinijobBogenUeberschriften.Krankenversicherung.EN}/>
  

  <Container W={submitdata4} Icon={MiniDataset(sprache?'DE':'EN').KrankenData.EingabefelderIcons} Labname={MiniDataset(sprache?'DE':'EN').KrankenData.Eingabefelder} F={settab8} S={tab8}  SV={PrivateDatenArr} SF={setPrivateDatenArr}/>
  
  {
	  tab8?
    <>
    <Privatcheck S={Versicherungscheck} F={setVersicherungscheck}  SV={PrivateDatenArr} SF={setPrivateDatenArr}/> 
    <TouchableOpacity onPress={()=>submitdata8()} style={styles.Abspeichern}>
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
      fontSize:25,
      marginTop:10,
      textShadowColor:'#000',
      textShadowRadius:5,
      textShadowOffset:{width:3,height:3},
      color:'#FFF',
      marginHorizontal: '10%',
    },
    Titel2:{
      fontSize:20,
      marginTop:10,
      textShadowColor:'#000',
      textShadowRadius:5,
      textShadowOffset:{width:3,height:3},
      color:'#FFF',
      marginHorizontal: '10%',
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
    marginVertical:15,
    flexDirection: 'column',
    alignItems: 'flex-start',
    backgroundColor: '#84cc16',

  },

});