// DROP DOWN NAV BAR 
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-170px";
    }
    prevScrollpos = currentScrollPos;
}


/*
// Get the modal BILLEDER 
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

*/


var modal = document.getElementById('myModal');

function myFunction(imgs) {
    var modalImg = document.getElementById("img01");
    modalImg.src = imgs.src;
    modal.style.display = "block";
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
}

function closeThis() {
  if (event.target === modal) {
    modal.style.display = "none";
  }
}



/* billede gallery SEAMLESS BASIC */ 

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}


/* billede gallery myFSTVL */

var slidesIndex = 1;
showSlide(slidesIndex);

function plusSlide(n) {
  showSlide(slidesIndex += n);
}

function currentSlid(n) {
  showSlide(slidesIndex = n);
}

function showSlide(n) {
  var i;
  var slide = document.getElementsByClassName("mySlides1");
  var dots = document.getElementsByClassName("dot");
  if (n > slide.length) {slidesIndex = 1}    
  if (n < 1) {slidesIndex = slide.length}
  for (i = 0; i < slide.length; i++) {
      slide[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slide[slidesIndex-1].style.display = "block";  
  dots[slidesIndex-1].className += " active";
}