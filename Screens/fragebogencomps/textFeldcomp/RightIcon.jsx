import React, { useEffect, useState } from "react";
import { View,StyleSheet,TouchableOpacity } from "react-native";
import {Octicons, Ionicons} from '@expo/vector-icons';


const RightIcon = (props) => {
  
  useEffect(()=>{console.log(props)

  },[])
  return (
    <TouchableOpacity style={styles.RightIcon} >
      {
        props.S?
        <><Octicons name={'arrow-down'} size={25} color={'#fff'} />
        </>
        :
        <><Octicons name={'arrow-right'} size={25} color={'#fff'} />
        </>
      }
      
        {/*<Ionicons name={props.S?'md-eye-off':'md-eye'} size={25} color={'#7a7c7f'} />console.log(props)*/}
      </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  RightIcon: {
    right: 90,
    top:10,
    position:'absolute',
    zindex:0
  },


});

export default RightIcon