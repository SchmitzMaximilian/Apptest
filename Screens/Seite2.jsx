import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput,Button, SafeAreaView, TouchableOpacity ,ImageBackground} from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import LANG from './../lang/lang'; 
import { TransactionContext } from '../utils/Context'; 
import {Octicons, Ionicons} from '@expo/vector-icons';
import Container from './fragebogencomps/containercomp/Container';
import TitleTouch from './fragebogencomps/touchTitle/TitleTouch';
import { Dataset } from '../utils/Dataset'; 
import SelectPicker from './fragebogencomps/selectBoxencomp/PickerSelectBox';
import SVNummer from './fragebogencomps/selectBoxencomp/SozialCheckbox';
import { ScrollView } from 'react-native-gesture-handler';
import PersoenlicheDatenObject from '../utils/Objects/PersoenlicheDatenObject';
import { EingabeFeld } from './fragebogencomps/textFeldcomp/EingabeFeld';
import { Textdataset } from '../utils/Textdataset';
import {Picker} from '@react-native-picker/picker';
import { Checkboxdataset } from '../utils/Checkboxdataset';

export default function Seite2({route, navigation}) {
  console.log()
  const [sprache,setzesprache]=useContext(TransactionContext)
  const [tab3,settab3]=useState(true)
  const [SVCheck,setSVCheck]=useState(false)
  const [PrivateDatenArr,setPrivateDatenArr]=useState(route.params.PrivateDatenArr)
  const [JobCheck,setJobCheck]=useState(false)
  const [Fehlercheck,setFehlercheck]=useState(false)
  const [FehlerText,setFehlerText]=useState(false)
  const [Erfolgscheck,setErfolgscheck]=useState(false)
  const [SelectedLanguage, setSelectedLanguage] = useState(); 
  const [mitarbeiterID,setmitarbeiterID]=useState(route.params.PrivateDatenArr.MitarbeiterID)

  const image={uri: 'https://images.unsplash.com/photo-1622743941533-cde694bff56a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fE5pZ2h0Y2x1YnxlbnwwfHwwfHx8MA%3D%3D'};
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
    console.log(["ssjds",PrivateDatenArr])
    if(!PrivateDatenArr.RentenCheck>0){
      if(PrivateDatenArr.SVNummerfeld==0){
      check=false
    }
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
        const d = await fetch('http://192.168.2.154/datenbankapi/index.php', request);
        let e = await d.json();
        console.log(e)
        if(e.ergebnis==true){
          setErfolgscheck(true)  
          setTimeout(()=>{
            setErfolgscheck(false)
          },4000)
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
  useEffect(()=>{ 
    selectPruefer(0)
  },[])
  return (
    <SafeAreaView style={styles.sav} >
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
        <TouchableOpacity   style={styles.AdminButton}> 
          <Text style={{color:'#FFFFFF'}} >Submit</Text>
        </TouchableOpacity>
      </View>


    {/**Angabensozialversicherung*/}
    <View style={styles.ContainerFragebogen}>

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
    <TitleTouch  F={settab3} S={tab3} T={sprache?LANG.Angabenueberschriften.Sozial.DE:LANG.Angabenueberschriften.Sozial.EN} />
    {
      tab3?
      <>
      <SVNummer S={SVCheck} F={setSVCheck}  SV={PrivateDatenArr} SF={setPrivateDatenArr}/>
      {
        SVCheck?
        ""
        :
        <Container Icon={["Krankenversicherung"]} Labname={[sprache?"Sozialversicherungsnummer/Rentennummer":"Social security number/pension number"]} F={settab3} S={tab3} SV={PrivateDatenArr} SF={setPrivateDatenArr}/> 
      }
      </>
      :
      ""
    }  
  
  <Container Icon={Dataset(sprache?'DE':'EN').SozialData.EingabefelderIcons} Labname={Dataset(sprache?'DE':'EN').SozialData.Eingabefelder} F={settab3} S={tab3} SV={PrivateDatenArr} SF={setPrivateDatenArr}/>
  {
    tab3?
  <>
    <Text  style={styles.TextElemente}>{(sprache?'Art der Krankenversicherung (Pflichtangabe, zutreffendes makieren)':'Type of health insurance (mandatory information, mark as applicable)')}</Text>
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
      <EingabeFeld Icon={"Krankenversicherung"} Labname={Textdataset(sprache?'DE':'EN').SoloCheckboxText.OtherJobs}  SV={PrivateDatenArr} SF={setPrivateDatenArr}/>
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
    flex: 1,
    flexDirection:'column',
    
    width:'100%',
    height:'100%',
    justifyContent: 'flex-start',},
    container: {    
      
      width:'100%',   
      height:'100%',  
      alignItems: 'center',
      justifyContent:'flex-start',
    },
    TextElemente:{
      color:'#fff',
      paddingHorizontal:80,
      marginVertical:5,
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
      paddingVertical:15,
    },
    Textelemente:{
      color:'#fff'
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