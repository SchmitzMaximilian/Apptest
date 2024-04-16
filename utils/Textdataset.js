export const Textdataset=(p)=>{
  let TextData
  if(p=="DE"){
  TextData={
    "Texte":{
      "Rechtsbelehrung":"Bitte machen Sie nachfolgend vollständige Angaben um spätere Rückfragen und Verzögerungen bei der Sachbearbeitung der Abrechnungen zu vermeiden. Schäden die durch falsche oder unverständliche Angaben entstehen gehen zu Ihren Lasten.",
      "KrankenversicherungNachweis":"Privat : Krankenversicherte fügen bitte Nachweise über die Beitragshöhe, die Basisgrundversicherung und ggf. das Bestehen einer Tagesgeldversicherung bei",
      "SteuerHinweis":"Ihre immer 11stellige Steuer-ID finden Sie auf einem Anschreiben des Bundeszentralamtes für Steuern sowie Ihrem Einkommensteuerbescheid.",
      "SteuerKlasseNachweis":"Soweit Sie keine Steuer-ID angeben, ist ein gültiger Ersatzbeleg des zuständigen Finanzamts beizufügen, der reine Ausdruck der ELStAM ist nicht ausreichend. Ohne ID oder Gültige Nachweise wird die Versteuerung nach Steuerklasse 6(Maximalsteuersatz) vorgenommen",
      "Einverstaendniserklaerung":"Ich versichere, dass die vorstehenden Angaben der Wahrheit entsprechen. Ich verpflichte mich, meinem Arbeitgeber alle Änderungen an meinen vorsthehend erhobenen Daten unverzüglich mitzuteilen. Mir ist bekannt, dass unrichtige Angaben eine bußgeldbewährte Ordnungswidrigkeit nach §111 Abs. 1 Nr.4 SGV IV darstellen und mein Arbeitgeber zudem weitergehende Schäden aus Nachforderungen von Steuer und Sozialversicherung gegen mich geltend machen wird, sofern diese auf Grund meiner Angaben entstehen.",
      "BicHinweis":"Bei deutschen Bankverbindungen wird keine Bic benötigt",
      "Zahlung":"Falls keine Kontoverbindung: ",
    },
    "CheckBoxTitel":{

      "TitelSchule": "Höchster allgemeinbildender Schulabschluss [TS-6](Pflichtangabe, Zutreffendes bitte makieren)",
      "TitelAusbildung": "Höchster beruflicher Ausbildungsabschluss [TS 7](Pflichtangabe, Zutreffendes bitte makieren)",
      "TitelKrankenversicherunsart":"Art der Krankenversicherung (Pflichtangabe, zutreffendes makieren)",
    },
    "SoloCheckboxText":{
      "Sozial":"SV-Nummer nicht vorhanden",
      "Bank":"Barzahlung",
      "Steuer":"Ich erkläre, nicht im Besitz einer Steuer-ID zu sein"
    },
  } 
}else{
  TextData={
    "Texte":{
    "Rechtsbelehrung":"Please provide complete information below in order to answer any questions you may have later To avoid delays in the processing of invoices. Any damage caused by incorrect or incomprehensible information will be borne by you.",
    "KrankenversicherungNachweis":"Private: Those with health insurance should provide proof of the amount of the contribution Basic basic insurance and, if necessary, the existence of daily allowance insurance",
    "SteuerHinweis":"You can find your 11-digit tax ID on a cover letter from Federal Central Tax Office and your income tax assessment.",
    "SteuerKlasseNachweis":"If you do not provide a tax ID, a valid replacement receipt from the responsible tax office must be enclosed, the pure expression of the ELStAM is not sufficient. Without ID or valid proof, taxation will be based on tax class 6(maximum tax rate).",
    "Einverstaendniserklaerung":"I certify that the above information is true. I undertake to inform my employer immediately of any changes to my data collected above. I am aware that incorrect information constitutes an administrative offense punishable by a fine in accordance with Section 111 Paragraph 1 No. 4 SGV IV and that my employer will also assert further damages against me from additional tax and social security claims if these arise based on my information.",
    "BicHinweis":"Bic is not required for German bank details",
    "Zahlung":"If no account details:",
  },
  "CheckBoxTitel":{

    "TitelSchule": "Highest general school leaving certificate [TS-6](Mandatory information, please mark as applicable)",
    "TitelAusbildung": "Highest professional training qualification [TS 7](Mandatory information, please mark as applicable)",
    "TitelKrankenversicherunsart":"Type of health insurance (mandatory information, mark as applicable)",
  },
  "SoloCheckboxText":{
    "Sozial":"SV number not available",
    "Bank":"Cash payment",
    "Steuer":"I declare that I do not have a tax ID"
  },
  } 
}

return TextData;
 
}