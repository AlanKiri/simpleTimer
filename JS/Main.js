let currentTask = null;
let calculatedTime = 0;

function test (result) {

console.log(result);

};

function stateCheck () {
        switch (currentTask) {
                case(null):
                document.getElementById("newTimerButton").disabled = false;
                document.getElementById("stopTimerButton").disabled = true;
                break;
                case("active"):
                document.getElementById("newTimerButton").disabled = true;
                document.getElementById("stopTimerButton").disabled = false;

        }
};

function calculateTime (inputString)
{
       if (!inputString== ''){
        calculatedTime=0;
        let inputStringArray = inputString.split(" ");

               for(let i = 0; i<inputStringArray.length ;i++){

                inputStringArray.forEach(element => {
                        if (Number(inputStringArray[i])) {
                        inputStringArray[i]= Number(inputStringArray[i]);
                        }
                }      
                        );

                if (i % 2 == 0){
                        switch(inputStringArray[i+1]) {
                                case 'h':
                                case 'H':
                                case 'hr':
                                case 'Hr':
                                case 'hour':
                                case "Hour":
                                case 'hours':
                                case "Hours":
                                        calculatedTime += (inputStringArray[i] * 3600);
                                        break;
                                case 'm':
                                case 'M':
                                case 'min':
                                case 'Min':
                                case 'minute':
                                case 'Minute':
                                case 'minutes':
                                case 'Minutes':
                                        calculatedTime += (inputStringArray[i] * 60);
                                        break;
                                case 's':
                                case 'S':
                                case 'sec':
                                case 'Sec':
                                case 'secs':
                                case 'Secs':
                                case 'second':
                                case "Second":
                                case 'seconds':
                                case "Seconds":
                                        calculatedTime += (inputStringArray[i] );
                                        break;
                                default:
                                break;
                        }
                };
        };
        test(calculatedTime);
        return;
       };


};

function secondsToString (timeLeft){
        let d = Math.floor(timeLeft / (3600*24));
        let h = Math.floor(timeLeft % (3600*24) / 3600);
        let m = Math.floor(timeLeft % 3600 / 60);
        let s = Math.floor(timeLeft % 60);    
        return (`Days: ${d}, Hours: ${h}, Minutes: ${m}, Seconds: ${s}.`)


};

function timer(ms) { return new Promise(res => setTimeout(res, ms)); }

async function initTimer (calculatedTime) {
        if(currentTask=="active"){

                async function printToInner (value){
                        await timer(1000);
                        document.getElementById("timerClock").innerHTML = secondsToString(value);
                };

                
                for( let i = calculatedTime; i>0 ;i--){
                        if (i==0 || currentTask==null)
                        {
                                document.getElementById("timerClock").innerHTML = '';
                                break;
                        };
               
                        test(i);
                        await printToInner (i);
                        
                };


}
        
};


newTimerButton.onclick  = function() {
        currentTask="active";
        stateCheck();     
        calculateTime(document.getElementById("timeInput").value);
        initTimer(calculatedTime);
};
stopTimerButton.onclick  = function() {
        currentTask=null;
        document.getElementById("timerClock").innerHTML = '';
        stateCheck(); 
};
testTimerButton.onclick  = function() {
};
stateCheck();   