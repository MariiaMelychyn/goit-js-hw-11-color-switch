const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];


const refs = {
    body: document.body,
    buttonStart: document.querySelector('button [data-action="start"]'),
    buttonStop: document.querySelector('button [data-action="stop"]'),
}


const INTERVAL_DELAY = 1000;
let intervalId = null;


refs.buttonSrart.addEventListener('click', changeColor);
refs.buttonStop.addEventListener('click', onButtonStop);


const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

function changeColor (){
    intervalId = setInterval(() => {
        refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
    }, INTERVAL_DELAY);
    refs.buttonStart.disabled = true;
};


function onButtonStop (){
    clearInterval(intervalId);
    refs.buttonStart.disabled = false;
}