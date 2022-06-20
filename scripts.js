const cont = document.querySelector('.container');
const modeButtons = document.querySelectorAll('#color, #rainbow, #eraser')
const colorPicker = document.querySelector('#colorPick');
const sizeSlider = document.querySelector('#canvasSize');
const outputSlider = document.querySelector('#sliderValue')
const reset = document.getElementById('reset');

let drawMode;
let mouseDown;
let currentColor;
document.addEventListener('mousedown', () => {mouseDown = true})
document.addEventListener('mouseup', () => {mouseDown = false})
modeButtons.forEach(element => element.addEventListener('click', changeMode));
colorPicker.addEventListener("change", getColor);
sizeSlider.addEventListener('change', updateSize);
sizeSlider.addEventListener('input', updateSliderOutput)
reset.addEventListener('click', resetCanvas)

function getColor() {
  currentColor = colorPicker.value;
}

function updateSliderOutput() {
  outputSlider.textContent = `Output size: ${sizeSlider.value} x ${sizeSlider.value}`
  return sizeSlider.value
}

function updateSize(){
  canvasSize(updateSliderOutput());
}

function changeMode(e){
  if (!e) return drawMode = 'color';
  modeButtons.forEach(elem => elem.classList.remove('selected'));
  if(e.target.textContent === color.textContent) drawMode ='color';
  if(e.target.textContent === rainbow.textContent) drawMode = 'rainbow';
  if(e.target.textContent === eraser.textContent) drawMode = 'eraser';
  e.target.classList.add('selected');
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
  if(drawMode === 'color') e.target.style.backgroundColor = currentColor;
  if(drawMode === 'rainbow') {
    const randomR = Math.floor(Math.random()*256);
    const randomG = Math.floor(Math.random()*256);
    const randomB = Math.floor(Math.random()*256);
    e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB}`
  }
  if(drawMode === 'eraser') e.target.style.backgroundColor = "white";
}

function initialize() {
  getColor();
  changeMode();
  updateSliderOutput();
  canvasSize(sizeSlider.value)
}

initialize()