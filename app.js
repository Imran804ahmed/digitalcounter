// function timer(){
//     console.log("Imran")
// }
// setInterval(timer,1000)

// function timeout(){
//     console.log("Imran")
// }
// setTimeout(timeout,3000)


// var count = 0;
// var interval;
// function timer(){
//     count++
//     console.log(count)
// }
// interval = setInterval(timer,1000);

// function stop(){
//     clearInterval(interval)
// }
// setTimeout(stop,5000)




var min = 0;
var sec = 0;
var msec = 0;
var minheading = document.getElementById("min")
var secheading = document.getElementById("sec")
var msecheading = document.getElementById("msec")
var interval;
function timer(){
    msec++
    msecheading.innerHTML= msec;
    if(msec >=100){
        sec++
        secheading.innerHTML = sec;
        msec = 0;
    }
    else if (sec >= 60){
        min++
        minheading.innerHTML = min;
        sec = 0;
    }
}

function start(){
    interval = setInterval(timer,10)
    myFunction()
}
function myFunction() {
    document.getElementById("bt").disabled = true;
  }
  function myFunction1() {
    document.getElementById("bt").disabled = false;
  }
function stop(){
    clearInterval(interval)
    myFunction1()  
}

function reset(){
     min = 0;
     sec = 0;
     msec = 0;
    minheading.innerHTML = min;
    secheading.innerHTML = sec;
    msecheading.innerHTML = msec;
    stop()
    myFunction1() 
}
