import { useEffect, useState } from 'react'
import {View,Text,Button, TextInput, StyleSheet} from 'react-native'
import {Octicons, Ionicons} from '@expo/vector-icons';
import LeftIcon from './LeftIcon';
import StyledTextInput from './StyledTextInput'; 
import StyledInputLabel from './StyledInputLabel';
import {MdDelete} from 'react-icons'
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
  const [showPass,setshowPass]=useState(false)
  console.log(props.Icon) 
  return(
    <View style={{marginTop:20}}>
        {
          props.Icon=="x-circle-fill"?
          <LeftIcon P={"x-circle-fill"}/> 
          :
          <LeftIcon P={props.Icon}/> 
        }
        <StyledInputLabel P={props.Labname}>Label</StyledInputLabel>
        <StyledTextInput {...props} P={showPass} S={setshowPass} SF={props.SF}/>
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
