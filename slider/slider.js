let sliderBox = document.querySelector(".slider-box");
let slideElementArray = document.querySelectorAll(".slide");
let slideBoxLength = slideElementArray.length;
let copyFirst = sliderBox.firstElementChild.cloneNode(true);
let copyLast = sliderBox.lastElementChild.cloneNode(true);
let index = 1;
let moveCheck = true;

let radioButtons = document.querySelectorAll(".round-button");

sliderBox.appendChild(copyFirst);

sliderBox.insertBefore(copyLast, sliderBox.firstElementChild);

sliderBox.style.width = 300 * (slideBoxLength + 2) + "px";

sliderBox.style.transform = "translateX(-" + 300 * index + "px)";

for (i = 0; i < radioButtons.length; i++) {
  radioButtons[i].index = i + 1;
  radioButtons[i].addEventListener("click", buttonClick);
}
radioButtons[index - 1].style.backgroundColor = "grey";

function buttonClick() {
  if (moveCheck) {
    moveCheck = false;
    clearButton();
    this.style.backgroundColor = "grey";
    index = this.index;
    slideMove(1000);
    setTimeout(function () {
      moveCheck = true;
    }, 1000);
  }
}

function clearButton() {
  for (i = 0; i < radioButtons.length; i++) {
    radioButtons[i].style.backgroundColor = "";
  }
}

function slideMove(time) {
  sliderBox.style.transition = time + "ms";
  sliderBox.style.transform = "translateX(-" + 300 * index + "px)";
}

function slideToLeft() {
  if (moveCheck) {
    moveCheck = false;
    index--;
    slideMove(1000);
    clearButton();
    if (index < 1) {
      radioButtons[slideBoxLength - 1].style.backgroundColor = "grey";
    } else {
      radioButtons[index - 1].style.backgroundColor = "grey";
    }
    setTimeout(function () {
      if (index === 0) {
        index = slideBoxLength;
        slideMove(0);
      }
      moveCheck = true;
    }, 1000);
  }
}

function slideToRight() {
  if (moveCheck) {
    moveCheck = false;
    index++;
    slideMove(1000);
    clearButton();
    if (index === slideBoxLength + 1) {
      radioButtons[slideBoxLength - 5].style.backgroundColor = "grey";
    } else {
      radioButtons[index - 1].style.backgroundColor = "grey";
    }
    setTimeout(function () {
      if (index === slideBoxLength + 1) {
        index = 1;
        slideMove(0);
      }
      moveCheck = true;
    }, 1000);
  }
}
