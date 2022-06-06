var diallines = document.getElementsByClassName('diallines');
var clockE1=document.getElementsByClassName('clock')[0];

for(var i=0 ; i<60 ; i++){
    clockE1.innerHTML += `<div class='diallines'></div>`;
    diallines[i].style.transform="rotate(" + 6 * i + "deg)";
}


function clock(){
    d=new Date();
    h=d.getHours();
    m=d.getMinutes();
    s=d.getSeconds();
    date = d.getDate(); /* gün bu  */
    month=d.getMonth() + 1;
    year = d.getFullYear();
    
    day = d.getDay(); /* buda haftanın kaçıncı günü oldugu ama pazar 0 pazartesi 1 böyle gidiyo */

    hDeg = (h * 30) + (m * 1/2);
    mDeg = (m * 6) + (s * 1/10);
    sDeg = (s * 6);
    
    
    
    hourHand = document.querySelector('.hour-hand') ;
    minuteHand = document.querySelector('.minute-hand') ;
    secondHand = document.querySelector('.second-hand') ;
    dateDOM = document.querySelector('.date');
    dayDOM = document.querySelector('.day');


    hourHand.style.transform = `rotate(${hDeg}deg)`; 
    minuteHand.style.transform = `rotate(${mDeg}deg)`; 
    secondHand.style.transform = `rotate(${sDeg}deg)`; 

    dateDOM.innerText = date+'/'+month+'/'+year;
    dateDOM.style.color="white";
    dateDOM.style.fontSize="12px";

    dayDOM.style.color="white";
    dayDOM.style.fontSize="12px";

    let days= ['Pazar','Pazartesi','Salı','Çarşamba','Perşembe','Cuma','Cumartesi'];
    dayDOM.innerHTML=days[day];
}

setInterval(()=>{
    clock();
},100);