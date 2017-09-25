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
	});
    $(".fa-times").click(function(){
        $("#myNavbar, #myNavbar2").fadeOut(300);
    });
});
