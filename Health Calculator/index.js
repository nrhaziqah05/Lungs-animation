var slider = document.getElementById("range");
var heart = document.getElementById("icon");
// var tar = document.getElementById("tar-amount");


heart.style.backgroundPosition = "0 "+"-"+slider.value+"px";
slider.oninput=function(){
    heart.style.backgroundPosition = "0 "+"-"+slider.value+"px";

    var tar = this.value * 7;
    document.getElementById("tar-amount").innerHTML = tar;
}
