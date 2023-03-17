let seconds = 00;
let ms = 00;
let minutes = 00;

let getSeconds = document.querySelector('.seconds');
let getMinutes = document.querySelector('.minutes');
let getMs = document.querySelector('.ms');


let start = document.querySelector('.btn-start');
let stop = document.querySelector('.btn-stop');
let reset = document.querySelector('.btn-reset');

let interval;

start.addEventListener('click', () => {
   interval = setInterval(startTimer, 10);
});

stop.addEventListener('click', () => {
  clearInterval(interval);
});

reset.addEventListener('click', () => {
  clearInterval(interval);
  ms = '00';
  seconds = '00';
  minutes = '00';
  getSeconds.innerHTML = seconds;
  getMinutes.innerHTML = minutes;
  getMs.innerHTML = ms;
})


function startTimer() {
  ms++;
  if(ms < 10){
    getMs.innerHTML = '0' + ms;
  }
  if(ms > 9){
    getMs.innerHTML = ms;
  }
  if(ms > 99){
    seconds++;
    getSeconds.innerHTML = '0' + seconds;
    ms = 0;
    getMs.innerHTML = '0' + 0; 
    
  }

  if(seconds > 9) {
    getSeconds.innerHTML = seconds;

  }

  if(seconds > 59) {
    minutes++;
    getMinutes.innerHTML = '0' + minutes;
    seconds = 0;
    getSeconds.innerHTML = '0' + 0;

  }

  if(min > 9) {
    getMinutes.innerHTML = minutes;
  }

}