const feriados = [
    "2026-01-01",
    "2026-04-21",
    "2026-05-01",
    "2026-09-07",
    "2026-10-12",
    "2026-11-02",
    "2026-11-15",
    "2026-12-25"
];

function ehFeriado(data) {
    const ano = data.getFullYear();
    const mes = String(data.getMonth() + 1).padStart(2, "0");
    const dia = String(data.getDate()).padStart(2, "0");

    const dataFormatada = `${ano}-${mes}-${dia}`;

    return feriados.includes(dataFormatada);
}

function calcular() {

    const ano = parseInt(document.getElementById("ano").value);
    const mes = parseInt(document.getElementById("mes").value);
    const valor = parseFloat(document.getElementById("valor").value);
    const passagens = parseInt(document.getElementById("passagens").value);

    let diasUteis = 0;
    let feriadosNoMes = 0;

    const ultimoDia = new Date(ano, mes, 0).getDate();

    for (let dia = 1; dia <= ultimoDia; dia++) {

        const data = new Date(ano, mes - 1, dia);

        const diaSemana = data.getDay();
        const fimDeSemana = (diaSemana === 0 || diaSemana === 6);

        if (ehFeriado(data)) {
            feriadosNoMes++;
        }

        if (!fimDeSemana && !ehFeriado(data)) {
            diasUteis++;
        }
    }

    const total = diasUteis * passagens * valor;

    document.getElementById("resultado").innerHTML = `
        Dias úteis: ${diasUteis}<br>
        Feriados no mês: ${feriadosNoMes}<br>
        Total: R$ ${total.toFixed(2)}
    `;
}
