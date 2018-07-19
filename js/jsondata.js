'use strict'
        var mtnrequestURL = "https://dragonballz789.github.io/MountainSpoke.github.io/data/services.json";
        var mtnrequest = new XMLHttpRequest();
        mtnrequest.open('GET', mtnrequestURL, true);
        mtnrequest.responseType = "text";
        mtnrequest.send();
        mtnrequest.onload = function() {
            var mtnrequesttext = mtnrequest.response;
            var mtndata = JSON.parse(mtnrequesttext);
            
       
                var scost = mtndata.maintenance;
                document.getElementById("mtncost").innerHTML=scost;
                var swash = mtndata.BiKeWash;
                document.getElementById("mtnwash").innerHTML=swash;
                var sinsp = mtndata.Inspection;
                document.getElementById("mtninsp").innerHTML=sinsp;
                var sbrake = mtndata.BrakeAdjustments;
                document.getElementById("mtnbrake").innerHTML=sbrake;
                var srail = mtndata.DerailleurAdjustments;
                document.getElementById("mtnrail").innerHTML=srail;
                var schain = mtndata.LubricateChainDeraillesandShiftCables;
                document.getElementById("mtnchain").innerHTML=schain;
                var stire = mtndata.PressurizeTires;
                document.getElementById("mtntire").innerHTML=stire;
                var shift = mtndata.ShiftingSystemAdjustment;
                document.getElementById("mtnshift").innerHTML=shift;
                var slat = mtndata.WheelsLaterallyTrued;
                document.getElementById("mtnwheel").innerHTML=slat;
                var stube = mtndata.TireTubeReplacement;
                document.getElementById("mtntube").innerHTML=stube;
                var sbasic = mtndata.BasicService;
                document.getElementById("mtnbasic").innerHTML=sbasic;
                var sflat = mtndata.FlatRepair;
                document.getElementById("mtnflat").innerHTML=sflat;
}
