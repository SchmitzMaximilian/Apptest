import { StyleSheet, Text, View, SafeAreaView,ImageBackground,TouchableOpacity} from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { TransactionContext } from '../utils/Context'; 
import * as SecureStore from 'expo-secure-store';
import { ScrollView } from 'react-native-gesture-handler';
import {Octicons, Ionicons} from '@expo/vector-icons';
import { Checkboxdataset } from '../utils/Checkboxdataset';
import { Picker } from '@react-native-picker/picker';
import ListeBewerber from './pages/sachbearbeitungtextfeldcomp/ListeBewerber';

function SeiteBewerberauswahl({navigation}) {  
  const [sprache,setzesprache]=useContext(TransactionContext)
  const [image,setimage]=useState({uri: 'https://images.unsplash.com/photo-1622743941533-cde694bff56a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fE5pZ2h0Y2x1YnxlbnwwfHwwfHx8MA%3D%3D'})
  const [selectionArr,setselectionArr]=useState([])
  const [selection,setselection]=useState(0)
  
  
  const imglesen = async (param)=>{
    //loeschen(param)
    const data=await SecureStore.getItemAsync(param);//BGImage
    data?setimage({uri:data.toString()}):'';
  }
  const getData=async (i)=>{
    const restaurant=i+1
    const request ={
      method: 'POST',
      headers: { 'Content-Type' : 'application/json'},
      body: JSON.stringify({
        "query":15,
        "restaurant": restaurant 
      })
    }; 
    const d = await fetch('https://itsnando.com/datenbankapi/index.php', request);
    let e = await d.json();  
    setselectionArr(e)
  }
  useEffect(()=>{ 
    getData(0)
    imglesen('BGImage')
  },[])
  return (
      <SafeAreaView style={styles.sav} >
      <ImageBackground source={image} resizeMode='cover' style={styles.image}>
      <ScrollView style={{backgroundColor: 'transparent'}}>
      <View style={styles.container}>
      <View style={styles.AdminButtonContainer}>

        <TouchableOpacity onPress={()=>navigation.pop()} style={styles.BackButton}> 
        <Ionicons  name={'arrow-back'} color={'#FFFFFF'} style={{marginRight:8}}/>
          <Text  style={{color:'#FFFFFF'} } >Ausloggen</Text>
        </TouchableOpacity>
        <View style={styles.SprachButton}>
        {/*<TouchableOpacity onPress={()=>setzesprache(!sprache)} style={styles.InsetSprachButton} > 
          <Text style={{color:'#FFFFFF'}} >{sprache?'EN':'DE'}</Text>
        </TouchableOpacity>*/}
        </View>
        <TouchableOpacity onPress={()=>navigation.navigate({name:"SeiteMinijob"})} style={styles.AdminButton}> 
          <Text style={{color:'#FFFFFF'}} >Minijob</Text>
        </TouchableOpacity>
      </View>


      <View style={styles.ContainerFragebogen}>

       
      <View style={{borderRadius:2,borderWidth:1,borderColor:'#4b5563', width:'80%',marginLeft:'10%',paddingVertical:10,marginVertical:10,backgroundColor:'#6b728090'}}>
       <Picker style={{color:'#FFF'}}  dropdownIconColor={"#FFF"} selectedValue={selection} multiline={true} numberOfLines={2} 
       onValueChange={(itemValue, itemIndex) =>{setselection(itemValue);getData(itemValue)}}  >
        {
          Checkboxdataset('DE').SubSelectboxenLabel[5].length>0&&Checkboxdataset('DE').SubSelectboxenLabel[5].map((item,index)=>(
            <Picker.Item  key={'pickup'+'index'+item}  color="#000" label={item} value={index} />
  
          ))
        }
      </Picker> 
      </View>
      <ListeBewerber Arr={selectionArr} navigation={navigation}/>

      </View>
      </View>
      </ScrollView>
      </ImageBackground>
      </SafeAreaView>
    
  )
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
export default SeiteBewerberauswahl