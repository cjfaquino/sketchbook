const reset = document.getElementById('reset');
console.log(reset);
let mouseDown = false;

document.addEventListener('mousedown', () => {mouseDown = true})
document.addEventListener('mouseup', () => {mouseDown = false})
reset.addEventListener('click', resetCanvas)
const cont = document.querySelector('.container');

function newDiv(num) {  
  const div = document.createElement('div');
  div.className = "dot";
  cont.style = `grid-template-columns: repeat(${num}, 1fr)`
  cont.appendChild(div);
}

function canvasSize(num) {
  if(num < 100){
    clearDiv()
    for(let i = 0; i < num*num; i++) {
    newDiv(num)
    }
  }
}

function clearDiv() {
  while (cont.firstChild) {
      cont.removeChild(cont.firstChild)
  }
}

function resetCanvas() {
  divs.forEach(div => div.style.backgroundColor = "white")
}

function draw() {
  if(mouseDown){
    this.style.backgroundColor = "black"
  }
}

canvasSize(32)
const divs = document.querySelectorAll('.dot')
divs.forEach(div => div.addEventListener('mouseenter', draw))