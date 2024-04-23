import React,{useState} from 'react'
import { Text ,View,StyleSheet,TouchableOpacity} from 'react-native'
import { EingabeFeld } from '../textFeldcomp/EingabeFeld'

const Container = (props) => {   

  return (
    <>
    {
      props.S&&(props.Icon.length>0)&&props.Icon.map((item,index)=>(
      <View key={index}>
        <EingabeFeld Icon={item} Labname={props.Labname[index] }  SV={props.SV} SF={props.SF}/>
      </View>
      )) 
    }
    
    </>
  )
}
const style=StyleSheet.create({
  Abspeichern:{
    alignSelf: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#166534',
    padding: 10,
    height:'auto',    
    borderRadius:5,
    borderTopColor:'#1e3a8a',
    borderTopWidth:2,
    borderBottomColor:'#1e3a8a',
    borderBottomWidth:2,
    width:'25%',
    marginHorizontal: '10%',      
    marginVertical: 30,      
  },
})
export default Container