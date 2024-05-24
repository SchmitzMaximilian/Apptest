import React from 'react'
import { TouchableOpacity,Text,StyleSheet } from 'react-native'
function MinispeicherButton(props) {
  return (
    <TouchableOpacity onPress={()=>props.SDF()} style={styles.Abspeichern}>
      <Text style={{color:'black'}}>Speichern</Text>
      </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  Abspeichern:{
    alignSelf: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#22c55e',
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

export default MinispeicherButton