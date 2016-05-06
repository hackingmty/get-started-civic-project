jQuery(document).ready(function($) {

    //var navbar = $('.navbar-static-top'),
    //		distance = navbar.offset().top,
    //    $window = $(window);
});

function getData(){
  var output_data = new Object();
  output_data["success_criteria"] = $('#sucess_criteria').val();
  output_data["success_goal"] = $(#'#sucess_goal').val();
  output_data["organization_name"] = $('#organization_name').val();
  output_data["organization_owner"] = $('#organization_owner').val();
  output_data["final_challenge"] = $('#final_challenge').val();
  console.log(output_data)
};


function setText(incoming,outgoing) {
    var string_incoming = "textarea" + incoming;
    var string_outgoing = "text_area"+ outgoing;
    $(outgoing).val($(incoming).val());
    return;              // The function returns the product of p1 and p2
};
