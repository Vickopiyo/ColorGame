var diffEls = document.querySelectorAll(".diff__btn");
var diffEl = document.querySelector(".diff__btn.active").innerHTML;
var n = diffEl;
var colorsEl = document.querySelector(".colors");
var colorsBlocks;
var rgbEl = document.querySelector(".rgb");
var statusEl = document.querySelector(".status");
var colors = [];
createBlocks(n);
resetGame();

function checkColors(e) {
  // your code here
  for (let i = 0; i < colorsBlocks.length; i++) {
    colorsBlocks[i].addEventListener('click', ()=>{
      console.log(colorsBlocks[i].style.backgroundColor);
      console.log(colorsBlocks[i].style.backgroundColor)
      if (colorsBlocks[i].style.backgroundColor === colors[pickedColor]) {
        statusEl.textContent = "CORRECT!!"
        resetBtn.textContent = "New game?";
        changeColors();
        header.style.backgroundColor = colors[pickedColor]
        statusEl.style.backgroundColor = colors[pickedColor]
      } else {
        colorsBlocks[i].style.backgroundColor = 'black'
      }
    })
 
  }

}

function resetGame() {
  createBlocks(n);
  document.body.style.color = "black";
  colors = [];
  pickColors();
  pickedColor = random(n);
  rgbEl.innerHTML = colors[pickedColor];
  setColors();
  statusEl.innerHTML =
    "Try to guess the right color based on the RGB value by clicking on the blocks.";
}

function setColors() {
  for (var i = 0; i < colorsBlocks.length; i++) {
    colorsBlocks[i].style.backgroundColor = colors[i];
  }
}

function pickColors() {
  for (var i = 0; i < n; i++) {
    colors.push(randomColor());
  }
}

function randomColor() {
  return "rgb(" + random(255) + ", " + random(255) + ", " + random(255) + ")";
}

function random(r) {
  return Math.floor(Math.random() * r);
}

function setNumberOfTiles(e) {
  // your code here
  for(let i = 0 ; i <= 1 ; i++){ 
    diffEls[i].addEventListener('click', ()=>{
    diffEls[0].classList.remove('active');
    diffEls[1].classList.remove('active');
    diffEls[i].classList.add('active');
    diffEls[i].innerHTML === '6' ? n = 6 : n = 9;
    resetGame()
  })
}
}

function createBlocks(num) {
  colorsEl.innerHTML = "";

  // here is an example of a loop that is used to create the blocks of color depending on you choice ie 6 or 9, however you need to add event listeners
  for (var i = 0; i < num; i++) {
    var block = document.createElement("div");
    block.classList.add("colors__block");
    colorsEl.appendChild(block);
  }
  colorsBlocks = document.querySelectorAll(".colors__block");
  for (var i = 0; i < colorsBlocks.length; i++) {
    colorsBlocks[i].addEventListener("click", checkColors);
  }
}

// check ccolor of block ===color selected
function changeColors(){
  for(let i=0; i<colorsBlocks.length;i++){
    colorsBlocks[i].style.backgroundColor=colors[pickedColor]
  }
}
