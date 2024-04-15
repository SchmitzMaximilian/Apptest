import { useEffect, useState } from 'react'
import {View,StyleSheet} from 'react-native' 
import LeftIcon from './LeftIcon';
import StyledTextInput from './StyledTextInput'; 
import StyledInputLabel from './StyledInputLabel';
/**
 * Texteingabefeld
 * @param {*} listener usestate  
 * @param {*} setter usestate setter
 * @param {*} placeholder text 
 * @param {*} style style
 * @returns 
 */
export const EingabeFeld=(props)=>{
  const [text,settext]=useState('')  
  useEffect(()=>{
  },[text])
  return(
    <View style={{marginTop:20}}>
        <LeftIcon P={props.Icon}/> 
        <StyledInputLabel P={props.Labname}>Label</StyledInputLabel>
        <StyledTextInput {...props}  />
    </View>
  )
}
const styles = StyleSheet.create({
  
  eingabe:{
    padding: 10,
    paddingHorizontal:15,
    borderWidth:2,
    width:'80%',
    alignSelf:'center',
    borderColor: '#475569',
    borderRadius:6,
    marginVertical:15,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    backgroundColor: '#334155',
    color:'#f8fafc',
    
  },


});
