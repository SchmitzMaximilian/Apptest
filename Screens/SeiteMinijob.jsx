import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ImageBackground } from 'react-native';
import { useContext, useEffect, useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { TransactionContext } from '../utils/Context';
import * as SecureStore from 'expo-secure-store';
import { Textdataset } from '../utils/Textdataset';
import { FCContext } from './pages/functions/contextFehlercheck';
import { FTContext } from './pages/functions/contextFehlertext';
import { ECContext } from './pages/functions/contextErfolgscheck';
import { MAidContext } from './pages/functions/contextMitarbeiterid';
import MiniNameAnschrift from './pages/minijobfragebogenComponents/MiniNameAnschrift';
import MiniBogeneinleitung from './pages/minijobfragebogenComponents/MiniBogeneinleitung';
import MiniKommunikation from './pages/minijobfragebogenComponents/MiniKommunikation';
import MiniPersoenlicheDatenObject from '../utils/Objects/MiniPersoenlicheDatenObject';
import MiniBank from './pages/minijobfragebogenComponents/MiniBank';
import MiniSteuer from './pages/minijobfragebogenComponents/MiniSteuer';
import MiniSozial from './pages/minijobfragebogenComponents/MiniSozial';
import MiniStatus from './pages/minijobfragebogenComponents/MiniStatus';
import MiniJANEIN from './pages/minijobfragebogenComponents/MiniJANEIN';
import MiniKV from './pages/minijobfragebogenComponents/MiniKV'; 
import MiniTopButtonleiste from './pages/minijobfragebogenComponents/MiniTopButtonleiste';
import Meldungerfolg from '../Components/Meldungerfolg';
import BottomButtonleiste from './pages/minijobfragebogenComponents/BottomButtonleiste';


function SeiteMinijob({navigation}) {
  const [image,setimage]=useState({uri: 'https://images.unsplash.com/photo-1622743941533-cde694bff56a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fE5pZ2h0Y2x1YnxlbnwwfHwwfHx8MA%3D%3D'})
  const [mitarbeiterID,setmitarbeiterID]=useContext(MAidContext)
  const [PrivateDatenArr,setPrivateDatenArr]=useState(MiniPersoenlicheDatenObject)
  const [sprache,setzesprache]=useContext(TransactionContext) 

  const [Fehlercheck,setFehlercheck]=useContext(FCContext)
  const [FehlerText,setFehlerText]=useContext(FTContext)
  const [Erfolgscheck,setErfolgscheck]=useContext(ECContext) 

  const imglesen = async (param)=>{
    //loeschen(param)
    const data=await SecureStore.getItemAsync(param);//BGImage
    data?setimage({uri:data.toString()}):'';
  }

  useEffect(()=>{ 
       
    imglesen('BGImage')    
  },[])
  return (
    <>
    <SafeAreaView style={styles.sav} >
      <ImageBackground source={image} resizeMode='cover' style={styles.image}>
        
      {
      Erfolgscheck?
      <Meldungerfolg/>
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
      
      <MiniTopButtonleiste navigation={navigation}/>

      <View style={styles.ContainerFragebogen}> 
      <MiniBogeneinleitung/>


      <View style={{flexDirection:'column', width:'100%',paddingTop:10}}>

        <MiniNameAnschrift/>
        <MiniKommunikation/>
        <MiniBank/>
        <MiniSteuer/>
        <MiniSozial/>
        <MiniStatus/>
        <MiniJANEIN/>
        <MiniKV/>


      </View>
      </View>
      <BottomButtonleiste navigation={navigation} D={PrivateDatenArr} />
      </View>
      </ScrollView>
      </ImageBackground>
    </SafeAreaView>
    </>
  )
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
    InsetSprachButton:{
      alignItems: 'center',
      backgroundColor: '#6b7280',
      padding: 10,
      alignSelf:'center',  
      borderRadius:5, 
      width:'20%', 
    },

})
export default SeiteMinijob