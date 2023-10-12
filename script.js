let celciusIInput = document.querySelector(".panel .celcius");
let fahrenheitInput = document.querySelector(".panel .fahrenheit");
let kelvinInput = document.querySelector(".panel .kelvin");
let btn = document.querySelector(".buttons")

function roundnumber (number){
    return Math.round(number*100)/100;
}

celciusIInput.addEventListener('input',function(){
let ctemp = parseFloat(celciusIInput.value);
let ftemp = ctemp*(9/5) +32;
let ktemp = ctemp + 273.15;
if(celciusIInput.value==''){
ktemp='';
ftemp='';
}
fahrenheitInput.value= roundnumber(ftemp);
kelvinInput.value= roundnumber(ktemp);
})

fahrenheitInput.addEventListener('input',function(){
    let ftemp = parseFloat(fahrenheitInput.value);
    let ctemp = (ftemp -32) * (5/9)
    let ktemp = ctemp + 273.15;
    if(fahrenheitInput.value==''){
        ctemp='';
        ktemp='';
    }
    celciusIInput.value= roundnumber(ctemp);
    kelvinInput.value= roundnumber(ktemp);
    })

    kelvinInput.addEventListener('input',function(){
        let ktemp = parseFloat(kelvinInput.value);
        let ctemp = ktemp - 273.15;
        let ftemp = ctemp*(9/5) +32;
   
        if(kelvinInput.value==''){
            ctemp=" ";
            ftemp=" ";
        }
        celciusIInput.value= roundnumber(ctemp);
        fahrenheitInput.value= roundnumber(ftemp);
        })
    
btn.addEventListener('click',function(){
    celciusIInput.value ="";
    kelvinInput.value="";
    fahrenheitInput.value="";
})