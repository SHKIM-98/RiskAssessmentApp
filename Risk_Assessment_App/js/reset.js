const resetBT = document.querySelector("#reset button");
console.log(resetBT);

function makeReset(event)   {
    event.preventDefault();

    localStorage.clear();
}
resetBT.addEventListener("click",makeReset);
