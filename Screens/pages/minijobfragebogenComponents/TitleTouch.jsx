import React, { useEffect, useState } from 'react'
import {TouchableOpacity, Text, StyleSheet} from 'react-native' 
import RightIcon from './../../fragebogencomps/textFeldcomp/RightIcon'

const TitleTouch = (props) => {
  const [farbe,setfarbe]=useState('#16a34a')
  useEffect(()=>{
    setfarbe(props.AGB?'#22c55e':'#6b7280')
  },[props.AGB])
  return (
    <>
    {
      props.S?
      <>
      <TouchableOpacity  onPress={()=>props.F(!props.S)}><RightIcon/>
      <Text style={styles(farbe).Ueberschrift2pressed}>{props.T}</Text>
      <RightIcon S={props.S}/>

      </TouchableOpacity>


</>
      :
      <TouchableOpacity onPress={()=>props.F(!props.S)}>
      <Text style={styles(farbe).Ueberschrift}>{props.T}</Text>
      <RightIcon S={props.S}/>
      </TouchableOpacity>
    }
    </>
  )
}
const styles=(farbe)=>StyleSheet.create({
  Ueberschrift: {
    padding: 10,
    alignSelf: 'center',
    width: '80%',
    backgroundColor: farbe,
    borderWidth: 1,
    textAlign: 'center',
    marginBottom:10,
    
  },
  Ueberschrift2pressed: {
    padding: 10,
    alignSelf: 'center',
    width: '80%',
    backgroundColor: '#0ea5e9',
    borderWidth: 1,
    textAlign: 'center',
    
  },
  
  
})

export default TitleTouch