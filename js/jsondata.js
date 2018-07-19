'use strict'
        var mtnrequestURL = "https://dragonballz789.github.io/MountainSpoke.github.io/data/services.json";
        var mtnrequest = new XMLHttpRequest();
        mtnrequest.open('GET', mtnrequestURL, true);
        mtnrequest.responseType = "text";
        mtnrequest.send();
        mtnrequest.onload = function() {
            var mtnrequesttext = mtnrequest.response;
            var mtndata = JSON.parse(mtnrequesttext);
            
       
                var scost = mtndata.services.maintenance;
                document.getElementById("mtncost").innerHTML=scost;
                var swash = mtndata.services.BiKeWash;
                document.getElementById("mtnwash").innerHTML=swash;
                var sinsp = mtndata.services.Inspection;
                document.getElementById("mtninsp").innerHTML=sinsp;
                var sbrake = mtndata.services.BrakeAdjustments;
                document.getElementById("mtnbrake").innerHTML=sbrake;
                var srail = mtndata.services.DerailleurAdjustments;
                document.getElementById("mtnrail").innerHTML=srail;
                var schain = mtndata.services.LubricateChainDeraillesandShiftCables;
                document.getElementById("mtnchain").innerHTML=schain;
                var stire = mtndata.services.PressurizeTires;
                document.getElementById("mtntire").innerHTML=stire;
                var shift = mtndata.services.ShiftingSystemAdjustment;
                document.getElementById("mtnshift").innerHTML=shift;
                var slat = mtndata.services.WheelsLaterallyTrued;
                document.getElementById("mtnwheel").innerHTML=slat;
                var stube = mtndata.services.TireTubeReplacement;
                document.getElementById("mtntube").innerHTML=stube;
                var sbasic = mtndata.services.BasicService;
                document.getElementById("mtnbasic").innerHTML=sbasic;
                var sflat = mtndata.services.FlatRepair;
                document.getElementById("mtnflat").innerHTML=sflat;
}
