/*$(function(){
  $("a[href*=#]:not([href=#])").click(function(){
    if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")||location.hostname==this.hostname){
      var a=$(this.hash);
      a=a.length?a:$("[name="+this.hash.slice(1)+"]");
      if(a.length){
        $("html,body").animate({scrollTop:a.offset().top},1000);
        return false}}})});*/
time = new Date().getTime();
$(window).scroll(function(c) {
    var d = new Date().getTime();
    var a = $(window).scrollTop();
    if (d - time > 50 && a < 700) {
        var b = (a / 300);
        $(".scroll-img").css("opacity", b);
        $(".location-label").css("opacity", 0.1 + Math.min(b / 2, 0.4));
        time = d
    }
});
$(document).ready(function() {
    var h = { Kolkata: "Kolkata, West Bengal", Jaipur: "Jaipur, Rajasthan", KGP: "Kharagpur, West Bengal" };
    var a = Object.keys(h);
    //var c=Math.floor(Math.random()*3);
    var c = 0;
    var f = Math.floor(Math.random() * a.length);
    var d = a[f];
    var g = "img/" + d + "/bg" + c + ".jpg";
    var i = "img/" + d + "/bg" + c + "-blur.jpg";
    var b = "url(" + g + ")";
    var e = "url(" + i + ")";
    $(".img-src").css("background-image", e);
    $(".scroll-img").css("background-image", b);
    $(".location-label").text(h[d])
});

var html5_audiotypes = { mp3: "audio/mpeg", mp4: "audio/mp4", ogg: "audio/ogg", wav: "audio/wav" };

function createsoundbite(d) {
    var b = document.createElement("audio");
    if (b.canPlayType) {
        for (var c = 0; c < arguments.length; c++) {
            var a = document.createElement("source");
            a.setAttribute("src", arguments[c]);
            if (arguments[c].match(/\.(\w+)$/i)) {
                a.setAttribute("type", html5_audiotypes[RegExp.$1])
            }
            b.appendChild(a)
        }
        b.load();
        b.playclip = function() {
            b.pause();
            b.currentTime = 0;
            b.play()
        };
        return b
    } else {
        return { playclip: function() { throw new Error("Your browser doesn't support HTML5 audio unfortunately") } }
    }
}
var fullname = createsoundbite("./MG.mp3");