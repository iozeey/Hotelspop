$(document).ready(function(){
		var flightDatePicker = new datePicker({
          start:  document.getElementsByClassName('startflightDate'),
          end:    document.getElementsByClassName('endflightDate'),
          months: 2,
      });

      var tripDatePicker = new datePicker({
          start:  document.getElementsByClassName('startDate'),
          end:    document.getElementsByClassName('endDate'),
          months: 2,
       });

	  $(".dropdown").on("hide.bs.dropdown", function(){
	    $(".btn").html('Dropdown <span class="caret"></span>');
	  });
	  $(".dropdown").on("show.bs.dropdown", function(){
	    $(".btn").html('Dropdown <span class="caret caret-up"></span>');
	  });
});
