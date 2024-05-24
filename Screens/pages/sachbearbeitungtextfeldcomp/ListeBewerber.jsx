import React, {useContext, useEffect, useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView,ImageBackground,TouchableOpacity} from 'react-native';
import {Octicons,Ionicons} from '@expo/vector-icons';
const ListeBewerber = (props) => {
  
  console.log(props)
  const pruefenWeiterleitung = (id, arbeitsart)=>{
    console.log(id,arbeitsart)

    if(arbeitsart==0){
    props.navigation.navigate({name:"SeiteSachbearbeitungMinijob",params:{user: id}})}
    else{
      props.navigation.navigate({name:"Seite2",params:{user: id}})
    }
  }
  useEffect(()=>{

  },[props])
  return (
      <View style={{borderRadius:2,borderWidth:1,borderColor:'#4b5563', width:'80%',marginLeft:'10%',paddingVertical:10,marginVertical:10,backgroundColor:'#6b728090'}}>
    {
      props.Arr.length>0?
        <>
        {
          props.Arr.map((item,index)=>(
            <TouchableOpacity key={'bewerber'+index} onPress={()=>pruefenWeiterleitung(item.id,item.arbeitszeit)}>
            <View key={'user'+item+index} style={styles.User}>
              <Octicons style={{position:'absolute',left:15, top:10}} name={'person'} size={25}  color={'#FFF'} />
            <Text style={styles.TextElemente}>{item.arbeitszeit==0?'Minijob':item.arbeitszeit==1?'Vollzeit':item.arbeitszeit==2?'Teilzeit':'(über 520€)'} {item.bwvorname} {item.bwnachname}, {item.geschlecht==1?'weiblich':item.geschlecht==2?'männlich':item.geschlecht==3?'divers':'unbestimmt'} </Text>
            </View>
            </TouchableOpacity>
          ))
        }
        </>  
      : 
       <Text style={styles.TextElemente}>Keine Einträge vorhanden</Text>  
    }
      </View>
  )
}
const styles = StyleSheet.create({
   
    TextElemente:{
      color:'#fff',
      paddingHorizontal:80,
      marginVertical:5,
      fontSize:15,
    }, 
    
    User:{
      backgroundColor:'#111111',
      color:'#111',
      position:'relative',
      flex:1, 
      paddingVertical:8,
      marginVertical:5,
    },  

});
export default ListeBewerber