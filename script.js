function calcular() {

    const ano = parseInt(
        document.getElementById("ano").value
    );

    const mes = parseInt(
        document.getElementById("mes").value
    );

    const valor = parseFloat(
        document.getElementById("valor").value
    );

    const passagens = parseInt(
        document.getElementById("passagens").value
    );

    let diasUteis = 0;

    const ultimoDia =
        new Date(ano, mes, 0).getDate();

    for (let dia = 1; dia <= ultimoDia; dia++) {

        const data =
            new Date(ano, mes - 1, dia);

        const semana =
            data.getDay();

        if (semana !== 0 && semana !== 6) {
            diasUteis++;
        }
    }

    const total =
        diasUteis *
        passagens *
        valor;

    document.getElementById(
        "resultado"
    ).innerHTML =
        `Dias úteis: ${diasUteis}<br>
         Total: R$ ${total.toFixed(2)}`;
}