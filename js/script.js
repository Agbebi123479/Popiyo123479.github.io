let numbers = document.querySelectorAll('.number');
let operators = document.querySelectorAll(".enum")
let calculate = document.getElementById("calculate")
let clear = document.getElementById("clear")


calculate.addEventListener("click", (e) => {
    if (String(eval(document.getElementById("display").value)).length < 17) {
        document.getElementById("display").value = eval(document.getElementById("display").value)
    } else {
        document.getElementById("display").value = Number.parseFloat(eval(document.getElementById("display").value)).toPrecision(14)
    }
})

clear.addEventListener("click", (e) => {
    document.getElementById("display").value = ""
})

numbers.forEach((button) => {
    button.addEventListener('click', (e) => {
        document.getElementById("display").value += e.target.value;
    });
});

operators.forEach((button) => {
    button.addEventListener("click", (e) => {
        document.getElementById("display").value += e.target.value;
    })
})