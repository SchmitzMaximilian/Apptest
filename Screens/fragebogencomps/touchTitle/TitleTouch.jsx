import React from 'react'
import {TouchableOpacity, Text, StyleSheet} from 'react-native' 
import RightIcon from '../textFeldcomp/RightIcon'

const TitleTouch = (props) => {
  return (
    <>
    {
      props.S?
      <>
      <TouchableOpacity  onPress={()=>props.F(!props.S)}><RightIcon/>
      <Text style={styles.Ueberschrift2pressed}>{props.T}</Text>
      <RightIcon S={props.S}/>

      </TouchableOpacity>


</>
      :
      <TouchableOpacity onPress={()=>props.F(!props.S)}>
      <Text style={styles.Ueberschrift}>{props.T}</Text>
      <RightIcon S={props.S}/>
      </TouchableOpacity>
    }
    </>
  )
}
const styles=StyleSheet.create({
  Ueberschrift: {
    padding: 10,
    alignSelf: 'center',
    width: '80%',
    backgroundColor: '#6b7280',
    borderWidth: 1,
    textAlign: 'center',
    
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