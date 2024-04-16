import React, { useEffect, useState } from "react";
import * as SecureStore from 'expo-secure-store';
import { StyleSheet, Text, View, TextInput,Button, SafeAreaView, TouchableOpacity } from 'react-native';
import { EingabeFeld } from "./regcomps/Comps";
import { BorderRadiuses } from "react-native-ui-lib/src/style/borderRadiuses";
import { ScrollView } from "react-native-gesture-handler";
import Emailfeld from "./regcomps/Emailfeld";
/**
 
Username
Password
Betrieb
Adresse Betrieb
Mehrfach Eingabe maximal 3 E-mail

Speicher button

hot reload
import { Restart } from "fiction-expo-restart";


  Restart();

 */

const Registrierung =()=>{
  const [ersteeingabe,setersteeingabe]=useState('')
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
  const setText=(p)=>{
    setersteeingabe(p)
  }
  const ergaenzenFeld=()=>{ 
    let altarr=[...counter]
    if(altarr.length!=2)
    {
    altarr.push(altarr.length)
    setcounter(altarr)
    console.log("Test altarr")}
    altarr.length>0?setTimeout(()=>{setclap(true)},200):''
  }
  
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
<EingabeFeld  Icon={'User'}  Labname={'Benutzername'}   /> 
<EingabeFeld   Icon={'Pass'}  Labname={'Passwort'} />
<EingabeFeld   Icon={'Company'}  Labname={'Firma'}/> 
<EingabeFeld  Icon={'Address'}   Labname={'Adresse'}/> 
<EingabeFeld   Icon={'Mail'}     Labname={'E-mail Adresse'}/> 
{
  clap? 
  <Emailfeld changeArray={(newArray)=>setcounter(newArray)} Arr={counter} /> :''
}
<TouchableOpacity onPress={()=>ergaenzenFeld()}  style={styles.Hinzufuegen}> 
    <Text style={{color:'#FFF'}} >+</Text>
  </TouchableOpacity>

</View>

<View style={styles.UntenButton}>
<TouchableOpacity style={styles.Abbrechen}>
    <Text style={{color:'#dc2626'}}>Abbrechen</Text>
</TouchableOpacity>

<TouchableOpacity style={styles.Abspeichern}>
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
    marginTop:20,
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
  } 
  
  

});
