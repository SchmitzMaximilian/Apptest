export const Minijobtextdataset=(p)=>{
  let TextData
  if(p=="DE"){
  TextData={
    "Texte":{
      "Rechtsbelehrung":"Bitte machen Sie nachfolgend vollständige Angaben um spätere Rückfragen und Verzögerungen bei der Sachbearbeitung der Abrechnnungen zu vermeiden. Schäden die durch falsche oder unvollständige Angaben entstehen gehen zu Ihren Lasten.",
      "Bankinfo":"Bei deutschen Bankverbindung wird keine BIC benötigt",
      "BeschreibungJaNeinBox1":"Ich übe eine oder mehrere versicherungspflichtige Hauptbeschäftigungen bei anderen Arbeitgebern aus.(Bitte ggf. Liste beifügen)",
      "BeschreibungJaNeinBox2":"Ich übe neben dieser geringfügigen entlohnten Beschaftigung (Minijob) eine oder mehrere weitere geringfügig entlohnte Beschäftigungen (Minijobs) bei Anderen Arbeitgebern aus. (Bitte ggf. Liste beifügen)",
      "BeschreibungJaNeinBox3":"Die Entgelte aus den weiteren geringfügig entlohnten Beschäftigungen (Minijobs) werden zusammen gerechnet mit dem Verdienst aus dieser Beschäftigung den Betrag von 538,€ im Monat regelmäßig überschreiten",
      "KrankenversicherungNachweis":"(Bitte zwingend einen Nachweis über die private Krankenversicherung erbringen, ohne Nachweis hat diese Angabe keine Bedeutung)",
      "Einverstaendniserklaerung":"Ich versichere, dass die vorstehenden Angaben der Wahrheit entsprechen. Ich verpflichte mich, meinem Arbeitgeber alle Änderungen an meinen vorsthehend erhobenen Daten unverzüglich mitzuteilen. Mir ist bekannt, dass unrichtige Angaben eine bußgeldbewährte Ordnungswidrigkeit nach §111 Abs. 1 Nr.4 SGV IV darstellen und mein Arbeitgeber zudem weitergehende Schäden aus Nachforderungen von Steuer und Sozialversicherung gegen mich geltend machen wird, sofern diese auf Grund meiner Angaben entstehen.",
    },
    "CheckBoxTitel":{
      "":"",
    },
    "SoloCheckboxText":{
      "Steuereinwilligung":"Ich gestatte den Abruf meiner ELStAM ( nur sinvoll, sofern Stkl. 1 bis 4).",
      "Bank":"Barzahlung",
      "VersicherungPrivat":"Ich bin Mitglied oder Familienversichert in einer privaten Krankenversicherung",

    }

  } 
}else{
  TextData={
    "Texte":{
      "Rechtsbelehrung":"Please provide complete information below to avoid later queries and delays in processing the invoices. Any damage caused by incorrect or incomplete information will be borne by you.",
      "Bankinfo":"No BIC is required for German bank details",
      "BeschreibungJaNeinBox1":"I have one or more main jobs that require insurance for other employers. (Please attach a list if necessary)",
      "BeschreibungJaNeinBox2":"Ich übe neben dieser geringfügigen entlohnten Beschaftigung (Minijob) eine oder mehrere weitere geringfügig entlohnte Beschäftigungen (Minijobs) bei Anderen Arbeitgebern aus. (Bitte ggf. Liste beifügen)",
      "BeschreibungJaNeinBox3":"The wages from other low-paid jobs (mini-jobs), taken together with the earnings from this job, will regularly exceed the amount of €538 per month",
      "KrankenversicherungNachweis":"(Please provide proof of private health insurance; without proof, this information has no meaning)",
      "Einverstaendniserklaerung":"I certify that the above information is true. I undertake to inform my employer immediately of any changes to my data collected above. I am aware that incorrect information constitutes an administrative offense punishable by a fine in accordance with Section 111 Paragraph 1 No. 4 SGV IV and that my employer will also assert further damages against me from additional tax and social security claims if these arise based on my information.",
    },
    "CheckBoxTitel":{
      "":"",
    },
    "SoloCheckboxText":{
      "Steuereinwilligung":"I allow my ELStAM to be accessed (only useful if tax class 1 to 4).",
      "Bank":"cash payment",
      "VersicherungPrivat":"I am a member or family member of a private health insurance company",

    }

  } 
}

return TextData;
 
}