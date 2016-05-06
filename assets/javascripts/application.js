jQuery(document).ready(function($) {

    //var navbar = $('.navbar-static-top'),
    //		distance = navbar.offset().top,
    //    $window = $(window);
});

function getData(){
  var output_data = new Object();
  output_data["project_name"] = $('#project_name').val();
  output_data["success_criteria"] = $('#success_criteria').val();
  output_data["success_goal"] = $('#success_goal').val();
  output_data["drive_url"] = $('drive_url').val();
  output_data["organization_name"] = $('#organization_name').val();
  output_data["organization_owner"] = $('#organization_owner').val();
  output_data["final_challenge"] = $('#final_challenge').val();
  var url = "https://script.google.com/macros/s/AKfycbzKz8OOuKOwERBJHIdrthcP5HQlRDt6Di8snFOmy74O6OOXTYE/exec?project_name="+output_data["project_name"]+"&success_criteria="+output_data["success_criteria"]+"&success_goal="+output_data["success_goal"]+"&drive_url="+output_data["drive_url"]+"&organization_name="+output_data["organization_name"]+"&organization_owner="+output_data["organization_owner"]+"&final_challenge="+output_data["final_challenge"]+"&callback=?";
  var jqxhr = $.getJSON( url, function() {
  console.log( "success" );
})
};


function setText(incoming,outgoing) {
    var string_incoming = "textarea" + incoming;
    var string_outgoing = "text_area"+ outgoing;
    $(outgoing).val($(incoming).val());
    return;              // The function returns the product of p1 and p2
};
