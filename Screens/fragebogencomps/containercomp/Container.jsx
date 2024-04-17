import React,{useState} from 'react'
import { Text ,View} from 'react-native'
import { EingabeFeld } from '../textFeldcomp/EingabeFeld'

const Container = (props) => {
  const [Fragebogeneingabe,setFragebogeneingabe]=useState([])
  return (
    <>
    {
      props.S&&(props.Icon.length>0)&&props.Icon.map((item,index)=>(
      <View key={index}>
        <EingabeFeld Icon={item} Labname={props.Labname[index] } SF={setFragebogeneingabe}/>
      </View>
      )) 
    }
    </>
  )
}

export default Container