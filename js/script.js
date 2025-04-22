document.querySelector("form").addEventListener("submit", e => {
    e.preventDefault();
    const n1 = Number(document.querySelector("#n1").value);
    const n2 = Number(document.querySelector("#n2").value);
    const operator = document.querySelector("#operations").value;
    const result = document.querySelector(".result");
    let calculate;

    switch (operator) {
        case "+":
            calculate = n1 + n2;
            break;
        case "-":
            calculate = n1 - n2;
            break;
        case "*":
            calculate = n1 * n2;
            break;
        case "/":
            calculate = n1 / n2;
            break;
        default:
            result.innerText = "Operação não reconhecida!";
    }
    const formattedValue = new Intl.NumberFormat("pt-BR", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 2
    }).format(calculate);
    result.innerText = `${n1} ${operator} ${n2} = ${formattedValue}`;
    document.querySelectorAll("#n1, #n2").forEach(input => input.value = "");
});
