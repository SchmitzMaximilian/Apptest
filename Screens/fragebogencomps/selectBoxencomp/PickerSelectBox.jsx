import {Picker} from '@react-native-picker/picker';
import React, { Fragment, useContext, useEffect, useState } from 'react';
import {StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { TransactionContext } from '../../../utils/Context'; 
import { Checkboxdataset } from '../../../utils/Checkboxdataset';

const SelectPicker = (props)=> {
const [SelectedLanguage, setSelectedLanguage] = useState();
const [sprache,setzesprache]=useContext(TransactionContext); 
const selectionHandler=(I)=>{
  if(props.I==4){ 
    setSelectedLanguage(I)
    let O=props?.SV

    O.ArbeitsGrundlage=I+1
    
    props.SF(O) 
  }else if(props.I==5){ 
    setSelectedLanguage(I)
    let O=props?.SV

    O.BewerberStandort=I+1
    
    props.SF(O) 
  }else{   
    setSelectedLanguage(I)
    let O=props?.SV

    O.Geschlecht=I+1
    
    props.SF(O) 
  }
}
useEffect(()=>{ 
  selectionHandler(0)
},[])
return( <Fragment>
  {
    props.V?
    <><Fragment>
   {
    props.S?
    <>
    <Text style={styles.Textelemente}>{Checkboxdataset(props.S).TopSelectboxenLabel[props.I]}</Text>
    <View style={{borderRadius:2,borderWidth:1,borderColor:'#4b5563', width:'80%',marginLeft:'10%',paddingVertical:10,marginVertical:10,backgroundColor:'#6b728090'}}>
     <Picker style={{color:'#FFF'}}  dropdownIconColor={"#FFF"} selectedValue={SelectedLanguage} multiline={true} numberOfLines={2} 
     onValueChange={(itemValue, itemIndex) =>selectionHandler(itemValue)}  >
      {
        Checkboxdataset(props.S).SubSelectboxenLabel[props.I].length>0&&Checkboxdataset(props.S).SubSelectboxenLabel[props.I].map((item,index)=>(
          <Picker.Item  key={'pickup'+index+item}  color="#000" label={item} value={index} />

        ))
      }
    </Picker> 
    </View>
    </>
    :
    ''
    }   
  </Fragment>
    </>
    :

    ""

  
  }</Fragment>
  
)
};
export default SelectPicker

const styles = StyleSheet.create({
  
  Textelemente:{
    color:'#fff',
    paddingHorizontal:80,
    marginVertical:5,
    paddingTop:20,
  },
});