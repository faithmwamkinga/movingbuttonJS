// const button=document.getElementById("button");
// let stopButton=false;
// function moveButton(isReturning){
//     const width=button.parentNode.clientWidth;
//     const left=parseInt(button.style.left,15) ||0;
//     if(!stopButton){
//         button.style.left=(isReturning? left-1:left+1)+'px';
//         setTimeout(()=>moveButton((isReturning && left>0)|| left===width -button.clientWidth),15);
//     };
// };
// moveButton();


// button.addEventListener('click', () => {
//     // type in your code here
  
//   });



// const button = document.getElementById('button');
// let stopped = false;
 
// function move(isReturning) {
//  const width = button.parentNode.clientWidth;
//  const left = parseInt(button.style.left , 10) || 0;
//  if (!stopped) {
//     button.style.left = (isReturning ? left - 1 : left + 1) + 'px';
//     setTimeout(() => move ((isReturning && left > 0) || left === width - button.clientWidth ), 10);
//  };
// };
 
// move();

// button.addEventListener('click', () => {
//     move(false); // Initiates the button movement
//   });
  
const button = document.getElementById('button');
let stopped = false;

function move(isReturning) {
  const width = button.parentNode.clientWidth;
  const left = parseInt(button.style.left, 10) || 0;
  
  if (!stopped) {
    button.style.position = 'absolute';
    button.style.left = (isReturning ? left - 1 : left + 1) + 'px';
    setTimeout(() => move((isReturning && left > 0) || left === width - button.clientWidth), 10);
  }
}

move();

button.addEventListener('click', () => {
  move(false);
});
