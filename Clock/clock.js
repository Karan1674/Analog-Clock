let hour = document.getElementById('hour');
let minute = document.getElementById('minute');
let second = document.getElementById('second');

function displayTime()
{
    let date=new Date();
    let hh = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    let hourRotation= ((30*hh) + (min/2) + (sec/120));
    let minRotation = ((6*min) + (sec/10));
    let secRotation = ((6*sec));

    hour.style.transform=`rotate(${hourRotation}deg)`;
    minute.style.transform=`rotate(${minRotation}deg)`;
    second.style.transform=`rotate(${secRotation}deg)`;
}


setInterval(displayTime,1000);