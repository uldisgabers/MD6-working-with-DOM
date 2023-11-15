// 1. button

document.getElementById("button-1").addEventListener("click", changeColorOfDiv1);

function changeColorOfDiv1() {
  const div1 = document.getElementById("box-1");
  div1.style.backgroundColor = "yellow";
}

// 2. button

document.getElementById("button-2").addEventListener("click", changeTextOfBox2);

function changeTextOfBox2() {
  const div2 = document.getElementById("box-2");
  div2.innerHTML = "SUCCESS"
}

// 3. button

document.getElementById("button-3").addEventListener("click", makeTheDivDissapear);

function makeTheDivDissapear() {
  const div3 = document.getElementById("box-3");
  div3.style.display = "none";
}

// 4. button

document.getElementById("button-4").addEventListener("click", makeTheDivDissapearAndReapear);

function makeTheDivDissapearAndReapear() {
  const div4 = document.getElementById("box-4");

  if (div4.style.display !== "none") {
    div4.style.display = "none";
  } else {
    div4.style.display = "flex";
  }
}

// 5. button

document.getElementById("button-5").addEventListener("click", makeDivChangeColorsToRandom);

function makeDivChangeColorsToRandom() {
  const div5 = document.getElementById("box-5");
  let colorsArr = ["#1f3b0e", "#0e3a3b", "#a67c00", "#a60032", "#a60032"];
  
  let randomIndex = Math.floor(Math.random() * (colorsArr.length))

  div5.style.backgroundColor = colorsArr[randomIndex];
  
}

// 6. button

document.getElementById("button-6").addEventListener("click", makeTimerWith3SecondIntervals);

let number = 0;
function makeTimerWith3SecondIntervals() {
  const div6: HTMLElement = document.getElementById("box-6");
  
  const intervalId = setInterval(() => {
    number += 1;
    div6.innerText = number.toString();

    if (number === 10) {
        clearInterval(intervalId);
    }
  }, 3000);
}

// 7. button

const changeAllBoxColors = () => {
  const allBoxes = document.getElementsByClassName('box') as HTMLCollectionOf<HTMLElement>;
  for (let i = 0; i < allBoxes.length; i++) {
    allBoxes[i].style.backgroundColor = "#18D5E1";
  }
}

const changeBodyColorToWhite = () => {
  const bodyColor = document.body
  bodyColor.style.backgroundColor = "#fff";
}

document.getElementById("button-7").addEventListener("click", changeAllBoxColors);
document.getElementById("button-7").addEventListener("click", changeBodyColorToWhite);

// 1. box to red

const firstBox = document.getElementById("box-1")
const changeFirstBoxColorWhenHover = () => {
  firstBox.style.backgroundColor = "red"
}

const revertFirstBoxColor = () => {
  firstBox.style.backgroundColor = document.getElementById("box-2").style.backgroundColor;
}

firstBox.addEventListener("mouseover", changeFirstBoxColorWhenHover);
firstBox.addEventListener("mouseout", revertFirstBoxColor);

// 5. box timer

const box5 = document.getElementById("box-5");
let count: number = 0; 
const startTimerInBox5 = () => {
  const intervalBox5 = setInterval(() => {
    count += 1;
    box5.innerText = count.toString();

    const timerInBox5Off = () => {
      count = 0;
      clearInterval(intervalBox5);
      box5.innerText = "0";
    }
    
    box5.addEventListener("mouseout", timerInBox5Off);

    if (count === 10 || count > 10) {
      clearInterval(intervalBox5);
    }

  }, 1000);
}

box5.addEventListener("mouseover", startTimerInBox5);

// input text shows under

function updateTextLabel() {
  let input = document.getElementById('input-text') as HTMLInputElement
  let label = document.getElementById('input-text-label') as HTMLLabelElement;
  label.innerHTML = input.value;
}

document.getElementById('input-text').addEventListener('input', updateTextLabel);