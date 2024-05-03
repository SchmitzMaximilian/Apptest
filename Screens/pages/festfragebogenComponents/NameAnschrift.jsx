import React from 'react';
import LangOb from '../../../lang/lang';


const NameAnschrift = () => {
  return (
     <>
     {/**Name und Anschrift */}  
      <TitleTouch AGB={tab1ausgefuellt} F={settab1} S={tab1} T={sprache?LangOb.Angabenueberschriften.Personendaten.DE:LangOb.Angabenueberschriften.Personendaten.EN} />
      <SelectPicker S={sprache?'DE':'EN'} V={tab1} I={0} SV={PrivateDatenArr} SF={setPrivateDatenArr}/>
      <Container W={submitdata1} Icon={Dataset(sprache?'DE':'EN').PerData.EingabefelderIcons} Labname={Dataset(sprache?'DE':'EN').PerData.Eingabefelder} F={settab1} S={tab1}  SV={PrivateDatenArr} SF={setPrivateDatenArr} /> 
      {
        tab1?
        <> 
        <TouchableOpacity onPress={()=>submitdata1()} style={styles.Abspeichern}>
        <Text style={{color:'black'}}>Speichern</Text>
    </TouchableOpacity>
        </>
        :
        ""
      }
  </>
  )
}

export default NameAnschrift