$( document ).ready(function() {
   $("#room_dropdown").click(function(e){
        $(".search-dropdown").show();
        e.stopPropagation();
    });

   $("#passengers_dropdown").click(function(e){
        $(".search-dropdown").show();
        e.stopPropagation();
    });

    $(".inline-search-form-add-segment-container").click(function(){
        $("#inline-search-form-segment-2").show();
        $(".inline-search-form-remove-segment").show();
    });
    
    $(".inline-search-form-remove-segment-container").click(function(){
        $("#inline-search-form-segment-2").hide();
        $(".inline-search-form-remove-segment").hide();
    });

   // Function for selecting Packages
   $( "select" )
    .change(function() {
    var str = "";
    $( "select option:selected" ).each(function() {
      str += $( this ).text() + " ";
    });
        $( ".select-first-text" ).text( str );
    })
    .trigger( "change" );
    //function ended.
});

$(document).click(function(){
    $(".search-dropdown").hide();
});

function flightFunction() {
    document.getElementById("hotel").style.display = "none";
    document.getElementById("hotel-search-form").style.display = "none";
    document.getElementById("flight").style.display = "block";
    document.getElementById("flightForm").style.display = "block";
    var flight_Tab = document.getElementById("flightTab");
    var hotel_Tab = document.getElementById("hotelTab");
    flight_Tab.className+= " active";
    hotel_Tab.classList.remove('active');
}

function hotelFunction() {
    document.getElementById("flight").style.display = "none";
    document.getElementById("flightForm").style.display = "none"
    document.getElementById("hotel").style.display = "block";
    document.getElementById("hotel-search-form").style.display = "block";
    var flight_Tab = document.getElementById("flightTab");
    var hotel_Tab = document.getElementById("hotelTab");
    hotel_Tab.className+= " active";
    flight_Tab.classList.remove('active');
}

function roundTrip(){
    document.getElementById("inline-search-form-segment-1").style.display = "none";
    document.getElementById("dp1505772602982").style.display = "block";
    document.getElementById("111").style.width = "30%";
    document.getElementById("112").style.width = "30%";
    var rTrip = document.getElementById("toggle-roundtrip");
    var mTrip = document.getElementById("toggle-multi");
    var oTrip = document.getElementById("toggle-oneway");
    rTrip.className+= " active";
    oTrip.classList.remove('active');
    mTrip.classList.remove('active');
}

function oneWay(){
    document.getElementById("inline-search-form-segment-1").style.display = "none";
    document.getElementById("dp1505772602982").style.display = "none";
    document.getElementById("111").style.width = "40%";
    document.getElementById("112").style.width = "40%";
    var mTrip = document.getElementById("toggle-multi");
    var rTrip = document.getElementById("toggle-roundtrip");
    var oTrip = document.getElementById("toggle-oneway");
    oTrip.className+= " active";
    rTrip.classList.remove('active');
    mTrip.classList.remove('active');
}

function multiTrip(){
    document.getElementById("inline-search-form-segment-1").style.display = "block";
    document.getElementById("dp1505772602982").style.display = "none";
    document.getElementById("111").style.width = "40%";
    document.getElementById("112").style.width = "40%";
    var rTrip = document.getElementById("toggle-roundtrip");
    var oTrip = document.getElementById("toggle-oneway");
    var mTrip = document.getElementById("toggle-multi");
    mTrip.className+= " active";
    oTrip.classList.remove('active');
    rTrip.classList.remove('active');
}

