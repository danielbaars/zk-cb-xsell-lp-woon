// Test URL Query Strings: ?PRO=cross&PLA=zka&CRE=woonprod_info&TYPE=referrer&werkgevernr=49545

(function() {
    'use strict';

    var zk = window.zk = {};
}());



(function() {
    'use strict';

    var ns = window.zk.wonen = (window.zk.wonen || {}),
        version = 1,
	    huisnummer = null,
	    postal = null,
	    toevoeging = null,
	    geboortedatum = null,
	    kostbaarheden = null,
	    allrisks = null,
	    aansprakelijkheid = null,
	    formUrl = "&pg_pstcd=%1%&pg_hsnr=%2%&pg_hsnrtv=%3%&werkgevernr=49545",
	    studentUrl = "https://www.centraalbeheer.nl/verzekeringen/woonverzekering/premie-berekenen/Paginas/Stap-1.aspx?pg_pstcd=%1%&pg_hsnr=%2%&pg_hsnrtv=%3%&pg_aankam=1&pg_huueig=1&pg_riedak=2&pg_typwon=Kamerbewoning&pg_gebdtm=%4%&werkgevernr=49545&pg_premieper=Maand&inboedel=1&inbdl_dek=35000&inbdl_bvl=Geen&opstal=0&opstl_dek=0&eigenaarsbelang=0&eigbl_dek=0&aansprakelijkheid=%5%&aanspr_dek=1000000&aanspr_gzn=TweeVolwassenenMetKinderen&allrisk=%6%&tuin=0&tuin_dek=0&pechhulp=0&ongevallen=0&ongvl_dek=0&ongvl_gzn=TweeVolwassenenMetKinderen&kostbaarheden=%7%&kstbr_dek=1000&glas=0&actiecode=&stap=Stap-2";

	function buildUrl(obj) {
		return formUrl.replace("%1%", obj.postal).replace("%2%", obj.number).replace("%3%", obj.toevoeging);
	}
	
	function buildStudentUrl(obj) {
		return studentUrl.replace("%1%", obj.postal).replace("%2%", obj.number).replace("%3%", obj.toevoeging).replace("%4%", obj.gebdatum).replace("%5%", obj.aansprakelijkheid).replace("%6%", obj.allrisks).replace("%7%", obj.kostbaarheden);
	}

	ns.init = function() {
    	huisnummer = $('input[name="huisnummer"]');
	    postal = $('input[name="postcode"]');
	    toevoeging = $('input[name="toevoeging"]');
	    geboortedatum = $('input[name="geboortedatum"]');
	    kostbaarheden = $('input[name="kostbaarheden"]');
	    allrisks = $('input[name="allrisks"]');
	    aansprakelijkheid = $('input[name="aansprakelijkheid"]');

    	$(".woonform").submit(function(e) {
            e.preventDefault();
            
    		var add = buildUrl({
    		    postal:postal.val().replace(/\-|\ /g,""),
    		    number:huisnummer.val(),
    		    toevoeging:toevoeging.val()
    		});

            window.location.href = generateURL('https://www.centraalbeheer.nl/verzekeringen/woonverzekering/premie-berekenen/Paginas/stap-1.aspx','cross','zka','lp-woon','referrer','49545') + add;

    		return false;
    	});
    	
    	$(".studentform").submit(function(e) {
    	    e.preventDefault();
            
    		window.location.href = buildStudentUrl({
    		    postal:postal.val().replace(/\-|\ /g,""),
    		    number:huisnummer.val(),
    		    toevoeging:toevoeging.val(),
    		    gebdatum:geboortedatum.val(),
    		    aansprakelijkheid:String((aansprakelijkheid.is(':checked'))?1:0),
    		    allrisks:String((allrisks.is(':checked'))?1:0),
    		    kostbaarheden:String((kostbaarheden.is(':checked'))?1:0)
    		});

    		return false;
    	});

    	$('input[name="huisnummer"]').keyup(function() {
            var returnString = "",
                regex = /[0-9]|\./,
                anArray = $(this).val().split('');

            for(var i=0; i<anArray.length; i++) {
                if(!regex.test(anArray[i]))
                {
                    anArray[i] = '';
                }
            }
            for(var i=0; i<anArray.length; i++) {
                returnString += anArray[i];
            }
            $(this).val(returnString);
    	});
	}
}());



$(function(){

    $(".external").click(function(e) {
        e.preventDefault();
        window.open(this.href);
    });
});