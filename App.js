
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import React, { useEffect, useState } from 'react';
import Navbar from './Components/Navbar';
import { TransactionProvider } from './utils/Context';
import * as SecureStore from 'expo-secure-store';
import RegisterStack from './Screens/registrierung/RegisterStack';

/**

async function save(key, value) {
  await SecureStore.setItemAsync(key, value);
}

async function getValueFor(key) {
  let result = await SecureStore.getItemAsync(key);
  if (result) {
    alert("🔐 Here's your value 🔐 \n" + result);
  } else {
    alert('No values stored under that key.');
  }
}



 */
export default function App() { 
  const[isAdmin,setisAdmin]=useState(true);/*true für Login screen false für Bogen */
  const loeschen = async (param)=>{
    await SecureStore.deleteItemAsync(param)
  }
  const lesen = async (param)=>{
    //loeschen(param)
    const data=await SecureStore.getItemAsync(param);
    return data;
  }
  const speichern = async (key,param)=>{
    if(await SecureStore.setItemAsync(key, param)){
      return true;
    }else{
      return false;
    }
  }
  const componentWillMount=async()=>{     
     const data= await lesen('Admin')
     console.log('Appjs' +data)
    if(data===null){  
      setisAdmin(true)
  }else{
      setisAdmin(false)
    }
  } 
  useEffect(()=>{
    //speichern('Admin',"true")
    //speichern('BGImage','https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YnVpc25lc3N8ZW58MHx8MHx8fDA%3D');
    componentWillMount()
  },[])
  return (
 <TransactionProvider>
  {
    isAdmin?
    <RegisterStack />
    :
    <Navbar  />
  }
</TransactionProvider> 


  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    height:'100%',
    width:'100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
