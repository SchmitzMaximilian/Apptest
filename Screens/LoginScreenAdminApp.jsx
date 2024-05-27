import { View, StyleSheet, Text, TextInput, Pressable,ImageBackground, TouchableOpacity} from "react-native"
import { Feather } from '@expo/vector-icons';
import React, { useContext, useEffect, useState } from 'react';
import CheckBox from 'expo-checkbox';
import * as SecureStore from 'expo-secure-store';
import { sha256 } from "node-forge";
export default function LoginScreenAdminApp({navigation}) {
    const [image,setimage]=useState({uri: 'https://images.unsplash.com/photo-1622743941533-cde694bff56a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fE5pZ2h0Y2x1YnxlbnwwfHwwfHx8MA%3D%3D'})


    const [hasMailError, sethasMailError]=useState(false);
    const [mail, setMail]=useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [isChecked, setChecked] = useState(false)
    const [isPressed, setIsPressed] = useState(false)
    

     async function handleSubmit (mail, password,id) {
      sethasMailError(false)
      let Hashedmail=sha256.create().update(mail.trim().toString().toLowerCase()).digest().toHex()
      let Hashedpass=sha256.create().update(password.trim().toString().toLowerCase()).digest().toHex() 
      const request ={
        method: 'POST',
        headers: { 'Content-Type' : 'application/json'},
        body: JSON.stringify({
          "query": 16,//ändern
          "mail": Hashedmail,
          "pass": Hashedpass  
        })
      };
      const d = await fetch('https://itsnando.com/datenbankapi/index.php', request);
      let e = await d.json();
      console.log(e)
        if(e==true){
        navigation.navigate({name:"Startadmin"});
        }else{
          sethasMailError(true)
          
        }
     }
     const imglesen = async (param)=>{
        //loeschen(param)
        const data=await SecureStore.getItemAsync(param);//BGImage
        data?setimage({uri:data.toString()}):'';
      }
     useEffect(()=>{ 
          
        imglesen('BGImage')    
      },[])


    return(
<ImageBackground source={image} resizeMode='cover' style={styles.image}>
        <View style={styles.container}>
            <View style={[styles.component,{}]} >
                    
                    <View style={{width:"85%" }}>
                        <Text style={{color:'white', fontSize:20, textDecorationLine: 'underline'}}>LOGIN</Text>
                        <Text style={{color:'white', overflow:"scroll"}}>E-Mail</Text>

                        <View style={{flexDirection:'row-reverse',alignSelf:"flex-start"}} >
                            <TextInput textContentType="emailAddress" defaultValue={mail} onChangeText={(value)=>setMail(value)} style={[styles.input, {width:"100%"},hasMailError?{borderColor: 'red'}:""]} placeholder={"E-Mail-Adresse"}/>
                            <Feather name="mail" style={{position:'absolute', padding: 10, alignSelf:"center", backgroundColor:'rgba(0,0,0,0)'}} size={24} color="rgba(0,0,0,0.5)" /> 
                        </View>

                        <Text style={{color:'white', overflow:"scroll"}}>Passwort</Text>

                        <View style={{flexDirection:'row-reverse',alignItems: "center"}} > 
                            <TextInput secureTextEntry={!showPassword} textContentType='password' defaultValue={password} onChangeText={(value)=>setPassword(value)} style={[styles.input, {width:"100%"},hasMailError?{borderColor: 'red'}:""]} placeholder={"Passwort"}/>
                            <Pressable onPress ={()=>setShowPassword(!showPassword)} style={[styles.button, {position:'absolute', backgroundColor:'rgba(0,0,0,0)'}]}>
                                {!showPassword?<Feather name="eye" size={24} color="rgba(0,0,0,0.5)" />:<Feather name="eye-off" size={24} color="rgba(0,0,0,0.5)" /> }
                            </Pressable>    
                        </View>
                        
                        
                        

                        <Pressable onPress ={()=>handleSubmit(mail,password)} onPressIn={()=>setIsPressed(true)} onPressOut={()=>setIsPressed(false)} style={!isPressed?[styles.button, {marginTop:15, backgroundColor:'green', width:"100%"}]:[styles.button, {marginTop:15, backgroundColor:'green', width:"100%", opacity:0.5,}]} >
                            <Text style = {[styles.title]}>{"Anmelden"}</Text> 
                        </Pressable>    

                    
                    </View>
            </View>
            <TouchableOpacity onPress={()=>navigation.navigate({name:"FESTPERSONALFB"})} style={styles.AdminButton}> 
          <Text style={{color:'#FFFFFF'}} >Personalfragebogen</Text>
        </TouchableOpacity>
        </View>
               </ImageBackground>
)

}


        
    






const styles = StyleSheet.create({
    image:{
        flex: 1,
        justifyContent: 'center',
        
           
        zIndex: 50,
      },
    
    container: {
        justifyContent: 'center',
        alignItems:"center",
        flex: 1,
        backgroundColor:"transparent"
        
      },

      button: {
        backgroundColor: 'dodgerblue',
        padding: 10,
        borderRadius: 10,
        
    },
    
    title: {
        color: 'white',
        textAlign: 'center'
    }, 
    paper: {
          position: "absolute",
          top:40,
          width: '98%',
          height: '90%',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0,15,40,0.82)',
          borderWidth: 1,
         
          borderColor: 'rgba(255,255,255,0.3)',
          borderRadius: 10,
      },
      AdminButton:{
        alignItems: 'center',
        backgroundColor: '#1d4ed8',
        padding: 10,
        height:'auto',
        
        alignSelf:'center',
        marginTop:20,
        borderRadius:5,
        borderTopColor:'#1e3a8a',
        borderTopWidth:2,
        marginLeft:5,
        borderBottomColor:'#1e3a8a',
        borderBottomWidth:2,
        width:'80%', 
      },

    component: {
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(100,100,100,0.82)',
          borderWidth: 1,
          borderColor: 'rgba(255,255,255,0.3)',
          borderRadius: 10,
          borderRadius:1,
          marginVertical: 10,
          paddingVertical:10,
          width:"95%", 
          flexDirection:"row"
    },
          
     
      input: {
        padding: 8,
        color:'grey', 
        borderWidth: 1, 
        borderRadius: 5, 
        borderColor: 'grey', 
        width: '70%',
        backgroundColor:'white',
      },

    text:{
      color:"white"
    }
  });
  