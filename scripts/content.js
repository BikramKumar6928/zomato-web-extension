$( window ).on( 'load', function() {
    setTimeout(function(){
        console.log("Log on main page");
        $('#items > ytd-mini-guide-entry-renderer:nth-child(2)').click();
    }, 5000);
   
});
