import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput,Button, SafeAreaView, TouchableOpacity,ImageBackground } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import LANG from './../../lang/lang';
import Blocktop from './../component/seite1comp/blocktop'; 
import { TransactionContext } from '../../utils/Context'; 
import {Octicons, Ionicons} from '@expo/vector-icons';
import Container from './../fragebogencomps/containercomp/Container';
import TitleTouch from './../fragebogencomps/touchTitle/TitleTouch';
import { Dataset } from '../../utils/Dataset';
import { Textdataset } from '../../utils/Textdataset';
import SelectPicker from './../fragebogencomps/selectBoxencomp/PickerSelectBox'; 
import SteuerID from './../fragebogencomps/selectBoxencomp/SteuerCheckbox';
import { ScrollView } from 'react-native-gesture-handler';
import PersoenlicheDatenObject from '../../utils/Objects/PersoenlicheDatenObject'; 
import {isValid} from 'iban'
import { isSteuerIdValid } from 'validate-steuerid'
import * as SecureStore from 'expo-secure-store';
import {Picker} from '@react-native-picker/picker';
import SVNummer from './../fragebogencomps/selectBoxencomp/SozialCheckbox';
import { EingabeFeld } from './../fragebogencomps/textFeldcomp/EingabeFeld';
import Fehlermeldung from './../fragebogencomps/anzeigefelder/Fehlermeldung';
import { imglesen } from './functions/functionHandler';

export default function Fragebogen({navigation}) {
  const [image,setimage]=useState({uri: 'https://images.unsplash.com/photo-1622743941533-cde694bff56a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fE5pZ2h0Y2x1YnxlbnwwfHwwfHx8MA%3D%3D'})
  const [sprache,setzesprache]=useContext(TransactionContext)  
  const [PrivateDatenArr,setPrivateDatenArr]=useState(PersoenlicheDatenObject) 
  const [tab1ausgefuellt,settab1ausgefuellt]=useState(false) 
  const readImage=async()=>{
    const data=await imglesen('BGImage')
    if(data){
      setimage(data)
    }
  }
  useEffect(()=>{
    readImage()
  },[])
  return (
    <SafeAreaView style={styles.sav} >
      <ImageBackground source={image} resizeMode='cover' style={styles.image}> 
      <ScrollView style={{backgroundColor: 'transparent'}}>
        
      <View style={styles.container}>      
      <View style={styles.AdminButtonContainer}>

      <TouchableOpacity  style={styles.AdminButton}> 
        <Text style={{color:'#fff'}} >Admin</Text>
      </TouchableOpacity>

        <View style={styles.SprachButton}>
        <TouchableOpacity onPress={()=>setzesprache(!sprache)} style={styles.InsetSprachButton} > 
          <Text style={{color:'#FFFFFF'}} >{sprache?'EN':'DE'}</Text>
        </TouchableOpacity>
        </View>
        
        <TouchableOpacity onPress={()=>navigation.navigate({name:"Seite2",params:{PrivateDatenArr}})} style={styles.AdminButton}> 
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
   
    <TitleTouch AGB={tab1ausgefuellt} F={settab1} S={'true/false'} T={sprache?LANG.Angabenueberschriften.Personendaten.DE:LANG.Angabenueberschriften.Personendaten.EN} />
      
      {/** Insert <NameAnschrift/> */}



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
