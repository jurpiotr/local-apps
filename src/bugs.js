console.log('I am bugs.js!');

document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded. Ready to go!");
  addBug();
  arrowMoving();
});
const typeBug = (type, bug) => {
  const high = document.querySelector('#high');
  const middle = document.querySelector('#middle');
  const low = document.querySelector('#low');
  const newBug = document.createElement('p');
  newBug.className = 'singleBug';
  newBug.innerText = bug.value;
  const arrowBug = document.createElement('img');
  arrowBug.setAttribute('src','img/arrow.svg');
  arrowBug.className = 'arrowLeft';
  const arrowBug2 = document.createElement('img');
  arrowBug2.setAttribute('src','img/arrow.svg');
  arrowBug2.className = 'arrowRight';
  newBug.appendChild(arrowBug);
  newBug.appendChild(arrowBug2);

  newBug
  if(type === 'high'){
    if(high.firstElementChild && (high.firstElementChild.innerText === 'No bugs')){
      high.removeChild(high.firstElementChild);
    }
    high.appendChild(newBug);
  } else if (type === 'middle'){
    if(middle.firstElementChild && (middle.firstElementChild.innerText === 'No bugs')){
      middle.removeChild(middle.firstElementChild);
    }
    middle.appendChild(newBug);
  }else if(type === 'low'){
    if(low.firstElementChild && (low.firstElementChild.innerText === 'No bugs')){
      low.removeChild(low.firstElementChild);
    }
    low.appendChild(newBug);
  }

}
const addBug = () => {
  const area = document.querySelector('.level-left');
  const button = document.querySelector('#bug-add');
  const bug = document.querySelector('#bug');
  const bugType = document.querySelector('#bug-type');

  area.addEventListener('click', (b) => {
    if(b.target === button){
      const type = bugType.value;
      typeBug(type, bug)
    }

  });
}

const arrowMoving = () => {
  const columns = document.querySelector('.columns');
  const high = document.querySelector('#high');
  const middle = document.querySelector('#middle');
  const low = document.querySelector('#low');

  columns.addEventListener('click', (arrow) => {
    if(arrow.target.getAttribute('class') === 'arrowLeft'){
      const thisBug = arrow.target.parentElement;
      const parent = thisBug.parentElement.parentElement.parentElement;
      const cloneBug = thisBug.cloneNode(true);
      thisBug.parentElement.removeChild(thisBug);
      if(parent.previousElementSibling){
        parent.previousElementSibling.firstElementChild.children[1].appendChild(cloneBug);
      }
    }
    if(arrow.target.getAttribute('class') === 'arrowRight'){
      const thisBug = arrow.target.parentElement;
      const parent = thisBug.parentElement.parentElement.parentElement;
      const cloneBug = thisBug.cloneNode(true);
      thisBug.parentElement.removeChild(thisBug);
      if(parent.nextElementSibling){
        parent.nextElementSibling.firstElementChild.children[1].appendChild(cloneBug);
      }
    }
  });
}









