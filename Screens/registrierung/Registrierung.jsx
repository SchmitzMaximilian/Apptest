import React, { useEffect, useState } from "react";
import * as SecureStore from 'expo-secure-store';
import Eingabefeld from "../../Components/Texteingabebp";
import { StyleSheet, Text, View, TextInput,Button } from 'react-native';
import { EingabeFeld } from "./regcomps/Comps";
import { BorderRadiuses } from "react-native-ui-lib/src/style/borderRadiuses";
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
  useEffect(()=>{
    speichern('Admin', "true")
  },[])
  return(

<View style={styles.container}>
<EingabeFeld  P={"Benutzername"} V={ersteeingabe.toString()} S={setText}    />
<Text>Username</Text>
<EingabeFeld P={"Passwort"} V={ersteeingabe.toString()} S={setText}    />
<Text>Passwort</Text>
<EingabeFeld P={"Name Betrieb"} V={ersteeingabe.toString()} S={setText}    />
<Text>Betrieb</Text>
<EingabeFeld P={"Standortadresse Betrieb"} V={ersteeingabe.toString()} S={setText}    />
<Text>Adresse Betrieb</Text>
<EingabeFeld P={"Max.Mustermann@Email.de"} V={ersteeingabe.toString()} S={setText}    />
<Text>E-Mail-Adresse</Text><Button title='Weitere Email hizufügen' />
{/*onPress <EingabeFeld P={"Max.Mustermann@Email.de"} V={ersteeingabe.toString()} S={setText}    /> hinzufügen*/}

<Button title='Submit/Register' style={styles.submitData}/>
    </View>

  );
}

export default Registrierung

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '5%'    
  },
  submitData:{
    

  }


});
