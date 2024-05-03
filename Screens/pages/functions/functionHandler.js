import * as SecureStore from 'expo-secure-store';
export async function imglesen(param){
  //loeschen(param)
  const data=await SecureStore.getItemAsync(param);//BGImage
  if(data) return ({uri:data.toString()})
}