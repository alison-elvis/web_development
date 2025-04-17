document.querySelector("form").addEventListener("submit", e => {
    e.preventDefault();
    const n1 = Number(document.querySelector("#n1").value);
    const n2 = Number(document.querySelector("#n2").value);
    const operatior = document.querySelector("#operations").value;
    const result = document.querySelector(".result");
    let calculate;

    switch (operatior) {
        case "+":
            calculate = n1 + n2;
            result.innerText = `${n1} + ${n2} = ${calculate}`;
            break;
        case "-":
            calculate = n1 - n2;
            result.innerText = `${n1} - ${n2} = ${calculate}`;
            break;
        case "*":
            calculate = n1 * n2;
            result.innerText = `${n1} * ${n2} = ${calculate}`;
            break;
        case "/":
            calculate = n1 / n2;
            result.innerText = `${n1} / ${n2} = ${calculate}`;
            break;
        default:
            result.innerText = "Operação não reconhecida!";
    }
    document.querySelectorAll("#n1, #n2").forEach(input => input.value = "");
});
