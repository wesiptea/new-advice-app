const dot = document.querySelector(".dot");
const adviceNumber

const getAPI = async function () {
    const adviceRequest = await fetch ("https://api.adviceslip.com/advice");
    const getAdvice = await adviceRequest.json();
    console.log(getAdvice);
    displayNew(getAdvice);
};

dot.addEventListener("click", function () {
    displayNew(getAPI);
});
 
const displayNew = function (data) {
    const adviceNumber = data.getAdvice.slip_id;
    const header = document.querySelector("h6");
    header.innerHTML = `<h6>Advice #${adviceNumber}</h6>`;

    const adviceSelected = data.getAdvice.advice;
    const adviceText = document.querySelector("p");
    adviceText.innerHTML = `<p>"${adviceSelected}"</p>`;
};







    // fetch random advice and grab its id number 

    // click event: generate/show on screen new API string with number and generate/show on screen new API advice




