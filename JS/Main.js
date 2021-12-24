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

function initTimer () {
         if(currentTask== "active"){
        var myfunc = setInterval(function() {

                let timeLeft = calculatedTime - 1;
                document.getElementById("timerClock").innerHTML = $` `

        

        }, 1000);
         }
        
};


newTimerButton.onclick  = function() {
        calculateTime(document.getElementById("timeInput").value);
        initTimer();
        currentTask="active";
        stateCheck();    
};
stopTimerButton.onclick  = function() {



        currentTask=null;
        stateCheck(); 
};
testTimerButton.onclick  = function() {
};
stateCheck();   