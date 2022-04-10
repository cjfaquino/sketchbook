let mouseDown = false;
document.addEventListener('mousedown', () => {mouseDown = true})
document.addEventListener('mouseup', () => {mouseDown = false})

function newDiv(num) {  
  const cont = document.querySelector('.container');
  const div = document.createElement('div');
  div.style.height = "100%";
  div.style.width = "100%";
  div.style.border = "1px solid"
  cont.style = `grid-template-columns: repeat(${num}, 1fr)`
  cont.appendChild(div);
  div.addEventListener('mouseenter', draw)
}

function canvasSize(num) {
  if(num < 100){
    clearDiv('.container')
    for(let i = 0; i < num*num; i++) {
    newDiv(num)
    }
  }
}

function clearDiv(container) {
  const cont = document.querySelector(container);
  while (cont.firstChild) {
      cont.removeChild(cont.firstChild)
  }
}

function draw() {
  if(mouseDown){
    this.style.backgroundColor = "black"
  }
}

canvasSize(32)