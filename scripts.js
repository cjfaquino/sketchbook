const reset = document.getElementById('reset');
const cont = document.querySelector('.container');
console.log(reset);
let mouseDown = false;

document.addEventListener('mousedown', () => {mouseDown = true})
document.addEventListener('mouseup', () => {mouseDown = false})
reset.addEventListener('click', resetCanvas)


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
  e.target.style.backgroundColor = "black"
}

canvasSize(16)