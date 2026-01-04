function converter() {
  const valor = parseFloat(document.getElementById("valor").value);
  const moeda = document.getElementById("moeda").value;
  const resultado = document.getElementById("resultado");

  if (isNaN(valor) || valor <= 0) {
    resultado.innerText = "Digite um valor válido.";
    return;
  }

  // 1 Real (BRL) equivale a:
  const taxas = {
    USD: 0.1844,
    EUR: 0.1555,
    JPY: 28.9106,
    GBP: 0.1369,
    AUD: 0.2755,
    CAD: 0.253,
    CHF: 0.1461,
    CNY: 1.2895
  };

  const convertido = valor * taxas[moeda];

  resultado.innerText = `≈ ${convertido.toFixed(2)} ${moeda}`;
}
