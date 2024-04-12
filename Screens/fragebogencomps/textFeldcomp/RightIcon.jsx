import React, { useEffect } from "react";
import { View,StyleSheet,TouchableOpacity } from "react-native";
import {Octicons, Ionicons} from '@expo/vector-icons';


const RightIcon = (props) => {
  useEffect(()=>{

  },[])
  return (
    <TouchableOpacity style={styles.RightIcon} >
      <Octicons name={'multi-select'} size={25} color={'#7a7c7f'} />
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