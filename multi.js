exports.init = function(SARAH, SARAH2){
setTimeout(function(){
    SARAH.speak("Initialisation terminée");
}, 1000);﻿
 }﻿
 
exports.action = function(data, callback, config, SARAH) {
  
var exec = require('child_process').exec;
 
switch(data.val) {
	  
	 

	  case "playsalon":
	  var process = '%CD%/plugins/multi/lieux/salon/playsalon.bat';
	  var Txt = new Array; 
			Txt[0] = "je mai la musique dans le salon";
			Txt[1] = "musique en cour de transfert veuillez patienter";
			Txt[2] = "passage en ecoute dans le salon";
			Txt[3] = "strim up dans le salon";
			Txt[4] = "diffusion en cour dans le salon";
	  break;
	  
	  	  case "play10salon":
	  var process = '%CD%/plugins/multi/lieux/salon/play10salon.bat';
	  var Txt = new Array; 
			Txt[0] = "je mai la musique dans le salon a di pour sans";
			Txt[1] = "musique a di pour sans en cour de transfert veuillez patienter";
			Txt[2] = "passage en ecoute dans le salon a di pour sans";
			Txt[3] = "strim up dans le salon a di pour sans";
			Txt[4] = "diffusion en cour dans le salon a di pour sans";
	  break;
	  
	  
	  	  case "play20salon":
	  var process = '%CD%/plugins/multi/lieux/salon/play20salon.bat';
	  var Txt = new Array; 
			Txt[0] = "je mai la musique dans le salon a vin pour sans";
			Txt[1] = "musique a vin pour sans en cour de transfert veuillez patienter";
			Txt[2] = "passage en ecoute dans le salon a vin pour sans";
			Txt[3] = "strim up dans le salon a vin pour sans";
			Txt[4] = "diffusion en cour dans le salon a vin pour sans";
	  break;
	  
	  	  case "play30salon":
	  var process = '%CD%/plugins/multi/lieux/salon/play30salon.bat';
	  var Txt = new Array; 
			Txt[0] = "je mai la musique dans le salon a trente pour sans";
			Txt[1] = "musique a trente pour sans en cour de transfert veuillez patienter";
			Txt[2] = "passage en ecoute dans le salon a trente pour sans";
			Txt[3] = "strim up dans le salon a trente pour sans";
			Txt[4] = "diffusion en cour dans le salon a trente pour sans";
	  break;
	  
	  	  case "play40salon":
	  var process = '%CD%/plugins/multi/lieux/salon/play40salon.bat';
	  var Txt = new Array; 
			Txt[0] = "je mai la musique dans le salon a quarante pour sans";
			Txt[1] = "musique a quarante pour sansen cour de transfert veuillez patienter";
			Txt[2] = "passage en ecoute dans le salon a quarante pour sans";
			Txt[3] = "strim up dans le salon a quarante pour sans";
			Txt[4] = "diffusion en cour dans le salon a quarante pour sans";
	  break;
	  
	  	  case "play50salon":
	  var process = '%CD%/plugins/multi/lieux/salon/play50salon.bat';
	  var Txt = new Array; 
			Txt[0] = "je mai la musique dans le salon a cinquante pour sans";
			Txt[1] = "musique a cinquante pour sans en cour de transfert veuillez patienter";
			Txt[2] = "passage en ecoute dans le salon a cinquante pour sans";
			Txt[3] = "strim up dans le salon a cinquante pour sans";
			Txt[4] = "diffusion en cour dans le salon a cinquante pour sans";
	  break;
	  
	  	  case "play60salon":
	  var process = '%CD%/plugins/multi/lieux/salon/play60salon.bat';
	  var Txt = new Array; 
			Txt[0] = "je mai la musique dans le salon a soissante pour sans";
			Txt[1] = "musique a soissante pour sans en cour de transfert veuillez patienter";
			Txt[2] = "passage en ecoute dans le salon a soissante pour sans";
			Txt[3] = "strim up dans le salon a soissante pour sans";
			Txt[4] = "diffusion en cour dans le salon a soissante pour sans";
	  break;
	  
	  	  case "play70salon":
	  var process = '%CD%/plugins/multi/lieux/salon/play70salon.bat';
	  var Txt = new Array; 
			Txt[0] = "je mai la musique dans le salon a soissante di pour sans";
			Txt[1] = "musique a soissante di pour sans en cour de transfert veuillez patienter";
			Txt[2] = "passage en ecoute dans le salon a soissante di pour sans";
			Txt[3] = "strim up dans le salon a soissante di pour sans";
			Txt[4] = "diffusion en cour dans le salon a soissante di pour sans";
	  break;
	  
	  	  case "play80salon":
	  var process = '%CD%/plugins/multi/lieux/salon/play80salon.bat';
	  var Txt = new Array; 
			Txt[0] = "je mai la musique dans le salon a quatrevin pour sans";
			Txt[1] = "musique a quatrevin pour sans en cour de transfert veuillez patienter";
			Txt[2] = "passage en ecoute dans le salon a quatrevin pour sans";
			Txt[3] = "strim up dans le salon a quatrevin pour sans";
			Txt[4] = "diffusion en cour dans le salon a quatrevin pour sans";
	  break;
	  
	  	  case "play90salon":
	  var process = '%CD%/plugins/multi/lieux/salon/play90salon.bat';
	  var Txt = new Array; 
			Txt[0] = "je mai la musique dans le salon a quatrevin di pour sans";
			Txt[1] = "musique a quatrevin di pour sans en cour de transfert veuillez patienter";
			Txt[2] = "passage en ecoute dans le salon a quatrevin di pour sans";
			Txt[3] = "strim up dans le salon a quatrevin di pour sans";
			Txt[4] = "diffusion en cour dans le salon a quatrevin di pour sans";
	  break;
	  
	  	  case "play100salon":
	  var process = '%CD%/plugins/multi/lieux/salon/play100salon.bat';
	  var Txt = new Array; 
			Txt[0] = "je mai la musique dans le salon a sans pour sans";
			Txt[1] = "musique a sans pour sans en cour de transfert veuillez patienter";
			Txt[2] = "passage en ecoute dans le salon a sans pour sans";
			Txt[3] = "strim up dans le salon a sans pour sans";
			Txt[4] = "diffusion en cour dans le salon a sans pour sans";
	  break;
	

		  case "playsalledebain":
	  var process = '%CD%/plugins/multi/lieux/salledebain/playsalledebain.bat';
	  var Txt = new Array; 
			Txt[0] = "je mai la musique dans le salle de bain";
			Txt[1] = "musique en cour de transfert veuillez patienter";
			Txt[2] = "passage en ecoute dans le salle de bain";
			Txt[3] = "strim up dans le salle de bain";
			Txt[4] = "diffusion en cour dans le salle de bain";
			Txt[5] = "je diffuse le son dans la salle de bain";
	  break;
	
	
		  case "play10salledebain":
	  var process = '%CD%/plugins/multi/lieux/salledebain/play10salledebain.bat';
	  var Txt = new Array; 
			Txt[0] = "je mai la musique dans le salle de bain a di pour sans";
			Txt[1] = "musique a di pour sans en cour de transfert veuillez patienter";
			Txt[2] = "passage en ecoute dans le salle de bain a di pour sans";
			Txt[3] = "strim up dans le salle de bain a di pour sans";
			Txt[4] = "diffusion en cour dans le salle de bain a di pour sans";
			Txt[5] = "je diffuse le son dans la salle de bain a di pour sans";
	  break;
	
		  case "play20salledebain":
	  var process = '%CD%/plugins/multi/lieux/salledebain/play20salledebain.bat';
	  var Txt = new Array; 
			Txt[0] = "je mai la musique dans le salle de bain a vin pour sans";
			Txt[1] = "musique a vin pour sans en cour de transfert veuillez patienter";
			Txt[2] = "passage en ecoute dans le salle de bain a vin pour sans";
			Txt[3] = "strim up dans le salle de bain a vin pour sans";
			Txt[4] = "diffusion en cour dans le salle de bain a vin pour sans";
			Txt[5] = "je diffuse le son dans la salle de bain a vin pour sans";
	  break;
	  
	  	  case "play30salledebain":
	  var process = '%CD%/plugins/multi/lieux/salledebain/play30salledebain.bat';
	  var Txt = new Array; 
			Txt[0] = "je mai la musique dans le salle de bain a trente pour sans";
			Txt[1] = "musique a trente pour sans en cour de transfert veuillez patienter";
			Txt[2] = "passage en ecoute dans le salle de bain a trente pour sans";
			Txt[3] = "strim up dans le salle de bain a trente pour sans";
			Txt[4] = "diffusion en cour dans le salle de bain a trente pour sans";
			Txt[5] = "je diffuse le son dans la salle de bain a trente pour sans";
	  break;
	  
	  	  case "play40salledebain":
	  var process = '%CD%/plugins/multi/lieux/salledebain/play40salledebain.bat';
	  var Txt = new Array; 
			Txt[0] = "je mai la musique dans le salle de bain a quarante pour sans";
			Txt[1] = "musique a quarante pour sans en cour de transfert veuillez patienter";
			Txt[2] = "passage en ecoute dans le salle de bain a quarante pour sans";
			Txt[3] = "strim up dans le salle de bain a quarante pour sans";
			Txt[4] = "diffusion en cour dans le salle de bain a quarante pour sans";
			Txt[5] = "je diffuse le son dans la salle de bain a quarante pour sans";
	  break;
	  
	  	  case "play50salledebain":
	  var process = '%CD%/plugins/multi/lieux/salledebain/play50salledebain.bat';
	  var Txt = new Array; 
			Txt[0] = "je mai la musique dans le salle de bain a cinquante pour sans";
			Txt[1] = "musique a cinquante pour sans en cour de transfert veuillez patienter";
			Txt[2] = "passage en ecoute dans le salle de bain a cinquante pour sans";
			Txt[3] = "strim up dans le salle de bain a cinquante pour sans";
			Txt[4] = "diffusion en cour dans le salle de bain a cinquante pour sans";
			Txt[5] = "je diffuse le son dans la salle de bain a cinquante pour sans";
	  break;
	  
	  	  case "play60salledebain":
	  var process = '%CD%/plugins/multi/lieux/salledebain/play60salledebain.bat';
	  var Txt = new Array; 
			Txt[0] = "je mai la musique dans le salle de bain a soissante pour sans";
			Txt[1] = "musique a soissante pour sans en cour de transfert veuillez patienter";
			Txt[2] = "passage en ecoute dans le salle de bain a soissante pour sans";
			Txt[3] = "strim up dans le salle de bain a soissante pour sans";
			Txt[4] = "diffusion en cour dans le salle de bain a soissante pour sans";
			Txt[5] = "je diffuse le son dans la salle de bain a soissante pour sans";
	  break;
	  
	  	  case "play70salledebain":
	  var process = '%CD%/plugins/multi/lieux/salledebain/play70salledebain.bat';
	  var Txt = new Array; 
			Txt[0] = "je mai la musique dans le salle de bain a soissante di pour sans";
			Txt[1] = "musique a soissante di pour sans en cour de transfert veuillez patienter";
			Txt[2] = "passage en ecoute dans le salle de bain a soissante di pour sans";
			Txt[3] = "strim up dans le salle de bain a soissante di pour sans";
			Txt[4] = "diffusion en cour dans le salle de bain a soissante di pour sans";
			Txt[5] = "je diffuse le son dans la salle de bain a soissante di pour sans";
	  break;
	  
	  	  case "play80salledebain":
	  var process = '%CD%/plugins/multi/lieux/salledebain/play80salledebain.bat';
	  var Txt = new Array; 
			Txt[0] = "je mai la musique dans le salle de bain a quatrevin pour sans";
			Txt[1] = "musique a quatrevin pour sans en cour de transfert veuillez patienter";
			Txt[2] = "passage en ecoute dans le salle de bain a quatrevin pour sans";
			Txt[3] = "strim up dans le salle de bain a quatrevin pour sans";
			Txt[4] = "diffusion en cour dans le salle de bain a quatrevin pour sans";
			Txt[5] = "je diffuse le son dans la salle de bain a quatrevin pour sans";
	  break;
	  
	  	  case "play90salledebain":
	  var process = '%CD%/plugins/multi/lieux/salledebain/play90salledebain.bat';
	  var Txt = new Array; 
			Txt[0] = "je mai la musique dans le salle de bain a quatrevin di pour sans";
			Txt[1] = "musique a quatrevin di pour sans en cour de transfert veuillez patienter";
			Txt[2] = "passage en ecoute dans le salle de bain a quatrevin di pour sans";
			Txt[3] = "strim up dans le salle de bain a quatrevin di pour sans";
			Txt[4] = "diffusion en cour dans le salle de bain a quatrevin di pour sans";
			Txt[5] = "je diffuse le son dans la salle de bain a quatrevin di pour sans";
	  break;
	  
	  	  case "play100salledebain":
	  var process = '%CD%/plugins/multi/lieux/salledebain/play100salledebain.bat';
	  var Txt = new Array; 
			Txt[0] = "je mai la musique dans le salle de bain a sans pour sans";
			Txt[1] = "musique a sans pour sans en cour de transfert veuillez patienter";
			Txt[2] = "passage en ecoute dans le salle de bain a sans pour sans";
			Txt[3] = "strim up dans le salle de bain a sans pour sans";
			Txt[4] = "diffusion en cour dans le salle de bain a sans pour sans";
			Txt[5] = "je diffuse le son dans la salle de bain a sans pour sans";
	  break;
	
	
		case "playcuisine":
	  var process = '%CD%/plugins/multi/lieux/cuisine/playcuisine.bat';
	  var Txt = new Array; 
			Txt[0] = "je mai la musique dans la cuisine";
			Txt[1] = "musique en cour de transfert veuillez patienter";
			Txt[2] = "passage en ecoute dans la cuisine";
			Txt[3] = "strim up dans la cuisine";
			Txt[4] = "diffusion en cour dans la cuisine";
	  break;
	  
	  
	  	case "play10cuisine":
	  var process = '%CD%/plugins/multi/lieux/cuisine/play10cuisine.bat';
	  var Txt = new Array; 
			Txt[0] = "je mai la musique dans la cuisine a di pour sans";
			Txt[1] = "musique a di pour sans en cour de transfert veuillez patienter";
			Txt[2] = "passage en ecoute dans la cuisine a di pour sans";
			Txt[3] = "strim up dans la cuisine a di pour sans";
			Txt[4] = "diffusion en cour dans la cuisine a di pour sans";
	  break;
	  
	  
	  	case "play20cuisine":
	  var process = '%CD%/plugins/multi/lieux/cuisine/play20cuisine.bat';
	  var Txt = new Array; 
			Txt[0] = "je mai la musique dans la cuisine a vin pour sans";
			Txt[1] = "musique a vin pour sans en cour de transfert veuillez patienter";
			Txt[2] = "passage en ecoute dans la cuisine a vin pour sans";
			Txt[3] = "strim up dans la cuisine a vin pour sans";
			Txt[4] = "diffusion en cour dans la cuisine a vin pour sans";
	  break;
	  
	  
	  	case "play30cuisine":
	  var process = '%CD%/plugins/multi/lieux/cuisine/play30cuisine.bat';
	  var Txt = new Array; 
			Txt[0] = "je mai la musique dans la cuisinea trente pour sans ";
			Txt[1] = "musique a trente pour sans en cour de transfert veuillez patienter";
			Txt[2] = "passage en ecoute dans la cuisine a trente pour sans";
			Txt[3] = "strim up dans la cuisine a trente pour sans";
			Txt[4] = "diffusion en cour dans la cuisine a trente pour sans";
	  break;
	  
	  
	  	case "play40cuisine":
	  var process = '%CD%/plugins/multi/lieux/cuisine/play40cuisine.bat';
	  var Txt = new Array; 
			Txt[0] = "je mai la musique dans la cuisine a quarante pour sans";
			Txt[1] = "musique a quarante pour sans en cour de transfert veuillez patienter";
			Txt[2] = "passage en ecoute dans la cuisine a quarante pour sans";
			Txt[3] = "strim up dans la cuisine a quarante pour sans";
			Txt[4] = "diffusion en cour dans la cuisine a quarante pour sans";
	  break;
	  
	  	case "play50cuisine":
	  var process = '%CD%/plugins/multi/lieux/cuisine/play50cuisine.bat';
	  var Txt = new Array; 
			Txt[0] = "je mai la musique dans la cuisine a cinquante pour sans";
			Txt[1] = "musique a cinquante pour sansen cour de transfert veuillez patienter";
			Txt[2] = "passage en ecoute dans la cuisine a cinquante pour sans";
			Txt[3] = "strim up dans la cuisine a cinquante pour sans";
			Txt[4] = "diffusion en cour dans la cuisinea cinquante pour sans ";
	  break;
	  
	  	case "play60cuisine":
	  var process = '%CD%/plugins/multi/lieux/cuisine/play60cuisine.bat';
	  var Txt = new Array; 
			Txt[0] = "je mai la musique dans la cuisine a soissante pour sans";
			Txt[1] = "musique a soissante pour sans en cour de transfert veuillez patienter";
			Txt[2] = "passage en ecoute dans la cuisine a soissante pour sans";
			Txt[3] = "strim up dans la cuisine a soissante pour sans";
			Txt[4] = "diffusion en cour dans la cuisine a soissante pour sans";
	  break;
	  
	  	case "play70cuisine":
	  var process = '%CD%/plugins/multi/lieux/cuisine/play70cuisine.bat';
	  var Txt = new Array; 
			Txt[0] = "je mai la musique dans la cuisine a soissante di pour sans";
			Txt[1] = "musique a soissante di pour sans en cour de transfert veuillez patienter";
			Txt[2] = "passage en ecoute dans la cuisine a soissante di pour sans";
			Txt[3] = "strim up dans la cuisine a soissante di pour sans";
			Txt[4] = "diffusion en cour dans la cuisine a soissante di pour sans";
	  break;
	  
	  	case "play80cuisine":
	  var process = '%CD%/plugins/multi/lieux/cuisine/play80cuisine.bat';
	  var Txt = new Array; 
			Txt[0] = "je mai la musique dans la cuisine a quatrevin pour sans";
			Txt[1] = "musique a quatrevin pour sans en cour de transfert veuillez patienter";
			Txt[2] = "passage en ecoute dans la cuisine a quatrevin pour sans";
			Txt[3] = "strim up dans la cuisine a quatrevin pour sans";
			Txt[4] = "diffusion en cour dans la cuisine a quatrevin pour sans";
	  break;
	  
	  	case "play90cuisine":
	  var process = '%CD%/plugins/multi/lieux/cuisine/play90cuisine.bat';
	  var Txt = new Array; 
			Txt[0] = "je mai la musique dans la cuisine a quatrevin di pour sans";
			Txt[1] = "musique a quatrevin di pour sans en cour de transfert veuillez patienter";
			Txt[2] = "passage en ecoute dans la cuisine a quatrevin di pour sans";
			Txt[3] = "strim up dans la cuisine a quatrevin di pour sans";
			Txt[4] = "diffusion en cour dans la cuisine a quatrevin di pour sans";
	  break;
	
		  
	  	case "play100cuisine":
	  var process = '%CD%/plugins/multi/lieux/cuisine/play100cuisine.bat';
	  var Txt = new Array; 
			Txt[0] = "je mai la musique dans la cuisine a sans pour sans";
			Txt[1] = "musique a sans pour sans en cour de transfert veuillez patienter";
			Txt[2] = "passage en ecoute dans la cuisine a sans pour sans";
			Txt[3] = "strim up dans la cuisine a sans pour sans";
			Txt[4] = "diffusion en cour dans la cuisine a sans pour sans";
	  break;
	

		case "playchambe":
	  var process = '%CD%/plugins/multi/lieux/chambre/playchambre.bat';
	  var Txt = new Array; 
			Txt[0] = "je mai la musique dans la chambre";
			Txt[1] = "musique en cour de transfert veuillez patienter";
			Txt[2] = "passage en ecoute dans la chambre";
			Txt[3] = "strim up dans la chambre";
			Txt[4] = "diffusion en cour dans la chambre";
			Txt[5] = "je diffuse le son dans la chambre";
	  break;
	  
	  	case "play10chambe":
	  var process = '%CD%/plugins/multi/lieux/chambre/play10chambre.bat';
	  var Txt = new Array; 
			Txt[0] = "je mai la musique dans la chambre a di pour sans";
			Txt[1] = "musique a di pour sans en cour de transfert veuillez patienter";
			Txt[2] = "passage en ecoute dans la chambre a di pour sans";
			Txt[3] = "strim up dans la chambre a di pour sans";
			Txt[4] = "diffusion en cour dans la chambre a di pour sans";
			Txt[5] = "je diffuse le son dans la chambre a di pour sans";
	  break;
	  
	  	case "play20chambe":
	  var process = '%CD%/plugins/multi/lieux/chambre/play20chambre.bat';
	  var Txt = new Array; 
			Txt[0] = "je mai la musique dans la chambre a vin pour sans";
			Txt[1] = "musique a vin pour sans en cour de transfert veuillez patienter";
			Txt[2] = "passage en ecoute dans la chambre a vin pour sans";
			Txt[3] = "strim up dans la chambre a vin pour sans";
			Txt[4] = "diffusion en cour dans la chambre a vin pour sans";
			Txt[5] = "je diffuse le son dans la chambre a vin pour sans";
	  break;
	  
	  	case "play30chambe":
	  var process = '%CD%/plugins/multi/lieux/chambre/play30chambre.bat';
	  var Txt = new Array; 
			Txt[0] = "je mai la musique dans la chambre a trente pour sans";
			Txt[1] = "musique a trente pour sans en cour de transfert veuillez patienter";
			Txt[2] = "passage en ecoute dans la chambre a trente pour sans";
			Txt[3] = "strim up dans la chambre a trente pour sans";
			Txt[4] = "diffusion en cour dans la chambre a trente pour sans";
			Txt[5] = "je diffuse le son dans la chambre a trente pour sans";
	  break;
	  
	  	case "play40chambe":
	  var process = '%CD%/plugins/multi/lieux/chambre/play40chambre.bat';
	  var Txt = new Array; 
			Txt[0] = "je mai la musique dans la chambre a quarante pour sans";
			Txt[1] = "musique a quarante pour sans en cour de transfert veuillez patienter";
			Txt[2] = "passage en ecoute dans la chambre a quarante pour sans";
			Txt[3] = "strim up dans la chambre a quarante pour sans";
			Txt[4] = "diffusion en cour dans la chambre a quarante pour sans";
			Txt[5] = "je diffuse le son dans la chambre a quarante pour sans";
	  break;
	  
	  	case "play50chambe":
	  var process = '%CD%/plugins/multi/lieux/chambre/play50chambre.bat';
	  var Txt = new Array; 
			Txt[0] = "je mai la musique dans la chambre a cinquante pour sans";
			Txt[1] = "musique a cinquante pour sans en cour de transfert veuillez patienter";
			Txt[2] = "passage en ecoute dans la chambre a cinquante pour sans";
			Txt[3] = "strim up dans la chambre a cinquante pour sans";
			Txt[4] = "diffusion en cour dans la chambre a cinquante pour sans";
			Txt[5] = "je diffuse le son dans la chambre a cinquante pour sans";
	  break;
	  
	  	case "play60chambe":
	  var process = '%CD%/plugins/multi/lieux/chambre/play60chambre.bat';
	  var Txt = new Array; 
			Txt[0] = "je mai la musique dans la chambre a soissante pour sans";
			Txt[1] = "musique a soissante pour sans en cour de transfert veuillez patienter";
			Txt[2] = "passage en ecoute dans la chambre a soissante pour sans";
			Txt[3] = "strim up dans la chambre a soissante pour sans";
			Txt[4] = "diffusion en cour dans la chambre a soissante pour sans";
			Txt[5] = "je diffuse le son dans la chambre a soissante pour sans";
	  break;
	  
	  	case "play70chambe":
	  var process = '%CD%/plugins/multi/lieux/chambre/play70chambre.bat';
	  var Txt = new Array; 
			Txt[0] = "je mai la musique dans la chambre a soissante di pour sans";
			Txt[1] = "musique a soissante di pour sans en cour de transfert veuillez patienter";
			Txt[2] = "passage en ecoute dans la chambre a soissante di pour sans";
			Txt[3] = "strim up dans la chambre a soissante di pour sans";
			Txt[4] = "diffusion en cour dans la chambre a soissante di pour sans";
			Txt[5] = "je diffuse le son dans la chambre a soissante di pour sans";
	  break;
	  
	  	case "play80chambe":
	  var process = '%CD%/plugins/multi/lieux/chambre/play80chambre.bat';
	  var Txt = new Array; 
			Txt[0] = "je mai la musique dans la chambre a quatrevin pour sans";
			Txt[1] = "musique a quatrevin pour sans en cour de transfert veuillez patienter";
			Txt[2] = "passage en ecoute dans la chambre a quatrevin pour sans";
			Txt[3] = "strim up dans la chambre a quatrevin pour sans";
			Txt[4] = "diffusion en cour dans la chambre a quatrevin pour sans";
			Txt[5] = "je diffuse le son dans la chambre a quatrevin pour sans";
	  break;
	  
	  	case "play90chambe":
	  var process = '%CD%/plugins/multi/lieux/chambre/play90chambre.bat';
	  var Txt = new Array; 
			Txt[0] = "je mai la musique dans la chambre a quatrevin di pour sans";
			Txt[1] = "musique a quatrevin di pour sans en cour de transfert veuillez patienter";
			Txt[2] = "passage en ecoute dans la chambre a quatrevin di pour sans";
			Txt[3] = "strim up dans la chambre a quatrevin di pour sans";
			Txt[4] = "diffusion en cour dans la chambre a quatrevin di pour sans";
			Txt[5] = "je diffuse le son dans la chambre a quatrevin di pour sans";
	  break;
	  
	  	case "play100chambe":
	  var process = '%CD%/plugins/multi/lieux/chambre/play100chambre.bat';
	  var Txt = new Array; 
			Txt[0] = "je mai la musique dans la chambre a sans pour sans";
			Txt[1] = "musique a sans pour sans en cour de transfert veuillez patienter";
			Txt[2] = "passage en ecoute dans la chambre a sans pour sans";
			Txt[3] = "strim up dans la chambre a sans pour sans";
			Txt[4] = "diffusion en cour dans la chambre a sans pour sans";
			Txt[5] = "je diffuse le son dans la chambre a sans pour sans";
	  break;
	
	
		case "playbar":
	  var process = '%CD%/plugins/multi/lieux/bar/playbar.bat';
	  var Txt = new Array; 
			Txt[0] = "je mai la musique dans la chambre";
			Txt[1] = "musique en cour de transfert veuillez patienter";
			Txt[2] = "passage en ecoute dans la chambre";
			Txt[3] = "strim up dans la chambre";
			Txt[4] = "diffusion en cour dans la chambre";
			Txt[5] = "je diffuse le son dans la chambre";
	  break;
	  
	  	case "play10bar":
	  var process = '%CD%/plugins/multi/lieux/bar/play10bar.bat';
	  var Txt = new Array; 
			Txt[0] = "je mai la musique dans au bar a di pour sans";
			Txt[1] = "musique a di pour sans en cour de transfert veuillez patienter";
			Txt[2] = "passage en ecoute au bar a di pour sans";
			Txt[3] = "strim up dans au bar a di pour sans";
			Txt[4] = "diffusion en cour au bar a di pour sans";
			Txt[5] = "je diffuse le son au bar a di pour sans";
	  break;
	  
	  	case "play20bar":
	  var process = '%CD%/plugins/multi/lieux/bar/play20bar.bat';
	  var Txt = new Array; 
			Txt[0] = "je mai la musique au bar a vin pour sans";
			Txt[1] = "musique a vin pour sans en cour de transfert veuillez patienter";
			Txt[2] = "passage en ecoute au bar a vin pour sans";
			Txt[3] = "strim up au bar a vin pour sans";
			Txt[4] = "diffusion en cour au bar a vin pour sans";
			Txt[5] = "je diffuse le son au bar a vin pour sans";
	  break;
	  
	  	case "play30bar":
	  var process = '%CD%/plugins/multi/lieux/bar/play30bar.bat';
	  var Txt = new Array; 
			Txt[0] = "je mai la musique au bar a trente pour sans";
			Txt[1] = "musique en cour de transfert veuillez patienter";
			Txt[2] = "passage en ecoute au bar a trente pour sans";
			Txt[3] = "strim up au bar a trente pour sans";
			Txt[4] = "diffusion en cour au bar a trente pour sans";
			Txt[5] = "je diffuse le son au bar a trente pour sans";
	  break;
	  
	  	case "play40bar":
	  var process = '%CD%/plugins/multi/lieux/bar/play40bar.bat';
	  var Txt = new Array; 
			Txt[0] = "je mai la musique au bar a quarante pour sans";
			Txt[1] = "musique a quarante pour sans en cour de transfert veuillez patienter";
			Txt[2] = "passage en ecoute au bar a quarante pour sans";
			Txt[3] = "strim up au bar a quarante pour sans";
			Txt[4] = "diffusion en cour au bar a quarante pour sans";
			Txt[5] = "je diffuse le son au bar a quarante pour sans";
	  break;
	  
	  	case "play50bar":
	  var process = '%CD%/plugins/multi/lieux/bar/play50bar.bat';
	  var Txt = new Array; 
			Txt[0] = "je mai la musique au bar a cinquante pour sans";
			Txt[1] = "musique a cinquante pour sansen cour de transfert veuillez patienter";
			Txt[2] = "passage en ecoute au bar a cinquante pour sans";
			Txt[3] = "strim up au bar a cinquante pour sans";
			Txt[4] = "diffusion en cour au bar a cinquante pour sans";
			Txt[5] = "je diffuse le son au bar a cinquante pour sans";
	  break;
	  
	  	case "play60bar":
	  var process = '%CD%/plugins/multi/lieux/bar/play60bar.bat';
	  var Txt = new Array; 
			Txt[0] = "je mai la musique au bar a soissante pour sans";
			Txt[1] = "musique a soissante pour sans en cour de transfert veuillez patienter";
			Txt[2] = "passage en ecoute au bar";
			Txt[3] = "strim up au bar a soissante pour sans";
			Txt[4] = "diffusion en cour au bar a soissante pour sans";
			Txt[5] = "je diffuse le son au bar a soissante pour sans";
	  break;
	  
	  	case "play70bar":
	  var process = '%CD%/plugins/multi/lieux/bar/play70bar.bat';
	  var Txt = new Array; 
			Txt[0] = "je mai la musique au bar a soissante di pour sans";
			Txt[1] = "musique a soissante di pour sansen cour de transfert veuillez patienter";
			Txt[2] = "passage en ecoute au bar a soissante di pour sans";
			Txt[3] = "strim up au bar a soissante di pour sans";
			Txt[4] = "diffusion en cour au bar a soissante di pour sans";
			Txt[5] = "je diffuse le son au bar a soissante di pour sans";
	  break;
	  
	  	case "play80bar":
	  var process = '%CD%/plugins/multi/lieux/bar/play80bar.bat';
	  var Txt = new Array; 
			Txt[0] = "je mai la musique au bar a quatrevin pour sans";
			Txt[1] = "musique a quatrevin pour sans en cour de transfert veuillez patienter";
			Txt[2] = "passage en ecoute au bar a quatrevin pour sans";
			Txt[3] = "strim up au bar a quatrevin pour sans";
			Txt[4] = "diffusion en cour au bar a quatrevin pour sans";
			Txt[5] = "je diffuse le son au bar a quatrevin pour sans";
	  break;
	  
	  	case "play90bar":
	  var process = '%CD%/plugins/multi/lieux/bar/play90bar.bat';
	  var Txt = new Array; 
			Txt[0] = "je mai la musique au bar a quatrevin di pour sans";
			Txt[1] = "musique a quatrevin di pour sans en cour de transfert veuillez patienter";
			Txt[2] = "passage en ecoute au bar a quatrevin di pour sans";
			Txt[3] = "strim up au bar a quatrevin di pour sans";
			Txt[4] = "diffusion en cour au bar a quatrevin di pour sans";
			Txt[5] = "je diffuse le son au bar a quatrevin di pour sans";
	  break;
	  
	  	case "play100bar":
	  var process = '%CD%/plugins/multi/lieux/bar/play100bar.bat';
	  var Txt = new Array; 
			Txt[0] = "je mai la musique au bar a sans pour sans";
			Txt[1] = "musique en cour de transfert veuillez patienter";
			Txt[2] = "passage en ecoute au bar a sans pour sans";
			Txt[3] = "strim up au bar a sans pour sans";
			Txt[4] = "diffusion en cour au bar a sans pour sans";
			Txt[5] = "je diffuse le son au bar a sans pour sans";
	  break;
	
	
		case "playall":
	  var process = '%CD%/plugins/multi/lieux/tous/playall.bat';
	  var Txt = new Array; 
			Txt[0] = "je diffuse la musique dans toute les piaices";
			Txt[1] = "je diffuse l'audio partout";
			Txt[2] = "ecoute dans toute les pieces en cour";
			Txt[3] = "le son est partout";
	  break;
	  
	  		case "pauseall":
	  var process = '%CD%/plugins/multi/lieux/tous/pauseall.bat';
	  var Txt = new Array; 
			Txt[0] = "J'arraite la musique dans toute les piaice";
			Txt[1] = "Je coupe la musique partout";
			Txt[2] = "diffusion stoppai dans toute les piaice";
			Txt[2] = "Audio en cour d'arrai";
	  break;
	
			case "startmultiroom":
	  var process = '%CD%/plugins/multi/lieux/tous/startmultiroom.bat';
	  var Txt = new Array; 
			Txt[0] = "je lance l'application Tuneblade";
			Txt[1] = "les systaimes audio se connaicte";
			Txt[2] = "le multiroum daimarre";
			Txt[3] = "systaime en cour de connection";
	  break;
	  
	  			case "startmultiroommusic":
	  var process = '%CD%/plugins/multi/lieux/tous/startmultiroommusic.bat';
	  var Txt = new Array; 
			Txt[0] = "je lance l'application musicale";
			Txt[1] = "les systaimes audio se connaicte";
			Txt[2] = "le multiroum audio daimarre";
			Txt[3] = "systaime musical en cour de connection";
	  break;
	
    case "la":
	  var Txt = new Array; 
			Txt[0] = "oui monsieur";
			Txt[1] = "oui monsieur, que puije pour vous";
			Txt[2] = "biensur";
			Txt[3] = "comme toujours";
			Txt[4] = "oui";
			Txt[4] = "Pour vous monsieur, toujours";
	  break;
	  
	
	  
	case "stopcuisine":
	  var process = '%CD%/plugins/multi/lieux/cuisine/stopcuisine.bat';
	  var Txt = new Array; 
			Txt[0] = "J'arraite la musique dans la cuisine";
			Txt[1] = "Je coupe la musique dans la cuisine";
			Txt[2] = "diffusion stoppai dans la cuisine";
			Txt[2] = "Audio en cour d'arrai dans la cuisine";
	  break;
	  
	case "stopsalon":
	  var process = '%CD%/plugins/multi/lieux/salon/stopsalon.bat';
	  var Txt = new Array; 
			Txt[0] = "J'arraite la musique dans le salon";
			Txt[1] = "Je coupe la musique dans le salon";
			Txt[2] = "diffusion stoppai dans le salon";
			Txt[2] = "Audio en cour d'arrai dans le salon";
	  break;
	  
	 	case "stopchambre":
	  var process = '%CD%/plugins/multi/lieux/chambre/stopchambre.bat';
	  var Txt = new Array; 
			Txt[0] = "J'arraite la musique dans la chambre";
			Txt[1] = "Je coupe la musique dans la chambre";
			Txt[2] = "diffusion stoppai dans la chambre";
			Txt[2] = "Audio en cour d'arrai dans la chambre";
	  break; 
	  
	 	case "stopbar":
	  var process = '%CD%/plugins/multi/lieux/bar/stopbar.bat';
	  var Txt = new Array; 
			Txt[0] = "J'arraite la musique au bar";
			Txt[1] = "Je coupe la musique au bar";
			Txt[2] = "diffusion stoppai au bar";
			Txt[2] = "Audio en cour d'arrai au bar";
	  break; 
	  
		 case "stopsalledebain":
	  var process = '%CD%/plugins/multi/lieux/salledebain/stopsalledebain.bat';
	  var Txt = new Array; 
			Txt[0] = "J'arraite la musique dans la salle de bain";
			Txt[1] = "Je coupe la musique dans la salle de bain";
			Txt[2] = "diffusion stoppai dans la salle de bain";
			Txt[2] = "Audio en cour d'arrai dans la salle de bain";
	  break;   
	  
	  		 case "stopmultiroom":
	  var process = '%CD%/plugins/multi/lieux/tous/stopmultiroom.bat';
	  var Txt = new Array; 
			Txt[0] = "Je fairme l'application tuneblaillde";
			Txt[1] = "Je fairme le multiroum";
			Txt[2] = "diffusion arraitai";
			Txt[2] = "Audio coupai";
	  break;   
	  
	  
	 	  		 case "stopmultiroommusic":
	  var process = '%CD%/plugins/multi/lieux/tous/stopmultiroommusic.bat';
	  var Txt = new Array; 
			Txt[0] = "Je fairme l'application tuneblaillde et kodi";
			Txt[1] = "Je fairme le multiroum musicale";
			Txt[2] = "diffusion arretai";
			Txt[2] = "Audio coupai";
	  break;   
  }    
  
  

  
 var child = exec(process,
  function (error, stdout, stderr) {
    console.log(process);
   });
Choix = Math.floor(Math.random() * Txt.length); 
callback({'tts': Txt[Choix]});

 }
 