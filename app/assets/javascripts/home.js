$( document ).ready(function() {
    var $passengerValue =1; // globle variable to hold passengers value
    $("#room_dropdown").click(function(e){
        $(".search-dropdown").show();
        e.stopPropagation();
    });
    
    $("#close_div, #close_hotel_div").click(function(e){
        e.stopPropagation();
        $(".search-dropdown").hide();    
    });    
    
    $("#passengers_dropdown").click(function(e){
        $(".search-dropdown").show();
        e.stopPropagation();
    });

    $(".first_add").click(function(){
        $("#inline-search-form-segment-2").show();
        $(".first_remove").show();
        $(".first_add").hide();
    });

    $(".second_add").click(function(){
        $("#inline-search-form-segment-3").show();
        $(".first_remove").hide();
        $(".second_add").hide();
        $(".second_remove").show();

    });
    $(".third_add").click(function(){
        $("#inline-search-form-segment-4").show();
        $(".third_add").hide();
        $(".second_remove").hide();
        $(".third_remove").show();
        $(".fourth_add").hide();
    });
    $(".first_remove").click(function(){
        $("#inline-search-form-segment-2").hide();
        $(".first_remove").hide();
        $(".first_add").show();
    });
    $(".second_remove").click(function(){
        $("#inline-search-form-segment-3").hide();
        $(".first_remove").show();
        $(".second_add").show();
        $(".second_remove").hide();
    });
    $(".third_remove").click(function(){
        $("#inline-search-form-segment-4").hide();
        $(".second_remove").show();
        $(".third_add").show();
        $(".third_remove").hide();
    });
    //function to increment a Passenger Value in Flight
    $('.add-passenger').click(function add() {
        var $passenger = $("#num_adult");
        var a = $passenger.val();
        if(a==0){
            a++;
        }
        if (a<8) {
            a++;
            $(".remove-passenger").prop("disabled", !a);
            $('#num_adult').html(function(i, val) { return a });
            $passenger.val(a);
            $passengerValue = $passengerValue + 1;
            $('#num-passengers').html(function(i, val) { return $passengerValue });
        }else{
            $(".add-passenger").prop("disabled", !$("#num_adult").val());
        }
    });
    $(".remove-room").prop("disabled", !$("#num_adult").val());
    //function to decrement a Pasenger Value in Flight
    $('.remove-passenger').click(function subst() {
        var $passenger = $("#num_adult");
        var b = $passenger.val();
        if (b > 1) {
            b--;
            $('#num_adult').html(function(i, val) { return b });
            $passenger.val(b);
            $passengerValue = $passengerValue - 1;
            $('#num-passengers').html(function(i, val) { return $passengerValue });
        }
        else {
            $(".remove-passenger").prop("disabled", true);
        }
    });

    //function to increment a child Value in Flight Booking
    $('.add-fchild').click(function add_fchild() {
        var $fchild = $("#num_childs");
        var a = $fchild.val();
        if (a<8) {
            a++;
            $(".remove-fchild").prop("disabled", !a);
            $('#num_childs').html(function(i, val) { return a });
            $fchild.val(a);
            $passengerValue = $passengerValue + 1;
            $('#num-passengers').html(function(i, val) { return $passengerValue });
        }else{
            $(".add-fchild").prop("disabled", !$("#num_childs").val());
        }
    });
    $(".remove-fchild").prop("disabled", !$("#num_childs").val());
    //function to decrement a Child Value in Flight Booking
    $('.remove-fchild').click(function remove_fchild() {
        var $fchild = $("#num_childs");
        var b = $fchild.val();
        if (b > 0) {
            b--;
            $('#num_childs').html(function(i, val) { return b });
            $fchild.val(b);
            $passengerValue = $passengerValue - 1;
            $('#num-passengers').html(function(i, val) { return $passengerValue });
        }
        else {
            $(".remove-fchild").prop("disabled", true);
        }
    });

    //function to increment a Infants Value in Flight Booking
    $('.add-finfant').click(function add_finfant() {
        var $finfant = $("#num_infant");
        var a = $finfant.val();
        if (a<4) {
            a++;
            $(".remove-finfant").prop("disabled", !a);
            $('#num_infant').html(function(i, val) { return a });
            $finfant.val(a);
            $passengerValue = $passengerValue + 1;
            $('#num-passengers').html(function(i, val) { return $passengerValue });
        }else{
            $(".add-finfant").prop("disabled", !$("#num_infant").val());
        }
    });
    $(".remove-finfant").prop("disabled", !$("#num_infant").val());
    //function to decrement a infants Value in Flight Booking
    $('.remove-finfant').click(function remove_finfant() {
        var $finfant = $("#num_infant");
        var b = $finfant.val();
        if (b > 0) {
            b--;
            $('#num_infant').html(function(i, val) { return b });
            $finfant.val(b);
            $passengerValue = $passengerValue - 1;
            $('#num-passengers').html(function(i, val) { return $passengerValue });
        }
        else {
            $(".remove-finfant").prop("disabled", true);
        }
    });

    //function to increment a Infants (Lap) Value in Flight Booking
    $('.add-linfant').click(function add_finfant() {
        var $linfant = $("#num_infant_lap");
        var a = $linfant.val();
        if (a<4) {
            a++;
            $(".remove-linfant").prop("disabled", !a);
            $('#num_infant_lap').html(function(i, val) { return a });
            $linfant.val(a);
            $passengerValue = $passengerValue + 1;
            $('#num-passengers').html(function(i, val) { return $passengerValue });
        }else{
            $(".add-linfant").prop("disabled", !$("#num_infant_lap").val());
        }
    });
    $(".remove-linfant").prop("disabled", !$("#num_infant_lap").val());
    //function to decrement a infants (lap) Value in Flight Booking
    $('.remove-linfant').click(function remove_finfant() {
        var $linfant = $("#num_infant_lap");
        var b = $linfant.val();
        if (b > 0) {
            b--;
            $('#num_infant_lap').html(function(i, val) { return b });
            $linfant.val(b);
            $passengerValue = $passengerValue - 1;
            $('#num-passengers').html(function(i, val) { return $passengerValue });
        }
        else {
            $(".remove-linfant").prop("disabled", true);
        }
    });

    //function to increment a Room Value
    $('.add-room').click(function add() {
        var $rooms = $("#no_roomss");
        var a = $rooms.val();
        if(a==0){
            a++;
        }
        if (a<30) {
            a++;
            $(".remove-room").prop("disabled", !a);
            $('#no_roomss').html(function(i, val) { return a });
            $rooms.val(a);
            $('#num-guests').html(function(i, val) { return a });
        }else{
            $(".add-room").prop("disabled", !$("#no_roomss").val());
        }
    });
    $(".remove-room").prop("disabled", !$("#no_roomss").val());
    //function to decrement a Room Value
    $('.remove-room').click(function subst() {
        var $rooms = $("#no_roomss");
        var b = $rooms.val();
        if (b > 1) {
            b--;
            $('#no_roomss').html(function(i, val) { return b });
            $rooms.val(b);
            $('#num-guests').html(function(i, val) { return b });
        }
        else {
            $(".remove-room").prop("disabled", true);
        }
    });
    //function to increment Adult value (hotel room)
    $('.add-adult').click(function add_adult() {
        var $adults = $("#group_adult");
        var a = $adults.val();
        if(a==0){
            a++;
        }
        if (a<30) {
            a++;
            $(".remove-adult").prop("disabled", !a);
            $('#group_adult').html(function(i, val) { return a });
            $adults.val(a);
        }else{
            $(".add-adult").prop("disabled", !$("#group_adult").val());
        }
    });
    $(".remove-adult").prop("disabled", !$("#group_adult").val());
    //function to decrement Adult
    $('.remove-adult').click(function sub_adult() {
        var $adults = $("#group_adult");
        var b = $adults.val();
        if (b > 1) {
            b--;
            $('#group_adult').html(function(i, val) { return b });
            $adults.val(b);
        }
        else {
            $(".remove-adult").prop("disabled", true);
        }
    });

    //function to add a Child (Hotel Room)
    $('.add-child').click(function add_child() {
        var $childs = $("#group_child");
        var a = $childs.val();
        if (a<10) {
            a++;
            $(".remove-child").prop("disabled", !a);
            $('#group_child').html(function(i, val) { return a });
            $childs.val(a);
        }else{
            $(".add_child").prop("disabled", !$("#group_child").val());
        }
    });
    $(".remove-child").prop("disabled", !$("#group_child").val());
    //function to subtract Child
    $('.remove-child').click(function sub_child() {
        var $childs = $("#group_child");
        var b = $childs.val();
        if (b > 0) {
            b--;
            $('#group_child').html(function(i, val) { return b });
            $childs.val(b);
        }
        else {
            $(".remove-child").prop("disabled", true);
        }
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
    var x = document.getElementsByClassName("endflightDate");
    for(var i = 0; i < x.length; i = i + 1) {
        x[i].style.display="block";
    }
    document.getElementById("leaving_from").style.width = "30%";
    document.getElementById("going_to").style.width = "30%";
    var rTrip = document.getElementById("toggle-roundtrip");
    var mTrip = document.getElementById("toggle-multi");
    var oTrip = document.getElementById("toggle-oneway");
    rTrip.className+= " active";
    oTrip.classList.remove('active');
    mTrip.classList.remove('active');
}

function oneWay(){
    document.getElementById("inline-search-form-segment-1").style.display = "none";
    var x = document.getElementsByClassName("endflightDate");
    for(var i = 0; i < x.length; i = i + 1) {
        x[i].style.display="none";
    }
    document.getElementById("leaving_from").style.width = "40%";
    document.getElementById("going_to").style.width = "40%";
    var mTrip = document.getElementById("toggle-multi");
    var rTrip = document.getElementById("toggle-roundtrip");
    var oTrip = document.getElementById("toggle-oneway");
    oTrip.className+= " active";
    rTrip.classList.remove('active');
    mTrip.classList.remove('active');
}

function multiTrip(){
    document.getElementById("inline-search-form-segment-1").style.display = "block";
    var x = document.getElementsByClassName("endflightDate");
    for(var i = 0; i < x.length; i = i + 1) {
        x[i].style.display="none";
    }
    document.getElementById("leaving_from").style.width = "40%";
    document.getElementById("going_to").style.width = "40%";
    var rTrip = document.getElementById("toggle-roundtrip");
    var oTrip = document.getElementById("toggle-oneway");
    var mTrip = document.getElementById("toggle-multi");
    mTrip.className+= " active";
    oTrip.classList.remove('active');
    rTrip.classList.remove('active');
}