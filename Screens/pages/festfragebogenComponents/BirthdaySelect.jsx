import React from 'react'
import { StyleSheet, Text, View, TextInput,Button, SafeAreaView, TouchableOpacity,ImageBackground } from 'react-native';
import { useContext, useEffect, useState } from 'react';
import  DateTimePicker  from '@react-native-community/datetimepicker';
import PersoenlicheDatenObject from '../../../utils/Objects/PersoenlicheDatenObject';

function GBDatumSelect() {
  const [PrivateDatenArr,setPrivateDatenArr]=useState(PersoenlicheDatenObject)
  const [date, setDate] = useState(new Date());
  const [dateText, setDateText] = useState("Geburtsdatum")
  const [showdatePicker,setshowdatePicker] = useState(false);
 
const handleChange = (event, selectedDate) => {  
  const currentDate = selectedDate; 
  setDate(currentDate);
  setDateText(currentDate.toLocaleDateString('de-DE'))
  let Obj=PrivateDatenArr
  Obj.GBDatum=Intl.DateTimeFormat('de-DE',{dateStyle:'short'}).format(currentDate).toString()
  setPrivateDatenArr(Obj)
  setshowdatePicker(false)
    };

  return (
    <>
    <TouchableOpacity style={styles.StyledInputLabel} onPress={()=>setshowdatePicker(true)}>
    <Text style={{color:"white",alignSelf:'center'}}>{dateText}</Text>
      </TouchableOpacity>
      {showdatePicker?
      <DateTimePicker
            display={"default"}
            value={date}
            mode={'date'}
            is24Hour={true}
            onChange={handleChange}
          />
        :
        ""}
    </>
  )
}
const styles = StyleSheet.create({
  StyledInputLabel : {
    color: '#FFF',
    fontSize:16,
    
    textAlign:'left',
    padding: 10,
    
    paddingHorizontal:15,
    borderWidth:2,
    width:'80%',
    alignSelf:'center',
    borderColor: '#475569',
    borderRadius:6,
    marginVertical:30,
    color:'#f8fafc',
    backgroundColor:'#1e40af'

  },

  
})
export default GBDatumSelect