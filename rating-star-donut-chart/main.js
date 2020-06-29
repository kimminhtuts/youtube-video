let sumPercent = 0;
let i = 0;
donut = document.getElementById("donut");
document.getElementById("text").innerHTML = "100%";

function setRate(percent) {
  i = i + 1;
  sumPercent = ((sumPercent * (i - 1) + percent * 100) / i).toFixed(2);
  let angle = 360 * sumPercent / 100;
  donut.style["stroke-dashoffset"] = angle * Math.PI * 300 / 180;
  document.getElementById("text").innerHTML = sumPercent + "%";
}