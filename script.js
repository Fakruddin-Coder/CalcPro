/* =========================================
   CALCPRO CALCULATOR
========================================= */


/* Current calculator input */

let currentInput = "";


/* Previous input */

let previousInput = "";


/* Operator */

let operator = "";


/* Get display elements */

const display =
    document.getElementById("display");


const previousDisplay =
    document.getElementById(
        "previous-display"
    );


/* =========================================
   DISPLAY ANIMATION
========================================= */

function animateDisplay() {

    display.classList.remove(
        "display-pop"
    );


    // Force browser to restart animation

    void display.offsetWidth;


    display.classList.add(
        "display-pop"
    );

}


/* =========================================
   ADD VALUE
========================================= */

function appendValue(value) {


    /* Prevent multiple decimal points */

    if (value === ".") {

        const lastNumber =
            currentInput
                .split(/[\+\-\*\/%]/)
                .pop();


        if (
            lastNumber.includes(".")
        ) {

            return;

        }

    }


    /* Prevent multiple operators */

    if (
        "+-*/%".includes(value)
    ) {

        if (
            currentInput === ""
        ) {

            return;

        }


        const lastCharacter =
            currentInput[
                currentInput.length - 1
            ];


        if (
            "+-*/%".includes(
                lastCharacter
            )
        ) {

            return;

        }

    }


    /* Add value */

    currentInput += value;


    /* Update display */

    display.textContent =
        currentInput;


    /* Animate */

    animateDisplay();

}


/* =========================================
   CLEAR
========================================= */

function clearDisplay() {

    currentInput = "";

    previousInput = "";

    operator = "";


    display.textContent = "0";

    previousDisplay.textContent = "";


    animateDisplay();

}


/* =========================================
   DELETE LAST
========================================= */

function deleteLast() {

    currentInput =
        currentInput.slice(0, -1);


    if (
        currentInput === ""
    ) {

        display.textContent = "0";

    }

    else {

        display.textContent =
            currentInput;

    }


    animateDisplay();

}


/* =========================================
   CALCULATE
========================================= */

function calculate() {


    if (
        currentInput === ""
    ) {

        return;

    }


    try {


        /* Save original expression */

        const originalExpression =
            currentInput;


        /* Convert percentage */

        let expression =
            currentInput.replace(
                /(\d+(\.\d+)?)%/g,
                "($1/100)"
            );


        /* Calculate */

        const result =
            Function(
                "return " + expression
            )();


        /* Check invalid result */

        if (
            !isFinite(result)
        ) {

            showError();

            return;

        }


        /* Round result */

        const finalResult =
            Number(
                result.toFixed(10)
            );


        /* Previous display */

        previousDisplay.textContent =
            originalExpression + " =";


        /* Main display */

        display.textContent =
            finalResult;


        /* Store result */

        currentInput =
            String(finalResult);


        /* Animation */

        animateDisplay();

    }


    catch (error) {

        showError();

    }

}


/* =========================================
   ERROR
========================================= */

function showError() {

    display.textContent =
        "Error";


    display.classList.add(
        "error-shake"
    );


    currentInput = "";


    setTimeout(
        function () {

            display.classList.remove(
                "error-shake"
            );

        },
        400
    );

}


/* =========================================
   KEYBOARD SUPPORT
========================================= */

document.addEventListener(
    "keydown",
    function (event) {


        const key =
            event.key;


        /* Numbers */

        if (
            key >= "0" &&
            key <= "9"
        ) {

            appendValue(key);

        }


        /* Operators */

        else if (
            "+-*/.%".includes(key)
        ) {

            appendValue(key);

        }


        /* Enter */

        else if (
            key === "Enter"
        ) {

            event.preventDefault();

            calculate();

        }


        /* Backspace */

        else if (
            key === "Backspace"
        ) {

            deleteLast();

        }


        /* Escape */

        else if (
            key === "Escape"
        ) {

            clearDisplay();

        }

    }
);