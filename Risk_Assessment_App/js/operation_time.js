const timeFormSearch = document.querySelector("#search");
const searchInTime = document.querySelector("#search input:first-child");
const searchOutTime = document.querySelector("#search input:nth-child(2)");
const searchTimeBanner = document.querySelector("#search_time");

const timeFormAmbush = document.querySelector("#ambush");
const ambushInTime = document.querySelector("#ambush input:first-child");
const ambushOutTime = document.querySelector("#ambush input:nth-child(2)");
const ambushTimeBanner = document.querySelector("#ambush_time");

const SEARCH_TIME = "searchTime";
const AMBUSH_TIME = "ambushTime";

function checkTimeForm(inTime,outTime)    {
    if(Number.isInteger(parseInt(inTime)) && Number.isInteger(parseInt(outTime)))   {
        // parseInt는 String "2.2" -> 2 로 바꾸는 특징
        if(inTime>=0 && inTime<=24 && outTime>=0 && outTime<=24) {
            return  true
        }   else    {
            alert("입력 시간 형식은 00시~00시 입니다 (시간값이 맞지 않습니다)")
            return false
        }
    } else  {
        alert("입력 시간 형식은 00시~00시 입니다 (정수를 입력하시오)")
        return false
    }
}

function getSearchTime(event)    {
    event.preventDefault();

    const inTime = searchInTime.value;
    const outTime = searchOutTime.value;
    const searchTime = [inTime, outTime];

    if(checkTimeForm(inTime,outTime) === true) {
        localStorage.setItem(SEARCH_TIME,JSON.stringify(searchTime));
        timeFormSearch.classList.add(CLASS_HIDDEN);

        searchTimeBanner.innerText = `수색 ${inTime}시 ~ ${outTime}시`;
        searchTimeBanner.classList.remove(CLASS_HIDDEN);
    }  
}

function getAmbushTime(event)    {
    event.preventDefault();

    const inTime = ambushInTime.value;
    const outTime = ambushOutTime.value;
    const ambushTime = [inTime, outTime];

    if(checkTimeForm(inTime,outTime) === true) {
        localStorage.setItem(AMBUSH_TIME,JSON.stringify(ambushTime));
        timeFormAmbush.classList.add(CLASS_HIDDEN)

        ambushTimeBanner.innerText = `매복 ${inTime}시 ~ 익일${outTime}시`;
        ambushTimeBanner.classList.remove(CLASS_HIDDEN);
    }
}

console.log(timeFormSearch);
console.log(timeFormAmbush);

timeFormSearch.addEventListener("submit",getSearchTime);
timeFormAmbush.addEventListener("submit",getAmbushTime);