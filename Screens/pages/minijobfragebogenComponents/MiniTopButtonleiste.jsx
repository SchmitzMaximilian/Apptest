import React,{ useContext, useEffect, useState }  from 'react'
import { StyleSheet, Text, View,  TouchableOpacity,} from 'react-native';
import { TransactionContext } from '../../../utils/Context';


const MiniTopButtonleiste=({navigation})=> {
  const [sprache,setzesprache]=useContext(TransactionContext)
  return (
    <View style={styles.AdminButtonContainer}>

      <TouchableOpacity onPress={()=>navigation.navigate({name:"LoginScreenMini"})} style={styles.AdminButton}> 
        <Text style={{color:'#fff'}} >Admin</Text>
      </TouchableOpacity>

        <View style={styles.SprachButton}>
        <TouchableOpacity onPress={()=>setzesprache(!sprache)} style={styles.InsetSprachButton} > 
          <Text style={{color:'#FFFFFF'}} >{sprache?'EN':'DE'}</Text>
        </TouchableOpacity>
        </View>
        
        <TouchableOpacity onPress={()=>navigation.navigate({name:"FESTPERSONALFB"})} style={styles.AdminButton}> 
          <Text style={{color:'#FFFFFF'}} >Festpersonal</Text>
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
export default MiniTopButtonleiste