import React from 'react'
import { Text ,View} from 'react-native'
import { EingabeFeld } from '../textFeldcomp/EingabeFeld'

const Container = (props) => {
  return (
    <>
    {
      props.S&&(props.Icon.length>0)&&props.Icon.map((item,index)=>(
      <View>
        <EingabeFeld Icon={item} Labname={props.Labname[index]}/>
      </View>
      )) 
    }
    </>
  )
}

export default Container