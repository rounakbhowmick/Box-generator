let button = document.getElementById('theBoxes');
button.addEventListener('click', myfunction);
let colourbutton = document.getElementById('colourbox');
colourbutton.addEventListener('click', colourgenerator);

let oldvalue = 0;
let i = 1;

function myfunction() {
    let n = document.getElementById('number').value;
    n = parseInt(n) + parseInt(oldvalue);
    for (; i <= n; i++) {
        let box = document.createElement('div');
        box.classList.add('myDiv');
        document.getElementById('box').appendChild(box);
        box.innerHTML = i;
        oldvalue = document.getElementById('box').lastElementChild.innerHTML;
    }
}

function colourgenerator() {
    let box = document.getElementById('box');
    let colour = document.getElementById('colour').value;
    console.log(colour);
    for (let k = 0; k < box.childNodes.length; k++)
        box.childNodes[k].style.backgroundColor = colour;
}