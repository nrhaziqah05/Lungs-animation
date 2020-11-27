function refresh(){
    var slider = document.getElementById("range").value;
    document.getElementById("lung_gradient").setAttribute("y2", .98 - slider / 100);

    var tar = slider * 7;
    document.getElementById("tar-amount").innerHTML = tar;
    
    document.getElementById("slider-value").innerHTML = slider;
}
