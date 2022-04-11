const cont = document.querySelector('.container');
const modeButtons = document.querySelectorAll('#bow, #rainbow, #eraser')
const sizeSlider = document.querySelector('#canvasSize');
const outputSlider = document.querySelector('#sliderValue')
const reset = document.getElementById('reset');

let drawMode;
let mouseDown;
document.addEventListener('mousedown', () => {mouseDown = true})
document.addEventListener('mouseup', () => {mouseDown = false})
modeButtons.forEach(element => element.addEventListener('click', changeMode));
sizeSlider.addEventListener('change', updateSize);
sizeSlider.addEventListener('input', updateSliderOutput)
reset.addEventListener('click', resetCanvas)

function updateSliderOutput() {
  outputSlider.textContent = `${sizeSlider.value} x ${sizeSlider.value}`
  return sizeSlider.value
}

function updateSize(){
  canvasSize(updateSliderOutput());
}

function changeMode(e){
  if(!e) return drawMode ='bow';
  if(e.target.textContent === bow.textContent) return drawMode ='bow';
  if(e.target.textContent === rainbow.textContent) return drawMode = 'rainbow';
  if(e.target.textContent === eraser.textContent) return drawMode = 'eraser';
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
  clearDiv()
  for(let i = 0; i < num*num; i++) {
  newDiv(num)
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
  if(drawMode === 'eraser') e.target.style.backgroundColor = "white";
}

function initialize(){
  changeMode();
  updateSliderOutput();
  canvasSize(sizeSlider.value)
}

initialize()