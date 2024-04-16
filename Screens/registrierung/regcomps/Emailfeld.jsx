import React, { Fragment, useEffect, useState } from 'react' 
import { EingabeFeld } from './Comps'
import { View } from 'react-native-ui-lib'

const Emailfeld = (props) => { 
  console.log(props.Arr)
  const [clap,setclap]=useState(true)

  const deletFeld=(emailfeldindx)=>{
    let altarr = [...props.Arr]
    setclap(false)
    console.log("Initial Array: "+altarr)
    let index = altarr.findIndex((value => emailfeldindx==value))
    if(index > -1) 
    {
     altarr.splice(index, 1)
      console.log("GREAT SUCCESS :"+altarr)
      props.changeArray(altarr)
    }    
    else console.log('item not found')    
  }

  useEffect(()=>{
    console.log(props)

  },[props?.Arr?.length])
  return (
  <>
  {
    props?.Arr?.length>0?
    <>
    {
      props?.Arr?.map((item,index)=>(
        
        
        <EingabeFeld customRightPress={()=>deletFeld(index)} key={index}   Icon={'x-circle-fill'}     Labname={'E-mail Adresse'}/>
        
      ))
    }
    </>
    :''
  }
  </> 
  )
}

export default Emailfeld