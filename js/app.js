let list = document.getElementsByClassName("progressbar");
for (let div of list) {
  div.style.height = div.offsetWidth + "px";
}

var sliderBarCon = document.getElementById("fillCon");
var sliderBarAge = document.getElementById("fillAge");
sliderBarCon.style.width = "12%";
sliderBarAge.style.width = "55%";

function sliderChangeCon(val) {
  let text = document.getElementById("slider-value-con");
  text.textContent = `${val}%`;
  sliderBarCon.style.width = val + "%";
}

function sliderChangeAge(val) {
  let text = document.getElementById("slider-value-age");
  text.textContent = val;
  sliderBarAge.style.width = val + "%";
}

function isElementInViewport(el, val) {
  var rect = el.getBoundingClientRect();
  return (
    rect.bottom + val > 0 &&
    rect.right > 0 &&
    rect.left < (window.innerWidth || document.documentElement.clientWidth) &&
    rect.top + val <
      (window.innerHeight || document.documentElement.clientHeight)
  );
}
const viewPort = () => {
  let el = document.getElementById("visibleDiv");
  let ad = document.getElementById("ad-section");
  let isVisible = isElementInViewport(el, 800);
  let adVisible = isElementInViewport(ad, 150);
  var btnDiv = document.getElementById("btn-container");
  var btn = document.getElementById("btn");
  if (adVisible) {
    btnDiv.style.position = "relative";
    btnDiv.style.height = "3rem";
    btnDiv.style.zIndex = 10;
    btn.style.borderRadius = "9px";
  } else if (isVisible) {
    btnDiv.style.position = "fixed";
    btnDiv.style.height = "4rem";
    btnDiv.style.zIndex = 100;
    btn.style.borderRadius = "0";
  } else {
    btnDiv.style.position = "relative";
    btnDiv.style.height = "3rem";
    btnDiv.style.zIndex = 10;
    btn.style.borderRadius = "9px";
  }
};
