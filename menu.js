const size_slider = document.getElementById("circle-size");
const circle = document.getElementsByClassName("circle")[0];
const size_label = document.getElementsByClassName("size_label")[0];

const wave_hight_slider = document.getElementById("wave-height");
const wave = document.getElementsByClassName("wave")[0];
const wave_label = document.getElementsByClassName("wave_label")[0];

const wave_square_width = document.getElementById("wave_square_width");
const wave_square_width_label = document.getElementsByClassName("wave_square_width_label")[0];
const wave_square_height = document.getElementById("wave_square_height");
const wave_square_height_label = document.getElementsByClassName("wave_square_height_label")[0];

const html_code = document.getElementById("html_code");
const css_code = document.getElementById("css_code");

// var size_output = document.getElementById("");
size_label.innerHTML = `Size(${size_slider.value}px)`;
wave_label.innerHTML = `Wave hight(${wave_hight_slider.value}%)`;
wave_square_width_label.innerHTML = `Wave square width(${wave_square_width.value}%)`;
wave_square_height_label.innerHTML = `Wave square height(${wave_square_height.value}%)`;

size_slider.oninput = function() {
//   output.innerHTML = this.value;
    size_label.innerHTML = `Size(${this.value}px)`;
    circle.style.height = `${this.value}px`;
    circle.style.width = `${this.value}px`;
}
wave_hight_slider.oninput = function() {
    wave_label.innerHTML = `Wave hight(${this.value}%)`;
    wave.style.top = `${this.value}%`;
}
wave_square_width.oninput = function() {
    wave_square_width_label.innerHTML = `Wave square width(${this.value}%)`;
    wave.style.width = `${this.value}%`;
}
wave_square_height.oninput = function() {
    wave_square_height_label.innerHTML = `Wave square height(${this.value}%)`;
    wave.style.height = `${this.value}%`;
}