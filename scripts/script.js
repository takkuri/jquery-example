$(document).ready(function () {
    var $content = $("#content");
    var homeContent = '<img src="http://media.truelocal.com.au/1/6/1CD926F4-25B2-4097-AB60-62C72EB77686/seafood-on-malvern-toorak-seafood-eb61-938x704.jpg">\
            <p>Simply the best</p>';
    
    var menuContent = '<p>Menu</p>';
    var contactContent = '<p>Contact</p>';
    $content.append(homeContent);
    
    $("#navHome").click(function () {
        $content.empty();
        $content.append(homeContent);
    });
    
    $("#navMenu").click(function () {
        $content.empty();
        $content.append(menuContent);
    });
    
    $("#navContact").click(function () {
        $content.empty()
        $content.append(contactContent);
    });
});