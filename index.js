
function updateClock(){

    const now = new Date();
    let hours = now.getHours();
    const meridiem = hours >= 12 ? "PM":"AM"
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2, 0)
    const minute = now.getMinutes().toString().padStart(2, 0);
    const seconds = now.getSeconds().toString().padStart(2, 0);
    const timeString = `${hours}:${minute}:${seconds} ${meridiem}`
    let clock = document.getElementById("clock");
    // document.getElementById("clock").textContent = timeString
    clock.textContent = timeString
}

updateClock()   
setInterval(updateClock, 1000)