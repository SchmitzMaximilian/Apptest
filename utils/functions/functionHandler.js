import * as SecureStore from 'expo-secure-store';
export async function imglesen(param,setFunction){ 
  const data=await SecureStore.getItemAsync(param);//BGImage
  data?setFunction({uri:data.toString()}):'';
}