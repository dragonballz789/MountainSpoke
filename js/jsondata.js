'use strict'
        var mtnrequestURL = "https://dragonballz789.github.io/MountainSpoke.github.io/data/services.json";
        var mtnrequest = new XMLHttpRequest();
        mtnrequest.open('GET', mtnrequestURL, true);
        mtnrequest.responseType = "text";
        mtnrequest.send();
        mtnrequest.onload = function() {
            var mtnrequesttext = mtnrequest.response;
            var mtndata = JSON.parse(mtnrequesttext);
            
       
                var scost = mtndata.services[0].maintenance;
                document.getElementById("mtncost").innerHTML=scost;
                var swash = mtndata.services[0].BikeWash;
                document.getElementById("mtnwash").innerHTML=swash;
                var sinsp = mtndata.services[0].Inspection;
                document.getElementById("mtninsp").innerHTML=sinsp;
                var sbrake = mtndata.services[0].BrakeAdjustments;
                document.getElementById("mtnbrake").innerHTML=sbrake;
                var srail = mtndata.services[0].DerailleurAdjustments;
                document.getElementById("mtnrail").innerHTML=srail;
                var schain = mtndata.services[0].LubricateChainDeraillesandShiftCables;
                document.getElementById("mtnchain").innerHTML=schain;
                var stire = mtndata.services[0].PressurizeTires;
                document.getElementById("mtntire").innerHTML=stire;
                var shift = mtndata.services[0].ShiftingSystemAdjustments;
                document.getElementById("mtnshift").innerHTML=shift;
                var slat = mtndata.services[0].WheelsLaterallyTrued;
                document.getElementById("mtnwheel").innerHTML=slat;
                var stube = mtndata.services[0].TireTubeReplacement;
                document.getElementById("mtntube").innerHTML=stube;
                var sbasic = mtndata.services[0].BasicService;
                document.getElementById("mtnbasic").innerHTML=sbasic;
                var sflat = mtndata.services[0].FlatRepair;
                document.getElementById("mtnflat").innerHTML=sflat;
}
