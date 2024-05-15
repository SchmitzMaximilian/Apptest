import React, { useContext, useEffect, useState } from 'react';
import Justchecking from '../../fragebogencomps/sachbearbeitungsComps/Justchecking'
import { SachbearbeitungTextdataset } from '../../../utils/Sachbearbeitung/SachbearbeitungTextdataset'
import { TransactionContext } from '../../../utils/Context'

function Unterlagencheckliste() {
  const [sprache,setzesprache]=useContext(TransactionContext)
  return (<>
    <Justchecking Bezeichnung={SachbearbeitungTextdataset(sprache?"DE":"EN").NachweisCheckliste.CheckSteuerid}/>
      <Justchecking Bezeichnung={SachbearbeitungTextdataset(sprache?"DE":"EN").NachweisCheckliste.CheckArbeitsvertrag}/>
      <Justchecking Bezeichnung={SachbearbeitungTextdataset(sprache?"DE":"EN").NachweisCheckliste.Erlaubnis}/>
      <Justchecking Bezeichnung={SachbearbeitungTextdataset(sprache?"DE":"EN").NachweisCheckliste.GesundCheck}/>
      <Justchecking Bezeichnung={SachbearbeitungTextdataset(sprache?"DE":"EN").NachweisCheckliste.RVP}/>
      <Justchecking Bezeichnung={SachbearbeitungTextdataset(sprache?"DE":"EN").NachweisCheckliste.Hauptjob}/>
      <Justchecking Bezeichnung={SachbearbeitungTextdataset(sprache?"DE":"EN").NachweisCheckliste.KopieBank}/>
      <Justchecking Bezeichnung={SachbearbeitungTextdataset(sprache?"DE":"EN").NachweisCheckliste.KopieKrankenkasse}/>
      <Justchecking Bezeichnung={SachbearbeitungTextdataset(sprache?"DE":"EN").NachweisCheckliste.KopiePerso}/> 
      </>
  )
}

export default Unterlagencheckliste