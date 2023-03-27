var navbar = document.querySelector(".navbar");
// when the scroll is higher than 20 viewport height, add the sticky class to the tag with a class navbar
window.onscroll = () => {
	this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}

// navbar Toggler

const navMenu = document.querySelector(".menu");
navTogle = document.querySelector(".menu-btn");
if(navTogle) {
	navTogle.addEventListener("click", () => {
		navMenu.classList.toggle("active");
	})
}

// closing menu when navlink is clicked 
const navLink = document.querySelectorAll(".nav-link");
function linkAction() {
	const navMenu = document.querySelector(".menu");
	navMenu.classList.remove("active")
}
navLink.forEach(n => n.addEventListener("click", linkAction))
// Product Colors

var pic = document.querySelector('#main-shoe');
var yellow = document.querySelector('.yellow');
var purple = document.querySelector('.purple');
var blue = document.querySelector('.blue');
var green = document.querySelector('.green');
var red = document.querySelector('.red');
const colors = document.querySelectorAll('.color');
// Store Product Info In Object

var info = [
	
	{	
		src: "images/products/YellowVans.png"
	},
	{
		src: "images/products/PurpleVans.png"
	},
	{
		src: "images/products/BlueVans.png"
	},
	{
		src: "images/products/GreenVans.png"
	},
	{
		src: "images/products/RedVans.png"
	}
]

// Change Color
yellow.addEventListener("click", function() {
	pic.src = info[0].src;
})
purple.addEventListener("click", function() {
	pic.src = info[1].src;
})
blue.addEventListener("click", function() {
	pic.src = info[2].src;
})
green.addEventListener("click", function() {
	pic.src = info[3].src;
})
red.addEventListener("click", function() {
	pic.src = info[4].src;
})

// active color
function color() {
	colors.forEach(c => c.classList.remove('active'));
	this.classList.add('active');
}
colors.forEach(c => c.addEventListener('click', color));