import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput,Button, SafeAreaView, TouchableOpacity } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import Eingabefeld from '../Components/Texteingabebp';
import GenderCheck from '../Components/Gendercheckbox';
import Block1gname from './component/seite1comp/block1gname';
import Block2adresse from './component/seite1comp/block2adresse';
import Block3Komunikation from './component/seite1comp/block3kommunikation';
import LANG from './../lang/lang'
import Blocktop from './component/seite1comp/blocktop'; 
import { TransactionContext } from '../utils/Context'; 
import {Octicons, Ionicons} from '@expo/vector-icons';
import Container from './fragebogencomps/containercomp/Container';
import TitleTouch from './fragebogencomps/touchTitle/TitleTouch';
import { Dataset } from '../utils/Dataset';
export default function Seite1({navigation}) {
  const [sprache,setzesprache]=useContext(TransactionContext)  
  const [tab1,settab1]=useState(false)  
  const [tab2,settab2]=useState(false)  
  const [tab3,settab3]=useState(false) 
    
  return (
    <SafeAreaView style={styles.sav} backgroundColor={'#334155'}>
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
        <TouchableOpacity  style={styles.AdminButton}> 
          <Text style={{color:'#FFFFFF'}} >Next</Text>
        </TouchableOpacity>
      </View>

      {/**           Hier Beginnt der Inhalt des  Fragebogen Containers                                                   */}


      
  <View style={styles.ContainerFragebogen}> 
  <View>
    <Blocktop/>
    <Text style={{color:'#fff'}}>{Dataset(sprache?'DE':'EN').Texte.Rechtsbelehrung}</Text>{/**für pur Text style direkt in der text box */}
  </View>
  <View style={{flexDirection:'column', width:'100%'}}>
  <TitleTouch F={settab1} S={tab1} T={sprache?LANG.SEITE1.Block1.Title.De:LANG.SEITE1.Block1.Title.En} />
  <Container Icon={Dataset(sprache?'DE':'EN').PerData.EingabefelderIcons} Labname={Dataset(sprache?'DE':'EN').PerData.Eingabefelder} F={settab1} S={tab1} /> 
  <TitleTouch F={settab2} S={tab2} T={sprache?LANG.Kommunikation.Überschrift.De:LANG.Kommunikation.Überschrift.EN} /> 
  <Container Icon={Dataset(sprache?'DE':'EN').KontaktData.EingabefelderIcons}Labname={Dataset(sprache?'DE': 'EN').KontaktData.Eingabefelder} F={settab2} S={tab2}  />
  <TitleTouch F={settab3} S={tab3} T={sprache?LANG.SEITE1.Block1.Title.De:LANG.SEITE1.Block1.Title.En} />
  
  
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
     

});
