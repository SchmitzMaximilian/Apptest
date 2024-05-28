import React,{ useContext, useEffect, useState }  from 'react'
import { StyleSheet, Text, View, TextInput,Button, SafeAreaView, TouchableOpacity,ImageBackground, Alert } from 'react-native';
import PersoenlicheDatenObject from '../../../utils/Objects/PersoenlicheDatenObject';
import { TransactionContext } from '../../../utils/Context';
import { Textdataset } from '../../../utils/Textdataset';
import {Octicons, Ionicons,FontAwesome5} from '@expo/vector-icons';
import { BackHandler } from "react-native";
/**
 * 
 * navigation.navigate is not a function fehler
 * 
 * 
 */





const BottomButtonleiste=({navigation,D})=> {
  const [sprache,setzesprache]=useContext(TransactionContext)
  const submitMail=async()=>{
    console.log(D)
    let obj=D
    if(obj.MitarbeiterID>0){
      console.log('MID OK')
      if(obj.Email.toString().length>4){
        console.log('is OK')
        const request ={
          method: 'POST',
          headers: { 'Content-Type' : 'application/json'},
          body: JSON.stringify({
            "query": 17,//ändern
            "ID": obj.MitarbeiterID,
            "MAIL": obj.Email,  
            "VNAME": obj.Vname,  
            "NNAME": obj.Nname,  
          })
        };
        const d = await fetch('https://itsnando.com/datenbankapi/index.php', request); 
        let e = await d.json();
        if(e){
          
          Alert.alert('Info','Ihre Daten wurden gespeichert.',[{text: 'OK', onPress: () => {BackHandler.exitApp();}}])
 
           
        }
      }else{
        //ERROR
      }
    }else{
      //ERROR

    } 
    
  }
  useEffect(()=>{

  },[D])
  return (
    <View style={styles.AdminButtonContainer}>

      <TouchableOpacity onPress={()=>navigation.navigate({name:"AdminApp"})} style={styles.AdminButton2}> 
        <FontAwesome5  name={'shield-alt'} size={21} color={'#fff'} /><Text style={{color:'#FFFFFF',marginLeft:10}} >{Textdataset(sprache?"DE":"EN").Buttons.Versenden}</Text>
      </TouchableOpacity>

        <View style={styles.SprachButton}>
        {/*<TouchableOpacity onPress={()=>setzesprache(!sprache)} style={styles.InsetSprachButton} > 
          <Text style={{color:'#FFFFFF'}} >{sprache?'EN':'DE'}</Text>
        </TouchableOpacity>*/}
          </View>
        
        <TouchableOpacity onPress={()=>Alert.alert("Informationen","Hiermit bestätigen Sie Ihre Anmeldung als Bewerber. Nach Abschluss erhalten Sie eine E-Mail mit einem Zugangspasswort zu Ihren persönlichen Daten. Ihre Daten können innerhalb von 14 Tagen bearbeitet werden. Nach Ablauf der 14 Tage werden Ihre Daten automatisch gelöscht.",[{
        text: 'Cancel',
        onPress: () => console.log(D),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => submitMail()},])} style={styles.AdminButton}> 
          <Text style={{color:'#FFFFFF'}} >{Textdataset(sprache?"DE":"EN").Buttons.Fertig}</Text>
        </TouchableOpacity>
      </View>
  )
}
const styles = StyleSheet.create({
  AdminButtonContainer:{
    width:'100%', 
    padding:15, 
    flexDirection:'row', 
  },
  SprachButton:{
    alignItems: 'center',  
    flex:1,    
    borderRadius:5,  
  },AdminButton:{
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
  },AdminButton2:{
    alignItems: 'center',
    backgroundColor: '#1d4ed8',
    height:'auto',
    flex:1,
    paddingLeft:20,
    flexDirection:'row',
    alignContent:'center',
    alignItems:'center', 
    marginTop:20,
    borderRadius:5,
    borderTopColor:'#1e3a8a',
    borderTopWidth:2,
    marginLeft:5,
    borderBottomColor:'#1e3a8a',
    borderBottomWidth:2,
    width:'25%', 
  },InsetSprachButton:{
    alignItems: 'center',
    backgroundColor: '#6b7280',
    padding: 10,
    alignSelf:'center',  
    borderRadius:5, 
    width:'20%', 
  },

})
export default BottomButtonleiste