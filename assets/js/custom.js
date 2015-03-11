$("#toggleWill").click(function() {
            $("#WillBio").slideToggle("slow");  
            if($(this).hasClass("more")) {
            $(this).removeClass("more");
            $(this).html('<i class="fa fa-arrow-up" id="WillReadMore"></i> Read Less...');
            $(this).addClass("less");
            } else {
            $(this).removeClass("less");
            $(this).html('<i class="fa fa-arrow-down" id="WillReadMore"></i> Read More...');
            $(this).addClass("more");
            }
});  
$("#togglePhil").click(function() {
            $("#PhilBio").slideToggle("slow");  
            if($(this).hasClass("more")) {
            $(this).removeClass("more");
            $(this).html('<i class="fa fa-arrow-up" id="PhilReadMore"></i> Read Less...');
            $(this).addClass("less");
            } else {
            $(this).removeClass("less");
            $(this).html('<i class="fa fa-arrow-down" id="PhilReadMore"></i> Read More...');
            $(this).addClass("more");
            }
});
$("#toggleDavid").click(function() {
            $("#DavidBio").slideToggle("slow");  
            if($(this).hasClass("more")) {
            $(this).removeClass("more");
            $(this).html('<i class="fa fa-arrow-up" id="DavidReadMore"></i> Read Less...');
            $(this).addClass("less");
            } else {
            $(this).removeClass("less");
            $(this).html('<i class="fa fa-arrow-down" id="DavidReadMore"></i> Read More...');
            $(this).addClass("more");
            }
    });        