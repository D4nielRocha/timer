const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const stopButton = document.querySelector('#stop');
const circle = document.querySelector('circle');

let defaultInput;

durationInput.addEventListener('change', () => {
  return defaultInput = durationInput.value;
});

const perimeter = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', perimeter);
 

let duration;

const timer = new Timer(durationInput, startButton, pauseButton, stopButton, {
    onStart(totalDuration){
        duration = totalDuration;
    },
    onTick(timeRemaining){
        circle.setAttribute('stroke-dashoffset',
        perimeter * timeRemaining / duration - perimeter
        );
    },
    onComplete(){
        durationInput.value = defaultInput;
        circle.setAttribute('stroke-dashoffset', 0);
    },
    onStop(){
        durationInput.value = defaultInput;
        console.log("Stop button clicked");
        circle.setAttribute('stroke-dashoffset', 0);
    }
});








//============================================================
// THE .CALL, .APPLY METHODS ---- SETS THE this TO BE WHICHEVER PARAMETER YOU PASS  

// const printThis = function(){
//     console.log(this);
// }

// printThis.call({color: 'red'});
// printThis.apply({color: 'red'});


//================================================================

//================================================================

//ASSIGN ON METHOD INSIDE AN OBJECT TO ANOTHER METHOD INSIDE ANOTHER OBJECT

// const color = {
//     printColor(){
//         console.log(this);
//     }
// };

// const randomObject = {
//     a: 1
// };

// randomObject.printColor = color.printColor;
// randomObject.printColor();



//================================================================
