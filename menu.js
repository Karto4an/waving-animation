var size_slider = document.getElementById("circle-size");
var circle = document.getElementsByClassName("circle")[0];
var size_label = document.getElementsByClassName("size_label")[0];

var wave_hight_slider = document.getElementById("wave-hight");
var wave = document.getElementsByClassName("wave")[0];
var wave_label = document.getElementsByClassName("wave_label")[0];

// var size_output = document.getElementById("");
size_label.innerHTML = `Size(${size_slider.value}px)`;

size_slider.oninput = function() {
//   output.innerHTML = this.value;
    size_label.innerHTML = `Size(${this.value}px)`;
    circle.style.height = `${this.value}px`;
    circle.style.width = `${this.value}px`;
}
wave_hight_slider.oninput = function() {
    wave.style.top = `${this.value}%`;
}