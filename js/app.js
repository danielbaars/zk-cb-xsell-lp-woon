// Test URL Query Strings: ?PRO=cross&PLA=zka&CRE=woonprod_info&TYPE=referrer&werkgevernr=49545

function getQueryVariable(variable)
{
   var query = window.location.search.substring(1);
   var vars = query.split("&");
   for (var i=0;i<vars.length;i++) {
       var pair = vars[i].split("=");
       if(pair[0] == variable){return pair[1];}
   }
   return(false);
}

var PRO = getQueryVariable("PRO");
var PLA = getQueryVariable("PLA");
var CRE = getQueryVariable("CRE");
var TYPE = getQueryVariable("TYPE");
var werkgevernr = getQueryVariable("werkgevernr");

//var URLQueryStrings = "PRO=" + PRO + "&PLA=" + PLA + "&CRE=" + CRE + "&TYPE=" + TYPE + "&werkgevernr=" + werkgevernr;

var woonLink = 'https://www.centraalbeheer.nl/verzekeringen/woonverzekering/premie-berekenen/Paginas/stap-1.aspx';

$( ".woonform" ).attr( "action", generateURL(woonLink, undefined, PLA, CRE, TYPE, werkgevernr) );