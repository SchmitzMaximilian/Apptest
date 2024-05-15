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
import { ScrollView } from 'react-native-gesture-handler';
import PersoenlicheDatenObject from '../utils/Objects/PersoenlicheDatenObject';
import { Textdataset } from '../utils/Textdataset';
import {Picker} from '@react-native-picker/picker';
import { SachbearbeitungTextdataset } from '../utils/Sachbearbeitung/SachbearbeitungTextdataset';
import * as SecureStore from 'expo-secure-store';
import { EingabeFeld } from './registrierung/regcomps/Comps';
import SimpelCheck from './fragebogencomps/sachbearbeitungsComps/SimpelCheck';
import ArbeitstageCheck from './pages/sachbearbeitungMiniComponents/ArbeitstageCheck';
import Justchecking from './fragebogencomps/sachbearbeitungsComps/Justchecking';
import Unterlagencheckliste from './pages/sachbearbeitungMiniComponents/Unterlagencheckliste';
import Grundentlohnung from './pages/sachbearbeitungMiniComponents/Grundentlohnung';




export default function Seite2({route, navigation}) {
  console.log()
  const [sprache,setzesprache]=useContext(TransactionContext)
  const [checked1, setChecked1] = useState(0)
  const [tab1,settab1]=useState(false)
  const [tab2,settab2]=useState(false)
  const [tab3,settab3]=useState(false)
  const [PrivateDatenArr,setPrivateDatenArr]=useState(route.params.PrivateDatenArr)
  const [Fehlercheck,setFehlercheck]=useState(false)
  const [FehlerText,setFehlerText]=useState(false)
  const [Erfolgscheck,setErfolgscheck]=useState(false)
  const [SelectedLanguage, setSelectedLanguage] = useState(); 
  const [mitarbeiterID,setmitarbeiterID]=useState(route.params.PrivateDatenArr.MitarbeiterID)
  const [image,setimage]=useState({uri: 'https://images.unsplash.com/photo-1622743941533-cde694bff56a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fE5pZ2h0Y2x1YnxlbnwwfHwwfHx8MA%3D%3D'})
  const [SL,setSL]=useState(false)
  const [Beseingabe,setBeseingabe]=useState(false)
  
  
  const imglesen = async (param)=>{
    //loeschen(param)
    const data=await SecureStore.getItemAsync(param);//BGImage
    data?setimage({uri:data.toString()}):'';
  }
  
  useEffect(()=>{ 
    
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
        <TouchableOpacity onPress={()=>navigation.pop()} style={styles.BackButton}> 
        <Ionicons  name={'arrow-back'} color={'#FFFFFF'} style={{marginRight:8}}/>
          <Text  style={{color:'#FFFFFF'} } >Back</Text>
        </TouchableOpacity>
        <View style={styles.SprachButton}>
        {/*<TouchableOpacity onPress={()=>setzesprache(!sprache)} style={styles.InsetSprachButton} > 
          <Text style={{color:'#FFFFFF'}} >{sprache?'EN':'DE'}</Text>
        </TouchableOpacity>*/}
</View>
        <TouchableOpacity onPress={()=>navigation.navigate({name:"SeiteTest",params:{PrivateDatenArr}})} style={styles.AdminButton}> 
          <Text style={{color:'#FFFFFF'}} >Festpersonal</Text>
        </TouchableOpacity>
      </View>


    {/**Angaben der Sachbearbeitung*/}
    <View style={styles.ContainerFragebogen}>

      <Text style={styles.Titel}>Sachbearbeitungsbogen für Minijob</Text>

    
    <TitleTouch  F={settab3} S={tab3} T={SachbearbeitungTextdataset(sprache?"DE":"EN").Titel.Zeiten} />
    {
      tab3?
      <>       
      <ArbeitstageCheck/>  
      </>
      :
      ""
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

<TitleTouch  F={settab1} S={tab1} T={SachbearbeitungTextdataset(sprache?"DE":"EN").Titel.Lohn} />
    {
      tab1?
      <>
      <Grundentlohnung/>
            
      </>
      :
      ""
    }  


   {
	  tab1?
    <> 
    <TouchableOpacity onPress={()=>datenabruf()} style={styles.Abspeichern}>
    <Text style={{color:'black'}}>Speichern</Text>
</TouchableOpacity>
    </>
    :
    ""
  }
      <TitleTouch  F={settab2} S={tab2} T={SachbearbeitungTextdataset(sprache?"DE":"EN").Titel.Checkliste} />
    {
      tab2?
      <>
      <Unterlagencheckliste/>      
      </>
      :
      ""
    }  


   {
	  tab2?
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
      fontSize:30,
      marginHorizontal:'10%',
      marginVertical:20,
      textShadowColor:'#000',
      textShadowRadius:5,
      textShadowOffset:{width:3,height:3},
      color:'#FFF',
    },
    Titelklein:{
      fontSize:20,
      marginHorizontal: '10%',
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

    Reihe:{
      paddingHorizontal:10,
      marginHorizontal:30,
      width:'80%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent:'space-between'
    },
    Textelemente:{
      color:'#fff',
      fontSize: 18,
      paddingHorizontal:10,
      paddingVertical:10,
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