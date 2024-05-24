import React,{ useContext, useEffect, useState }  from 'react'
import { StyleSheet, Text, View, TextInput,Button, SafeAreaView, TouchableOpacity,ImageBackground } from 'react-native';
import PersoenlicheDatenObject from '../../../utils/Objects/PersoenlicheDatenObject';
import { TransactionContext } from '../../../utils/Context';
import { Textdataset } from '../../../utils/Textdataset';

/**
 * 
 * navigation.navigate is not a function fehler
 * 
 * 
 */





const BottomButtonleiste=({navigation})=> {
  const [sprache,setzesprache]=useContext(TransactionContext)
  const [PrivateDatenArr,setPrivateDatenArr]=useState(PersoenlicheDatenObject)
  return (
    <View style={styles.AdminButtonContainer}>

      <TouchableOpacity onPress={()=>navigation.navigate({name:"SeiteMinijob"})} style={styles.AdminButton}> 
        <Text style={{color:'#fff'}} >{Textdataset(sprache?"DE":"EN").Buttons.Versenden}</Text>
      </TouchableOpacity>

        <View style={styles.SprachButton}>
        {/*<TouchableOpacity onPress={()=>setzesprache(!sprache)} style={styles.InsetSprachButton} > 
          <Text style={{color:'#FFFFFF'}} >{sprache?'EN':'DE'}</Text>
        </TouchableOpacity>*/}
          </View>
        
        <TouchableOpacity onPress={()=>navigation.navigate({name:"SeiteMinijob"})} style={styles.AdminButton}> 
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