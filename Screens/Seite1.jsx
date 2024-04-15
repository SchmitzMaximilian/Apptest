import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput,Button, SafeAreaView, TouchableOpacity } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import LANG from './../lang/lang'
import Blocktop from './component/seite1comp/blocktop'; 
import { TransactionContext } from '../utils/Context'; 
import {Octicons, Ionicons} from '@expo/vector-icons';
import Container from './fragebogencomps/containercomp/Container';
import TitleTouch from './fragebogencomps/touchTitle/TitleTouch';
import { Dataset } from '../utils/Dataset';
import { Textdataset } from '../utils/Textdataset';
import { Checkboxdataset } from '../utils/Checkboxdataset';
import SelectPicker from './fragebogencomps/selectBoxencomp/PickerSelectBox'; 
import SteuerID from './fragebogencomps/selectBoxencomp/SteuerCheckbox';
import SVNummer from './fragebogencomps/selectBoxencomp/SozialCheckbox';
import Zahlungsart from './fragebogencomps/selectBoxencomp/Checkbox';
import spacingInstance from 'react-native-ui-lib/src/style/spacings';

export default function Seite1({navigation}) {
  const [sprache,setzesprache]=useContext(TransactionContext)  
  const [tab1,settab1]=useState(false)  
  const [tab2,settab2]=useState(false)  
  const [Steuercheck,setSteuercheck]=useState(false)
  const [Bargeldcheck,setBargeldcheck]=useState(false)
  const [tab4,settab4]=useState(false)
  const [tab5,settab5]=useState(false)
  const [tab6,settab6]=useState(false)
  const [tab7,settab7]=useState(false)    
  return (
    <SafeAreaView style={styles.sav} backgroundColor={'#335155'}>
      <View style={styles.container}>
      <View style={styles.AdminButtonContainer}>
        <TouchableOpacity  style={styles.BackButton}> 
        <Ionicons  name={'arrow-back'} color={'#FFFFFF'} style={{marginRight:8}}/>
          <Text style={{color:'#FFFFFF'}} >Back</Text>
        </TouchableOpacity>
        <View style={styles.SprachButton}>
        <TouchableOpacity onPress={()=>setzesprache(!sprache)} style={styles.InsetSprachButton} > 
          <Text style={{color:'#FFFFFF'}} >{sprache?'EN':'DE'}</Text>
        </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={()=>navigation.navigate("Seite2")} style={styles.AdminButton}> 
          <Text style={{color:'#FFFFFF'}} >Next</Text>
        </TouchableOpacity>
      </View>

  {/**           Hier Beginnt der Inhalt des  Fragebogen Containers                                                   */}


      
  <View style={styles.ContainerFragebogen}> 
  <View>
    <Blocktop/> 
    <SelectPicker S={sprache?'DE':'EN'} V={true} I={4}/>
    <Text style={{color:'#fff', marginHorizontal: '10%'}}>{Textdataset(sprache?'DE':'EN').Texte.Rechtsbelehrung}</Text>{/**für pur Text style direkt in der text box */}
  </View>
  <View style={{flexDirection:'column', width:'100%'}}>


  {/**Name und Anschrift */}  
  <TitleTouch F={settab1} S={tab1} T={sprache?LANG.Angabenueberschriften.Personendaten.DE:LANG.Angabenueberschriften.Personendaten.EN} />
  <SelectPicker S={sprache?'DE':'EN'} V={tab1} I={0}/>
  <Container Icon={Dataset(sprache?'DE':'EN').PerData.EingabefelderIcons} Labname={Dataset(sprache?'DE':'EN').PerData.Eingabefelder} F={settab1} S={tab1}  /> 
  

  {/**Kommunikation */}
  <TitleTouch F={settab2} S={tab2} T={sprache?LANG.Angabenueberschriften.Kommunikation.DE:LANG.Angabenueberschriften.Kommunikation.EN} /> 
  <Container Icon={Dataset(sprache?'DE':'EN').KontaktData.EingabefelderIcons}Labname={Dataset(sprache?'DE': 'EN').KontaktData.Eingabefelder} F={settab2} S={tab2}  />
  

  {/**Bankverbindung */}  
  <TitleTouch F={settab4} S={tab4} T={sprache?LANG.Angabenueberschriften.Bank.DE:LANG.Angabenueberschriften.Bank.EN}/>  
  {
    tab4?
    <>
    <Zahlungsart S={Bargeldcheck} F={setBargeldcheck}/>
    {
      Bargeldcheck?
      ""
      :
      <Container Icon={Dataset(sprache?'DE':'EN').BankData.EingabefelderIcons} Labname={Dataset(sprache?'DE':'EN').BankData.Eingabefelder} F={settab4} S={tab4}/>
    }
    </>
    :
    ""
  }


  {/**Angaben zur Steuer */}
  <TitleTouch F={settab5} S={tab5} T={sprache?LANG.Angabenueberschriften.Steuer.DE:LANG.Angabenueberschriften.Steuer.EN}/>
  {
    tab5?
    <>
    <SteuerID S={Steuercheck} F={setSteuercheck}/>
  <Text style={styles.Textelemente}>{Textdataset(sprache?'DE':'EN').Texte.SteuerKlasseNachweis}</Text>
  {
      Steuercheck?
      ""
      :
   <Container Icon={["Steuer"]} Labname={[sprache?"Steuer-ID (Pflichtangabe)":"Tax ID (mandatory information)"]} F={settab5} S={tab5}/>
     }  
    </>
    :
    ""
  }  
  <Container Icon={Dataset(sprache?'DE':'EN').SteuerData.EingabefelderIcons} Labname={Dataset(sprache?'DE':'EN').SteuerData.Eingabefelder} F={settab5} S={tab5}/>
  

  {/**Schulabschluss */}
  <TitleTouch F={settab6} S={tab6} T={sprache?LANG.Angabenueberschriften.Schule.DE:LANG.Angabenueberschriften.Schule.EN}/>
  {
    tab6?
    <>
    
    </>
    
    :
    ""
  }  
  <SelectPicker S={sprache?'DE':'EN'} V={tab6} I={2}/>


  {/**Ausbildungsabschluss */}
  <TitleTouch F= {settab7} S={tab7} T={sprache?LANG.Angabenueberschriften.Ausbildung.DE:LANG.Angabenueberschriften.Ausbildung.EN}/>
  {
  	tab7?
    <>
    
    </>
    :
    ""
  }  
  <SelectPicker S={sprache?'DE':'EN'} V={tab7} I={3} />
  
  
  </View>


  </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sav:{
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#334155',
    width:'100%',
    height:'100%',
    justifyContent: 'flex-start',},
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
      backgroundColor: '#1e293b',  
      paddingHorizontal:20,
      borderRadius:20, 
      marginVertical:20,
      borderColor:'#64748b',
      borderWidth:1,
      marginTop:50,
      alignSelf:'center',
    },
    Textelemente:{
      color:'#fff',
      marginHorizontal: '10%',
    }
     

});
