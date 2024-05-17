import React, { useEffect } from "react";
import { View,StyleSheet,TouchableOpacity } from "react-native";
import {Octicons, Ionicons} from '@expo/vector-icons';


const RightIcon = (props) => {
  let pressFunction = null
  pressFunction = props.customOnPress
  useEffect(()=>{
console.log(props)
  },[])
  return (
    <TouchableOpacity style={styles.RightIcon} onPress={()=>{pressFunction!=null?pressFunction():props.F(!props.S)}}>
      {
        props.P=="x-circle-fill"?
        <Ionicons name={'remove-circle'} size={25} color={'#7a7c7f'} />
        :
        <Ionicons name={props.S?'eye-off':'eye'} size={25} color={'#7a7c7f'} />

      }
        {/*<Ionicons name={props.S?'md-eye-off':'md-eye'} size={25} color={'#7a7c7f'} />console.log(props)*/}
      </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  RightIcon: {
    right: 90,
    top:55,
    position:'absolute',
    zindex:0
  },


});

export default RightIcon