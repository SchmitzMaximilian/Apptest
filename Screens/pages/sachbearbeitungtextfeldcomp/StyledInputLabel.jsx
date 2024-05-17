import React from 'react'
import { Text,StyleSheet } from 'react-native'

const StyledInputLabel = (props) => {
  return (
    <Text style={style.Label}>- {props.P}</Text>
  )
}
const style=StyleSheet.create({
  Label:{
    color: '#FFF',
    fontSize:18,
    marginLeft:80,
    marginBottom:'4px',
    textAlign:'left',
    color:'#94a3b8', 
  },
})


export default StyledInputLabel