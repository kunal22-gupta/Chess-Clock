// Select all the input elements
const timeDiff = document.querySelector("#time-different");
const minP1 = document.querySelector("#minP1");
const extraSecP1 = document.querySelector("#extraSecP1");
const spaceToSwitch = document.querySelector("#spacebarSwitch");

// If time is different for both Players display new input element for Player 2
const minP2 = document.querySelector("#minP2");
const extraSecP2 = document.querySelector("#extraSecP2");
timeDiff.addEventListener("click", (e) => {
    if (timeDiff.checked) {
        minP2.classList.remove("d-none");
        extraSecP2.classList.remove("d-none");
    } else {
        minP2.classList.add("d-none");
        extraSecP2.classList.add("d-none");
    }
});

// Form Submit - action
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    // Store form inputs in variables
    const isTimeDiff = timeDiff.checked;
    const isSpaceToSwitch = spaceToSwitch.checked;
    let P1Min = minP1.value;
    let P1ExtraSec = extraSecP1.value;
    let P2Min = minP2.value;
    let P2ExtraSec = extraSecP2.value;
    if (!timeDiff.checked) {
        P2Min = P1Min;
        P2ExtraSec = P1ExtraSec;
    }
    // Change back to Default values
    timeDiff.checked = false;
    spaceToSwitch.checked = true;
    minP1.value = 1;
    extraSecP1.value = 5;
    minP2.value = 1;
    extraSecP2.value = 5;
});
