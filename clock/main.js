//Get Current Date
let now = new Date();
document.getElementsByClassName("hourHand")[0].style.transform = 
  "rotate(" + now.getUTCHours() * 360 / 60 + "deg)";
document.getElementsByClassName("minuteHand")[0].style.transform = 
  "rotate(" + now.getUTCMinutes() * 360 / 60 + "deg)";
document.getElementsByClassName("secondHand")[0].style.transform = 
  "rotate(" + now.getUTCSeconds() * 360 / 60 + "deg)";
console.log("rotate(" + now.getSeconds() * 360 / 60 + "deg)");

// Set top and left for number
let number = document.getElementsByClassName("number");
for (let index = 0; index < number.length; index++) {
  const element = number[index];
  element.style.top = 230 * (1 - Math.cos(360 * (index + 1) * Math.PI / (12 * 180))) - 15 + "px";
  element.style.left = 230 * (1 + Math.sin(360 * (index + 1) * Math.PI / (12 * 180))) - 15 + "px";
}