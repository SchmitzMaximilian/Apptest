import { useState } from 'react'
import {View,Text,Button, TextInput} from 'react-native'

/**
 * Texteingabefeld
 * @param {*} listener usestate  
 * @param {*} setter usestate setter
 * @param {*} placeholder text 
 * @param {*} style style
 * @returns 
 */
export const EingabeFeld=(P)=>{
  const [text,settext]=useState('')

  
  return(
    <>
    <TextInput placeholder={P.P} value={text} placeholderTextColor={'#00DDFF'}    />
    
    </>
  )
}

