// verify that link to js file is correct
// document.querySelector("h1").innerHTML="Test JS OK"

// Eyewink : test on the footer img 
document.querySelector("footer img").addEventListener("mouseover",clindoeil)

// Eyewink : iteration for all the images of section3 
var s4Img = document.querySelectorAll("#section4 img")
for (var i = 0; i < s4Img.length; i++) {
    s4Img[i].addEventListener("mouseover",clindoeil); 
    }

function clindoeil(event){
    event.srcElement.setAttribute("src","./public/images/oeil/eye2.png");
    setTimeout(function () {
        event.srcElement.setAttribute("src","./public/images/oeil/eye1.png" );}, 300);
}