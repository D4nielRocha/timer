class Timer{
    constructor(durationInput, startButton, pauseButton, stopButton, callbacks){
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;
        this.stopButton = stopButton;
        if(callbacks){
            this.onStart = callbacks.onStart;
            this.onTick = callbacks.onTick;
            this.onComplete = callbacks.onComplete;
            this.onStop = callbacks.onStop;
        }


        this.startButton.addEventListener('click', this.start);
        this.pauseButton.addEventListener('click', this.pause);
        this.stopButton.addEventListener('click', this.stop);

        //using .bind(this);
        // this.startButton.addEventListener('click', this.start.bind(this));
    }
    //Use arrow function so "this" refers to the instance of the object and not to the button itself.
    start = () => {
        if(this.onStart){
            this.onStart(this.timeRemaining);
        }
        this.tick();
        this.interval = setInterval(this.tick, 50);
    }


    //============================================================
    //tick function before using the "get" method bellow 
    // tick = () => {
    //     const timeRemaining = parseFloat(this.durationInput.value);
    //     timeRemaining == 0 ? this.pause() : this.durationInput.value = timeRemaining - 1;
    // }

    tick = () => {
        // this.timeRemaining == 0 ? this.pause() : this.timeRemaining = this.timeRemaining - 1;
        if(this.timeRemaining <= 0){
            this.pause();
            if(this.onComplete){
                this.onComplete();
            }
        } else {
            this.timeRemaining = this.timeRemaining - .05;
                if(this.onTick){
                    this.onTick(this.timeRemaining);
                }
        }
    }

    
    get timeRemaining(){
        return parseFloat(this.durationInput.value);
    }

    set timeRemaining(time){
        this.durationInput.value = time.toFixed(2);
    }
    
    pause = () => {
        clearInterval(this.interval);
    }
    stop = () => {
        console.log('Stopped!!');
        this.pause();
        this.onStop(); 
    }
    


    //=================================================
    //or use bind to change the value of "this"
    // start(){
    //     console.log(this);
    //     this.importantMethodCall();
    // }

    // importantMethodCall(){
    //     console.log('IMPORTANT THING WAS DONE!');
    // }
    //==================================================
}