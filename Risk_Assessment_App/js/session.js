function checkSession() {
    // 로그인 여부 체킹
    const user = localStorage.getItem(USER_KEY);

    if(user === null)   {
        userName.classList.add(CLASS_HIDDEN);
        loginForm.classList.remove(CLASS_HIDDEN);

        console.log("statement : Logout")
    }

    // 수색 매복 시간 입력 체킹
    const searchTime = localStorage.getItem(SEARCH_TIME);
    const ambushTime = localStorage.getItem(AMBUSH_TIME);

    if(searchTime === null && ambushTime === null) {
        timeFormSearch.classList.remove(CLASS_HIDDEN);
        searchTimeBanner.classList.add(CLASS_HIDDEN);
        timeFormAmbush.classList.remove(CLASS_HIDDEN);
        ambushTimeBanner.classList.add(CLASS_HIDDEN);

        weatherTable.classList.add(CLASS_HIDDEN);
    }   else    {
        weatherTable.classList.remove(CLASS_HIDDEN);
    }
}

setInterval(checkSession,1000);