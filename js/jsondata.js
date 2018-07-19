'use strict'
        var mtnrequestURL = "https://dragonballz789.github.io/MountainSpoke.github.io/data/services.json";
        var mtnrequest = new XMLHttpRequest();
        mtnrequest.open('GET', mtnrequestURL, true);
        mtnrequest.responseType = "text";
        mtnrequest.send();
        mtnrequest.onload = function() {
            var mtnrequesttext = mtnrequest.response;
            var mtndata = JSON.parse(mtnrequesttext);
            
       
                var scost = mtndata.mtns[0].motto;
                document.getElementById("mtncost").innerHTML=scost;
                var swash = mtndata.mtns[0].yearFounded;
                document.getElementById("mtnwash").innerHTML=swash;
                var sinsp = mtndata.mtns[0].currentPopulation;
                document.getElementById("mtninsp").innerHTML=sinsp;
                var sbrake = mtndata.mtns[0].averageRainfall;
                document.getElementById("mtnbrake").innerHTML=sbrake;
                var srail = mtndata.mtns[0].motto;
                document.getElementById("mtnrail").innerHTML=srail;
                var schain = mtndata.mtns[0].yearFounded;
                document.getElementById("mtnchain").innerHTML=schain;
                var stire = mtndata.mtns[0].currentPopulation;
                document.getElementById("mtntire").innerHTML=stire;
                var shift = mtndata.mtns[0].averageRainfall;
                document.getElementById("mtnshift").innerHTML=shift;
                var slat = mtndata.mtns[0].motto;
                document.getElementById("mtnwheel").innerHTML=slat;
                var stube = mtndata.mtns[0].yearFounded;
                document.getElementById("mtntube").innerHTML=stube;
                var sbasic = mtndata.mtns[0].currentPopulation;
                document.getElementById("mtnbasic").innerHTML=sbasic;
                var sflat = mtndata.mtns[0].averageRainfall;
                document.getElementById("mtnflat").innerHTML=sflat;
}
