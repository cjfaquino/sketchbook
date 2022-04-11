const reset = document.getElementById('reset');
const bow = document.getElementById('bow');
const rainbow = document.getElementById('rainbow');
const cont = document.querySelector('.container');

const DEFAULT_CANVAS = 32;
const DEFAULT_MODE = 'bow';

let drawMode = DEFAULT_MODE;
let mouseDown = false;
document.addEventListener('mousedown', () => {mouseDown = true})
document.addEventListener('mouseup', () => {mouseDown = false})
bow.addEventListener('click', changeMode)
rainbow.addEventListener('click', changeMode)
reset.addEventListener('click', resetCanvas)

function changeMode(e){
  if(e.target.textContent === 'Black & White') return drawMode ='bow';
  if(e.target.textContent === 'Rainbow') return drawMode = 'rainbow';
}

function newDiv(num) {  
  const div = document.createElement('div');
  div.className = "dot";
  cont.style = `grid-template-columns: repeat(${num}, 1fr)`
  cont.appendChild(div);
  div.addEventListener('mouseover', draw)
  div.addEventListener('mousedown', draw)
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
  const divs = document.querySelectorAll('.dot')
  divs.forEach(div => div.style.backgroundColor = "white")
}

function draw(e) {
  if (e.type === 'mouseover' && !mouseDown) return;
  if(drawMode === 'bow') e.target.style.backgroundColor = "black";
  if(drawMode === 'rainbow') {
    const randomR = Math.floor(Math.random()*256);
    const randomG = Math.floor(Math.random()*256);
    const randomB = Math.floor(Math.random()*256);
    e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB}`
  }
}

canvasSize(DEFAULT_CANVAS)