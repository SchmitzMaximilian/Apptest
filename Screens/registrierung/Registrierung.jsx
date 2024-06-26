import React, { useEffect, useState, useContext } from "react";
import * as SecureStore from 'expo-secure-store';
import { StyleSheet, Text, View, TextInput,Button, SafeAreaView, TouchableOpacity,ImageBackground } from 'react-native';
import { EingabeFeld } from "./regcomps/Comps";
import { BorderRadiuses } from "react-native-ui-lib/src/style/borderRadiuses";
import { ScrollView } from "react-native-gesture-handler";
import Emailfeld from "./regcomps/Emailfeld";
import { TransactionContext } from './../../utils/Context'; 
import { Textdataset } from "../../utils/Textdataset";
import AdminObject from "../../utils/Objects/AdminObject";
import { sha256 } from "node-forge";
import {Picker} from '@react-native-picker/picker';


//import { Restart } from "fiction-expo-restart";
/**
 
Username
Password
Betrieb
Adresse Betrieb
Mehrfach Eingabe maximal 3 E-mail

Speicher button

hot reload  

 */

const Registrierung =({navigation})=>{
  const [sprache,setzesprache]=useContext(TransactionContext)
  const [SecObj,setSecObj]=useState({"Benutzername":"","PasswordSha256":"","Firma":"","Adresse":"","Mail":"","Mail2":"","Mail3":""})
  const [eingabe1,seteingabe1]=useState('')
  const [eingabe2,seteingabe2]=useState('')
  const [eingabe3,seteingabe3]=useState('')
  const [eingabe4,seteingabe4]=useState('')
  const [eingabe5,seteingabe5]=useState('')
  const [eingabe6,seteingabe6]=useState('')
  const [eingabe7,seteingabe7]=useState('')
  const [Fehlercheck,setFehlercheck]=useState(false)
  const [FehlerText,setFehlerText]=useState(false)
  const [Erfolgscheck,setErfolgscheck]=useState(false)
  const [imageWiedergabe,setimageWiedergabe]=useState({uri: 'https://images.unsplash.com/photo-1630395822970-acd6a691d97e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fERpc2NvfGVufDB8fDB8fHww'})

  
  
    const image=imageWiedergabe  
  //const image={uri: 'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YnVpc25lc3N8ZW58MHx8MHx8fDA%3D'};
  //const image={uri: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fFJlc3RhdXJhbnRlfGVufDB8fDB8fHww'};
  //const image ={uri: 'https://images.unsplash.com/photo-1630395822970-acd6a691d97e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fERpc2NvfGVufDB8fDB8fHww'};
  //const image={uri: 'https://images.unsplash.com/photo-1516458464372-eea4ab222b31?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fEJhcnxlbnwwfHwwfHx8MA%3D%3D'};
  //const image={uri: 'https://images.unsplash.com/photo-1569924995012-c4c706bfcd51?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TmlnaHRjbHVifGVufDB8fDB8fHww'};
  //const image={uri: 'https://images.unsplash.com/photo-1622743941533-cde694bff56a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fE5pZ2h0Y2x1YnxlbnwwfHwwfHx8MA%3D%3D'};
  
  //const image={uri: ''};
  const speichernimage = async (key,param)=>{
    if(await SecureStore.setItemAsync(key, param)){
      return true;
    }else{
      return false;
    }
  }

   const submitdata=async()=>{
    let check=true
    setFehlercheck(false)
    setFehlerText(false)
    setErfolgscheck(false) 
    

    if(!eingabe1.trim().length>2){
      check=false

    }
    
    if(!eingabe2.trim().length>7){
      check=false

    } 
    if(!eingabe3.trim().length>2){
      check=false

    }
    
    if(!eingabe4.trim().length>2){
      check=false

    }
    if(!eingabe5.trim().length>10){
      check=false

    } 
    let mail2=eingabe6,
        mail3=eingabe7
    
    if(check){
      try{ 
        const request = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "query":1,
                "username":eingabe1.toString().toLowerCase(),
                "passwort":sha256.create().update(eingabe2.toString().toLowerCase()).digest().toHex(),
                "firma"   :eingabe3.toString(),
                "adresse" :eingabe4.toString(),
                "email1"  :eingabe5.toString(),
                "email2"  :eingabe6.toString(),
                "email3"  :eingabe7.toString()
            }) 
        };
      
        const d = await fetch('https://itsnando.com/datenbankapi/index.php', request);
        let e = await d.json();
        if(e.ergebnis==true){
          setErfolgscheck(true)
          setTimeout(()=>{
            setErfolgscheck(false)
          },6000)  
          let AO=AdminObject;
          AO.Benutzername=eingabe1;
          AO.PasswordSha256=eingabe2.toString()
          AO.Firma=eingabe3;
          AO.Adresse=eingabe4;
          AO.Mail=eingabe5;
          AO.Mail2=eingabe6;
          AO.Mail3=eingabe7;

          let value=JSON.stringify(AO)
          speichern('Admin',value) 
          setTimeout(()=>{
            navigation.navigate({name:"FESTPERSONALFB"})
          },1000)
          
          

          //Restart();
        }
        else if(e.ergebnis=='DBerror'){//zeigt Datenbankfehler an keine speicherung
          setFehlercheck(true)
          setTimeout(()=>{
            setFehlercheck(false)
          },6000)
          setFehlerText(true)
        }else{//Fehler bei der Eingabe füllen
          setFehlercheck(true)
          setTimeout(()=>{
            setFehlercheck(false)
          },6000)
          setFehlerText(false)
          console.log('Fehler')
        }
    }
    catch(err){
       // handle rejection
       console.error(err)
    }

    }else{
      setFehlercheck(true)
      setTimeout(()=>{
        setFehlercheck(false)
      },6000)
      setFehlerText(false)
      setErfolgscheck(false)
    }
  
  }   


  const [clap,setclap]=useState(false)
  const [counter,setcounter]=useState([])


  const loeschen = async (param)=>{
    await SecureStore.deleteItemAsync(param)
  }
  const speichern = async (key,param)=>{
    if(await SecureStore.setItemAsync(key, param)){
      
      return true;
    }else{
      
      return false;
    }
  }
  const imglesen = async (param)=>{
    //loeschen(param)
    const data=await SecureStore.getItemAsync(param);//BGImage
    data?setimageWiedergabe({uri:data.toString()}):'';
  } 
  const getData=async()=>{
    if(await SecureStore.getItemAsync('Admin')){
      let SAD=await SecureStore.getItemAsync('Admin') 
      console.log(SAD) 
      SAD=JSON.parse(SAD)
      seteingabe1(SAD.Benutzername.toString())
      seteingabe2(SAD.PasswordSha256.toString())
      seteingabe3(SAD.Firma.toString())
      seteingabe4(SAD.Adresse.toString())
      seteingabe5(SAD.Mail.toString())
      seteingabe6(SAD.Mail2.toString())
      seteingabe7(SAD.Mail3.toString())
    }
  }
  
  useEffect(()=>{
    //speichern('Admin', "true")
    imglesen('BGImage')
    getData()
    console.log("test")
  },[counter])

  return(
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
   
  </View>
  <View>
    <Text style={styles.Titel}>Registrierung</Text>
  </View>
  
  <View style={styles.angabenfeld}>


    
    <View style={styles.Grid} >
      <View style={styles.Row}>
        
<TouchableOpacity style={{width:'16%'}} onPress={()=>{speichernimage('BGImage','https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YnVpc25lc3N8ZW58MHx8MHx8fDA%3D');setimageWiedergabe({uri: 'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YnVpc25lc3N8ZW58MHx8MHx8fDA%3D'})}}>
      <ImageBackground source={{uri: 'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YnVpc25lc3N8ZW58MHx8MHx8fDA%3D'}} resizeMode='cover' style={styles.imagePick}>
        <View style={styles.Box}></View>
        </ImageBackground>
</TouchableOpacity>
        <TouchableOpacity style={{width:'16%'}} onPress={()=>{speichernimage('BGImage','https://images.unsplash.com/photo-1622743941533-cde694bff56a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fE5pZ2h0Y2x1YnxlbnwwfHwwfHx8MA%3D%3D');setimageWiedergabe({uri: 'https://images.unsplash.com/photo-1622743941533-cde694bff56a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fE5pZ2h0Y2x1YnxlbnwwfHwwfHx8MA%3D%3D'})}}>
      <ImageBackground source={{uri: 'https://images.unsplash.com/photo-1622743941533-cde694bff56a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fE5pZ2h0Y2x1YnxlbnwwfHwwfHx8MA%3D%3D'}} resizeMode='cover' style={styles.imagePick}>
        <View style={styles.Box} ></View>
        </ImageBackground>
</TouchableOpacity>
        <TouchableOpacity style={{width:'16%'}} onPress={()=>{speichernimage('BGImage','https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fFJlc3RhdXJhbnRlfGVufDB8fDB8fHww');setimageWiedergabe({uri: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fFJlc3RhdXJhbnRlfGVufDB8fDB8fHww'})}}>
      <ImageBackground source={{uri: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fFJlc3RhdXJhbnRlfGVufDB8fDB8fHww'}} resizeMode='cover' style={styles.imagePick}>
      <View style={styles.Box}></View>
      </ImageBackground>
</TouchableOpacity>
      <TouchableOpacity style={{width:'16%'}} onPress={()=>{speichernimage('BGImage','https://images.unsplash.com/photo-1516458464372-eea4ab222b31?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fEJhcnxlbnwwfHwwfHx8MA%3D%3D');setimageWiedergabe({uri: 'https://images.unsplash.com/photo-1516458464372-eea4ab222b31?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fEJhcnxlbnwwfHwwfHx8MA%3D%3D'})}}>
      <ImageBackground source={{uri: 'https://images.unsplash.com/photo-1516458464372-eea4ab222b31?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fEJhcnxlbnwwfHwwfHx8MA%3D%3D'}} resizeMode='cover' style={styles.imagePick}>
      <View style={styles.Box}></View>
      </ImageBackground>
</TouchableOpacity>
      <TouchableOpacity style={{width:'16%'}} onPress={()=>{speichernimage('BGImage','https://images.unsplash.com/photo-1630395822970-acd6a691d97e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fERpc2NvfGVufDB8fDB8fHww');setimageWiedergabe({uri: 'https://images.unsplash.com/photo-1630395822970-acd6a691d97e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fERpc2NvfGVufDB8fDB8fHww'})}}>
      <ImageBackground source={{uri: 'https://images.unsplash.com/photo-1630395822970-acd6a691d97e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fERpc2NvfGVufDB8fDB8fHww'}} resizeMode='cover' style={styles.imagePick}>
      <View style={styles.Box}></View>
      </ImageBackground>
</TouchableOpacity>

      <TouchableOpacity style={{width:'16%'}} onPress={()=>{speichernimage('BGImage','https://images.unsplash.com/photo-1569924995012-c4c706bfcd51?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TmlnaHRjbHVifGVufDB8fDB8fHww');setimageWiedergabe({uri: 'https://images.unsplash.com/photo-1569924995012-c4c706bfcd51?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TmlnaHRjbHVifGVufDB8fDB8fHww'})}}>
      <ImageBackground source={{uri: 'https://images.unsplash.com/photo-1569924995012-c4c706bfcd51?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TmlnaHRjbHVifGVufDB8fDB8fHww'}} resizeMode='cover' style={styles.imagePick}>
      <View style={styles.Box}></View>
      </ImageBackground>
</TouchableOpacity>
      </View>
      
    </View>



  
<EingabeFeld  Icon={'User'}     Labname={'Benutzername'}  SV={eingabe1} SF={seteingabe1}     />
<EingabeFeld  Icon={'Pass'}     Labname={'Passwort'}       SV={eingabe2} SF={seteingabe2}    />
<EingabeFeld  Icon={'Company'}  Labname={'Firma'}          SV={eingabe3} SF={seteingabe3}     /> 
<EingabeFeld  Icon={'Address'}  Labname={'Adresse'}        SV={eingabe4} SF={seteingabe4}     /> 
<EingabeFeld  Icon={'Mail'}     Labname={'E-Mail-Adresse 1'} SV={eingabe5} SF={seteingabe5}     />
<EingabeFeld  Icon={'Mail'}     Labname={'E-Mail-Adresse 2'} SV={eingabe6} SF={seteingabe6}     />
<EingabeFeld  Icon={'Mail'}     Labname={'E-Mail-Adresse 3'} SV={eingabe7} SF={seteingabe7}     /> 




{/** 
{
  clap? 
  <Emailfeld changeArray={(newArray)=>setcounter(newArray)} Arr={counter} SF={seteingabe6} /> :''
}
<TouchableOpacity onPress={()=>ergaenzenFeld()}  style={styles.Hinzufuegen}> 
    <Text style={{color:'#FFF'}} >+</Text>
  </TouchableOpacity>}
*/}
</View>

<View style={styles.UntenButton}>
<TouchableOpacity onPress={()=>navigation.navigate({name:"FESTPERSONALFB"})} style={styles.Abbrechen}>
    <Text style={{color:'#dc2626'}}>Abbrechen</Text>
</TouchableOpacity>

<TouchableOpacity onPress={()=>submitdata()} style={styles.Abspeichern}>
    <Text style={{color:'black'}}>Speichern</Text>
</TouchableOpacity>
</View>
 
    </View>
    </ScrollView>
    </ImageBackground>
    </SafeAreaView>
  );
}

export default Registrierung

const styles = StyleSheet.create({
  Grid:{
    flex:6,//Ist gleich Anzahl Optionen Für jede Option um 1 erhöhen/verringern
    justifyContent: 'center',
    
  },
  Row:{
    flexDirection: 'row',
    margin:5,
    
  },
  Box:{
    
    padding:20,
    flex:1,
    borderWidth:2,
    borderColor: '#fff',
    flexDirection: 'row'
  },
  image:{
    flex: 1,
    justifyContent: 'center',
    
       
    zIndex: 50,
  },
  imagePick:{
    flex: 1,
    justifyContent: 'center',
    
       
    zIndex: 100,
  },
  sav:{
    flex: 1,
    flexDirection:'column',
    
    width:'100%',
    height:'100%',
    justifyContent: 'flex-start',
  },  
  container: {    
    
    width:'100%',   
    height:'100%',  
    alignItems: 'center',
    justifyContent:'flex-start',
  },
  AdminButtonContainer:{
    width:'100%', 
    padding:10,
  },
  AdminButton:{
    alignItems: 'center',
    backgroundColor: '#0f172a',
    padding: 10,
    height:'auto',
    marginTop:10,
    borderRadius:5,
    borderTopColor:'#1e3a8a',
    borderTopWidth:2,
    borderBottomColor:'#1e3a8a',
    borderBottomWidth:2,
    width:'25%',
    marginLeft:'75%',
  },
  Hinzufuegen:{
    alignItems: 'center',
    backgroundColor: '#2563eb',
    padding: 10,
    height:'auto',
    width:'auto',
    marginTop:20,
    borderRadius:90,
    borderTopColor:'#1e3a8a',
    borderTopWidth:2,
    borderBottomColor:'#1e3a8a',
    borderBottomWidth:2, 
    marginLeft:'85%',
    marginRight:'5%'
  },
  Titel:{
    fontSize:35,
    marginTop:15,
    textShadowColor:'#000',
    textShadowRadius:5,
    textShadowOffset:{width:3,height:3},
    color:'#FFF',
  },
  angabenfeld:{
    width:'90%', 
    backgroundColor: '#00000099', 
    paddingVertical:30,
    paddingHorizontal:20,
    borderRadius:20, 
    marginVertical:20,
    borderColor:'#64748b',
    borderWidth:1,
    marginTop:50,
    alignSelf:'center',
  },
  Abspeichern:{
    alignSelf: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#22c55e',
    padding: 10,
    height:'auto',    
    borderRadius:5,
    borderTopColor:'#1e3a8a',
    borderTopWidth:2,
    borderBottomColor:'#1e3a8a',
    borderBottomWidth:2,
    width:'25%',
    marginBottom: 15,      
  },
  Abbrechen:{
    alignSelf: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#0f172a',
    padding: 10,
    height:'auto',
    marginRight: '50%',
    borderRadius:5,
    borderTopColor:'#dc2626',
    borderTopWidth:2,
    borderBottomColor:'#dc2626',
    borderBottomWidth:2,
    width:'25%',
    marginBottom: 15,        
  },

  UntenButton:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    padding: 10,
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
