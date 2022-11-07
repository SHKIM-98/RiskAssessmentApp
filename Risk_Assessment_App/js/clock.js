const currentTime = document.querySelector("#current_time");
const DATE_KEY = "date";

function getClock()    {
    const date_now = new Date();

    const year = date_now.getFullYear();
    const month = date_now.getMonth();
    const date = date_now.getDate();
    const hours = String(date_now.getHours()).padStart(2,"0");
    const minutes = String(date_now.getMinutes()).padStart(2,"0");
    const seconds = String(date_now.getSeconds()).padStart(2,"0");
    
    const total = `${year}년 ${month}월 ${date}일 ${hours}:${minutes}:${seconds}`
    const total_array = JSON.stringify([year, month, date, hours, minutes, seconds]);
    localStorage.setItem(DATE_KEY,total_array);

    currentTime.innerText = `Current Time : ${total}`;
}

getClock();
setInterval(getClock,1000);