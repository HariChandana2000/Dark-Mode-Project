const toggle = document.getElementById("toggle-container");
const circle = document.getElementById("circle");
const body = document.getElementById("body-id");
const sunImage = document.getElementById("sun-img");
let isToggleLeft = true;

toggle.addEventListener("click", function (e) {
  //move the circle
  if (isToggleLeft) {
    circle.style.transform = "translateX(55px)";
    isToggleLeft = false;
    body.style.backgroundColor = "black";
    body.style.color = "white";
    body.style.backgroundImage = "url('images/night.gif')";
    body.style.backgroundPosition = "center";
    body.style.backgroundSize = "cover";
    body.style.backgroundRepeat = "none";
    body.style.objectFit = "cover";
    sunImage.style.display = "none";
  } else {
    circle.style.transform = "translateX(-2px)";
    isToggleLeft = true;
    body.style.backgroundColor = "white";
    body.style.color = "black";
    body.style.backgroundImage = "none";
    sunImage.style.display = "inline-block";
  }
});
