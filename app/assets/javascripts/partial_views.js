$(document).ready(function(){
	$(".dropdown").on("hide.bs.dropdown", function(){
	    $(".btn").html('Dropdown <span class="caret"></span>');
	});
	$(".dropdown").on("show.bs.dropdown", function(){
	    $(".btn").html('Dropdown <span class="caret caret-up"></span>');
	});
	$("#usd_currency").click(function(){
		$("#f_flag").removeClass("flag-ca");
        $("#f_flag").addClass("flag-us");
        $(".something_currency").text('USD');
    });
    $("#cad_currency").click(function(){
    	$(".something_currency").text('CAD');
        $("#f_flag").addClass("flag-ca");
        $("#f_flag").removeClass("flag-us");
    });
    $('[data-toggle="slide-collapse"]').on('click', function() {
    	$navMenuCont = $($(this).data('target'));
    	$navMenuCont.animate({'width':'toggle'}, 350);
        $("body > *").not('#navbar_default').css("opacity", '0.2');
	});
    $(".fa-times").click(function(){
        $("#myNavbar, #myNavbar2").fadeOut(300);
        $("body > *").css("opacity", '1');
    });
    if ( $(window).width() < 767) {
        $("#first_drop").click(function(){
            var p = $("#myNavbar2").position();
            if(p.top == 90){
                $("#myNavbar2").css({ top: '210px' });
            }
            if(p.top == 210){
                $("#myNavbar2").css({ top: '90px' });
            }
        });
        $('body').click(function(evt){
            if(!$(evt.target).is('#myNavbar, #myNavbar2, #menu_open_button, #first_drop')) {
                $("#myNavbar, #myNavbar2").fadeOut(300);
                $("body > *").css("opacity", '1');
            }
        });
    }
});
