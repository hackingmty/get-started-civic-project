jQuery(document).ready(function($) {

    //var navbar = $('.navbar-static-top'),
    //		distance = navbar.offset().top,
    //    $window = $(window);
});


function setText(incoming,outgoing) {
    var string_incoming = "textarea" + incoming
    var string_outgoing = "text_area"+ outgoing
    $(outgoing).val($(incoming).val());
    return;              // The function returns the product of p1 and p2
}
