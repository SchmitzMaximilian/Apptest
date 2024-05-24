export const SachbearbeitungTextdataset=(p)=>{
	let SachtextData
	if(p=="DE"){
	SachtextData={
    "Titel":{
      "Zeiten":"Angaben der Sachbearbeitung / Arbeitgeber",
      "Lohn":"Angaben zur Entlohnung",
      "Checkliste":"Unterlagen-Check"
    },


		"Feldname":{
			"Eintrittsdatum":"Eintrittsdatum:",
			"Enddatum":"Befristet bis:",
			"Job":"als (Tätigkeit):",
			"ZeitGesamt":"wöchentliche Arbeitszeit (Stunden):",
			"ZeitTag":"Regel-Wochentage:",
			"Urlaub":"Jahresurlaub (Tage):",
      "Stunden":"Stunden",
			"Mo":"Montag",
			"Di":"Dienstag",
			"Mi":"Mittwoch",
			"Do":"Donnerstag",
			"Fr":"Freitag",
			"Sa":"Samstag",
			"So":"Sonntag",
			"Sl":"Stundenlohn",
			"Fl":"Festlohn",
			"Fg":"Festgehalt",
			"A":"Alle",
			"uebliche":"Betriebsübliche",
			"Besondere":"Besondere",

},
		"Entlohnungtitel":{
			"Lohn":"Grundentlohnung",
			"Zuschlag":"SFN-Zuschläge",
},
		"NachweisCheckliste":{
			"CheckSteuerid":"Steuer-ID",
			"CheckArbeitsvertrag":"Arbeitsvertrag (es besteht grundsätzliche Vertragspflicht seit 2006)",
			"Erlaubnis":"Aufenthalts- oder Arbeitserlaubnis bei Nicht-EU/EWR-Personen",
			"GesundCheck":"Gesundheitszeugnis (bei Mitarbeitern in Lebensmittelverarbeitung und Gesundheitswesen)",
			"KopieBank":"Kopie der Bankkarte",
			"KopiePerso":"Kopie des Personalausweis",
			"KopieKrankenkasse":"Krankenversicherung Nachweis von Privatversicherung",
			"RVP":"Antrag auf Befreiung von der RV-Pflicht",
			"Hauptjob":"Erklärung über weitere Arbeitsverhältnisse (falls nach Seite 1 notwendig)",
			"ELStAM":"ELStaM-Anmeldung, wenn Steuerklasse 1-4",
},

}
}else{
SachtextData={
  "Titel":{
    "Zeiten":"Angaben der Sachbearbeitung / Arbeitgeber",
    "Lohn":"Angaben zur Entlohnung",
    "Checkliste":"Unterlagen-Check"
  },


  "Feldname":{
    "Eintrittsdatum":"Eintrittsdatum:",
    "Enddatum":"Befristet bis:",
    "Job":"als (Tätigkeit):",
    "ZeitGesamt":"wöchentliche Arbeitszeit (Stunden):",
    "ZeitTag":"Regel-Wochentage:",
    "Urlaub":"Jahresurlaub (Tage):",
    "Stunden":"Stunden",
    "Mo":"Montag",
    "Di":"Dienstag",
    "Mi":"Mittwoch",
    "Do":"Donnerstag",
    "Fr":"Freitag",
    "Sa":"Samstag",
    "So":"Sonntag",
    "Sl":"Stundenlohn",
    "Fl":"Festlohn",
    "Fg":"Festgehalt",
    "A":"Alle",
    "uebliche":"Betriebsübliche",
    "Besondere":"Besondere",

},
  "Entlohnungtitel":{
    "Lohn":"Grundentlohnung",
    "Zuschlag":"SFN-Zuschläge",
},
  "NachweisCheckliste":{
    "CheckSteuerid":"Steuer-ID",
    "CheckArbeitsvertrag":"Arbeitsvertrag (es besteht grundsätzliche Vertragspflicht seit 2006)",
    "Erlaubnis":"Aufenthalts- oder Arbeitserlaubnis bei Nicht-EU/EWR-Personen",
    "GesundCheck":"Gesundheitszeugnis (bei Mitarbeitern in Lebensmittelverarbeitung und Gesundheitswesen)",
    "KopieBank":"Kopie der Bankkarte",
    "KopiePerso":"Kopie des Personalausweis",
    "KopieKrankenkasse":"Krankenversicherung Nachweis von Privatversicherung",
    "RVP":"Antrag auf Befreiung von der RV-Pflicht",
    "Hauptjob":"Erklärung über weitere Arbeitsverhältnisse (falls nach Seite 1 notwendig)",
    "ELStAM":"ELStaM-Anmeldung, wenn Steuerklasse 1-4",
},

}
}
return SachtextData
}