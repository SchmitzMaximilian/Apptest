import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useContext, useEffect, useState } from 'react';
import  DateTimePicker  from '@react-native-community/datetimepicker';
import { TransactionContext } from '../../../utils/Context';
import SachbearbeitungDatenObject from '../../../utils/Objects/SachbearbeitungDatenObject';

function EnddatumSelect() {
  const [SachbearbeitungDatenArr,setSachbearbeitungDatenArr]=useState(SachbearbeitungDatenObject)
  const [date, setDate] = useState(new Date());
  const [dateText, setDateText] = useState("Befristet bis:")
  const [showdatePicker,setshowdatePicker] = useState(false);
  const [sprache,setzesprache]=useContext(TransactionContext)
 



const handleChange = (event, selectedDate) => { 
  setshowdatePicker(false) 
  const currentDate = selectedDate; 
  setDate(currentDate);
  setDateText(currentDate.toLocaleDateString('de-DE'))
  let Obj=SachbearbeitungDatenArr
  Obj.Enddatum=Intl.DateTimeFormat('de-DE',{dateStyle:'short'}).format(currentDate).toString()
  setSachbearbeitungDatenArr(Obj)
  
    };

    useEffect(() => {
      console.log("Sprache: "+ sprache)

      if(SachbearbeitungDatenArr.Enddatum=="")
        {
          if(!sprache){
              setDateText("Befristet bis:")
          }else if(sprache){
            setDateText("Befristet bis:")
          }
        }
    },[sprache]);

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
    backgroundColor:'#6b728090'

  },

  
})
export default EnddatumSelect