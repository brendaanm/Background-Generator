const css = document.querySelector("h3");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.getElementById("gradient");
//this function will create gradient background colour changes
//this function is linked to index.html on input within the body
function setGradient() {
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

  // this adds text content to the page showing the gradient and RGB colours
  css.textContent = body.style.background + ";";
}
