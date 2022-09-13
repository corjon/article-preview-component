const myButton = document.getElementById("share-button");
const mySocials = document.getElementById("socials");

myButton.addEventListener("click", myFunction);

function myFunction() {
  myButton.classList.toggle("button-clicked");
  mySocials.classList.toggle("socials-clicked");
}