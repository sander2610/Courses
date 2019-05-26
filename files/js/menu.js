/* -----     ANIMACIÓN MENU     ----- */
$('.menuLessons').click(function() {
    if($('.barMenu').hasClass('movRight')){
        $('.barMenu').addClass('movLeft').removeClass('movRight');
        $('.lineMenu').show();
        $('.x').hide();
    }
    else{
       $('.barMenu').addClass('movRight').removeClass('movLeft');
       $('.x').css({ 'display': "block" });
       $('.lineMenu').hide();

    }
});


/*document.oncontextmenu = function(){return false;}*/

/* -----     BOTON FULLSCREEN (barra de control del video)     ----- 
var e = document.getElementById("fullScreen");

e.onclick = function() {
    if (RunPrefixMethod(document, "FullScreen") || RunPrefixMethod(document, "IsFullScreen")) {
        RunPrefixMethod(document, "CancelFullScreen");
    }
    else {
        RunPrefixMethod(full, "RequestFullScreen");
    }
}

var pfx = ["webkit", "moz", "ms", "o", ""];
function RunPrefixMethod(obj, method) {
    
    var p = 0, m, t;
    while (p < pfx.length && !obj[m]) {
        m = method;
        if (pfx[p] == "") {
            m = m.substr(0,1).toLowerCase() + m.substr(1);
        }
        m = pfx[p] + m;
        t = typeof obj[m];
        if (t != "undefined") {
            pfx = [pfx[p]];
            return (t == "function" ? obj[m]() : obj[m]);
        }
        p++;
    }

}
*/