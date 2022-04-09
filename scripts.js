
function newDiv(num) {  
  const cont = document.querySelector('.container');
  const div = document.createElement('div');
  div.style.height = "100%";
  div.style.width = "100%";
  div.style.backgroundColor = "red";
  div.style.border = "1px solid"
  cont.style = `grid-template-columns: repeat(${num}, 1fr)`
  cont.appendChild(div);
}

function canvasSize(num) {
  if(num < 100){
    deleteDiv('.container')
    for(let i = 0; i < num*num; i++) {
    newDiv(num)
    }
  }
}

function deleteDiv(container) {
  const cont = document.querySelector(container);
  while (cont.firstChild) {
      cont.removeChild(cont.firstChild)
  }
}