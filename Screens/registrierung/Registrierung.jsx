import React, { useEffect, useState, useContext } from "react";
import * as SecureStore from 'expo-secure-store';
import { StyleSheet, Text, View, TextInput,Button, SafeAreaView, TouchableOpacity } from 'react-native';
import { EingabeFeld } from "./regcomps/Comps";
import { BorderRadiuses } from "react-native-ui-lib/src/style/borderRadiuses";
import { ScrollView } from "react-native-gesture-handler";
import Emailfeld from "./regcomps/Emailfeld";
import { TransactionContext } from './../../utils/Context'; 
import { Textdataset } from "../../utils/Textdataset";
import AdminObject from "../../utils/Objects/AdminObject";
import { sha256 } from "node-forge";
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

const Registrierung =()=>{
  const [sprache,setzesprache]=useContext(TransactionContext)
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
    if(eingabe6.trim().length==0){ 
      mail2='';
    }
    if(eingabe7.trim().length==0){ 
      mail3='';

    }
    if(check){
      try{ 
        const request = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "query":1,
                "username":eingabe1.toString(),
                "passwort":eingabe2.toString(),
                "firma":eingabe3.toString(),
                "adresse":eingabe4.toString(),
                "email1":eingabe5.toString(),
                "email2":eingabe6.toString(),
                "email3":eingabe7.toString()
            }) 
        };
      
        const d = await fetch('http://192.168.2.154/datenbankapi/index.php', request);
        let e = await d.json();
        if(e.ergebnis==true){
          setErfolgscheck(true)  
          let AO=AdminObject;
          AO.Benutzername=eingabe1;
          AO.PasswordSha256=sha256.create().update(eingabe2.toString()).digest().toHex()
          AO.Firma=eingabe1;
          AO.Adresse=eingabe1;
          AO.Mail=eingabe1;

          let value=JSON.stringify(AO)
          //speichern('Admin',value)
          console.log('Erfolg')
          

          //Restart();
        }
        else if(e.ergebnis=='DBerror'){//zeigt Datenbankfehler an keine speicherung
          setFehlercheck(true)
          setFehlerText(true)
        }else{//Fehler bei der Eingabe füllen
          setFehlercheck(true)
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
  
  {/*const ergaenzenFeld=()=>{ 
    let altarr=[...counter]
    if(altarr.length!=2)
    {
    altarr.push(altarr.length)
    setcounter(altarr)
    console.log("Test altarr")}
    altarr.length>0?setTimeout(()=>{setclap(true)},200):''
  }*/}
  
  useEffect(()=>{
    speichern('Admin', "true")
    console.log("test")
  },[counter])

  return(
    <SafeAreaView style={styles.sav} backgroundColor={'#334155'}>
      <ScrollView>
<View style={styles.container}>
  <View style={styles.AdminButtonContainer}>
  <TouchableOpacity  style={styles.AdminButton}> 
    <Text style={{color:'#60a5fa'}} >Admin</Text>
  </TouchableOpacity>
  </View>
  <View>
    <Text style={styles.Titel}>Registrierung</Text>
  </View>
  
  <View style={styles.angabenfeld}>


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
  
<EingabeFeld  Icon={'User'}     Labname={'Benutzername'}   SF={seteingabe1}    />
<EingabeFeld  Icon={'Pass'}     Labname={'Passwort'}       SF={seteingabe2}    />
<EingabeFeld  Icon={'Company'}  Labname={'Firma'}          SF={seteingabe3}    /> 
<EingabeFeld  Icon={'Address'}  Labname={'Adresse'}        SF={seteingabe4}    /> 
<EingabeFeld  Icon={'Mail'}     Labname={'E-mail Adresse'} SF={seteingabe5}    />
<EingabeFeld  Icon={'Mail'}     Labname={'E-mail Adresse'} SF={seteingabe6}    />
<EingabeFeld  Icon={'Mail'}     Labname={'E-mail Adresse'} SF={seteingabe7}    /> 




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
<TouchableOpacity style={styles.Abbrechen}>
    <Text style={{color:'#dc2626'}}>Abbrechen</Text>
</TouchableOpacity>

<TouchableOpacity onPress={()=>submitdata()} style={styles.Abspeichern}>
    <Text style={{color:'black'}}>Speichern</Text>
</TouchableOpacity>
</View>
 
    </View>
    </ScrollView>
    </SafeAreaView>
  );
}

export default Registrierung

const styles = StyleSheet.create({
  sav:{
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#334155',
    width:'100%',
    height:'100%',
    justifyContent: 'flex-start',
  },  
  container: {    
    backgroundColor: '#334155',
    width:'100%',   
    height:'100%',  
    alignItems: 'center',
    justifyContent:'flex-start',
  },
  AdminButtonContainer:{
    width:'100%', 
    padding:15,
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
    marginTop:40,
    textShadowColor:'#000',
    textShadowRadius:5,
    textShadowOffset:{width:3,height:3},
    color:'#FFF',
  },
  angabenfeld:{
    width:'90%', 
    backgroundColor: '#1e293b', 
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
    backgroundColor: '#166534',
    padding: 10,
    height:'auto',
    
    borderRadius:5,
    borderTopColor:'#1e3a8a',
    borderTopWidth:2,
    borderBottomColor:'#1e3a8a',
    borderBottomWidth:2,
    width:'25%',
    marginBottom: 20,
    
    
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
    marginBottom: 20,
    
    
    
  },

  UntenButton:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    padding: 10,
  } ,
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

  }

});
