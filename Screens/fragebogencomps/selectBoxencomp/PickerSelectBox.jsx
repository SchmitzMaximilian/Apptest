import {Picker} from '@react-native-picker/picker';
import React, { Fragment, useContext, useEffect, useState } from 'react';
import {StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { TransactionContext } from '../../../utils/Context'; 
import { Checkboxdataset } from '../../../utils/Checkboxdataset';

const SelectPicker = (props)=> {
const [SelectedLanguage, setSelectedLanguage] = useState();
const [sprache,setzesprache]=useContext(TransactionContext);
console.log(props)
useEffect(()=>{ 
  
},[])
return( <Fragment>
  {
    props.V?
    <><Fragment>
   {
    props.S?
    <>
    <Text style={styles.Textelemente}>{Checkboxdataset(props.S).TopSelectboxenLabel[props.I]}</Text>
    <View style={{borderRadius:2,borderWidth:1,borderColor:'#4b5563', width:'80%',marginLeft:'10%'}}>
     <Picker style={{color:'#FFF'}}  dropdownIconColor={"#FFF"} selectedValue={SelectedLanguage} multiline={true} numberOfLines={2} onValueChange={(itemValue, itemIndex) =>
    setSelectedLanguage(itemValue)
  }  >
      {
        Checkboxdataset(props.S).SubSelectboxenLabel[props.I].length>0&&Checkboxdataset(props.S).SubSelectboxenLabel[props.I].map((item,index)=>(
          <Picker.Item  key={'pickup'+index+item}  color="#000" label={item} value={item} />

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
  },
});