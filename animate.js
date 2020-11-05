// table of contents
// 1. Get element
// 2. Slider change image


// 1. Get element
var slider = document.getElementById("myRange");
var levelone = document.getElementById("levelone");
var leveltwo = document.getElementById("leveltwo");
var levelthree = document.getElementById("levelthree");
var levelfour = document.getElementById("levelfour");
var levefive = document.getElementById("levelfive");
var levelsix = document.getElementById("levelsix");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

// 2. Slider change image
slider.oninput = function() {
    if(this.value == 0) {
        levelone.classList.remove("hidden");
        leveltwo.classList.add("hidden");
        levelthree.classList.add("hidden");
        levelfour.classList.add("hidden");
        levelfive.classList.add("hidden");
        levelsix.classList.add("hidden");
    } else if (this.value == 1) {
        levelone.classList.add("hidden");
        leveltwo.classList.remove("hidden");
        levelthree.classList.add("hidden");
        levelfour.classList.add("hidden");
        levelfive.classList.add("hidden");
        levelsix.classList.add("hidden");
    } else if (this.value == 2) {
        levelone.classList.add("hidden");
        leveltwo.classList.add("hidden");
        levelthree.classList.remove("hidden");
        levelfour.classList.add("hidden");
        levelfive.classList.add("hidden");
        levelsix.classList.add("hidden");
    } else if (this.value == 3) {
        levelone.classList.add("hidden");
        leveltwo.classList.add("hidden");
        levelthree.classList.add("hidden");
        levelfour.classList.remove("hidden");
        levelfive.classList.add("hidden");
        levelsix.classList.add("hidden");
    } else if (this.value == 4) {
        levelone.classList.add("hidden");
        leveltwo.classList.add("hidden");
        levelthree.classList.add("hidden");
        levelfour.classList.add("hidden");
        levelfive.classList.remove("hidden");
        levelsix.classList.add("hidden");
    } else if (this.value == 5) {
        levelone.classList.add("hidden");
        leveltwo.classList.add("hidden");
        levelthree.classList.add("hidden");
        levelfour.classList.add("hidden");
        levelfive.classList.add("hidden");
        levelsix.classList.remove("hidden");
    }

    output.innerHTML = this.value;
}



