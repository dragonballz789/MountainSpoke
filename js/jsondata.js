'use strict'
        var townrequestURL = "https://byui-cit230.github.io/weather/data/towndata.json";
        var townrequest = new XMLHttpRequest();
        townrequest.open('GET', townrequestURL, true);
        townrequest.responseType = "text";
        townrequest.send();
        townrequest.onload = function() {
            var townrequesttext = townrequest.response;
            var towndata = JSON.parse(townrequesttext);
            
       
                var scost = towndata.towns[0].motto;
                document.getElementById("").innerHTML=fmotto;
                var swash = towndata.towns[0].yearFounded;
                document.getElementById("franklinfounded").innerHTML=fyear;
                var sinsp = towndata.towns[0].currentPopulation;
                document.getElementById("franklinpopulation").innerHTML=fpop;
                var sbrake = towndata.towns[0].averageRainfall;
                document.getElementById("franklinrainfall").innerHTML=frain;
                var srail = towndata.towns[1].motto;
                document.getElementById("greenvillemotto").innerHTML=greenmotto;
                var schain = towndata.towns[1].yearFounded;
                document.getElementById("greenvillefounded").innerHTML=greenyear;
                var stire = towndata.towns[1].currentPopulation;
                document.getElementById("greenvillepopulation").innerHTML=greenpop;
                var shift = towndata.towns[1].averageRainfall;
                document.getElementById("greenvillerainfall").innerHTML=greenrain;
                var swheel = towndata.towns[3].motto;
                document.getElementById("springfieldmotto").innerHTML=springmotto;
                var stube = towndata.towns[3].yearFounded;
                document.getElementById("springfieldfounded").innerHTML=springyear;
                var sbasic = towndata.towns[3].currentPopulation;
                document.getElementById("springfieldpopulation").innerHTML=springpop;
                var sflat = towndata.towns[3].averageRainfall;
                document.getElementById("springfieldrainfall").innerHTML=springrain;
}