var bebidaEscolhida = 'café';
var valorBebida;

switch (bebidaEscolhida) {
    case 'café':
        valorBebida = 4.50;
        break;
    case 'leite':
        valorBebida = 3.00;
        break;
    case 'chá':
        valorBebida = 3.50;
        break;
    default:
        console.log("Escolha inválida. Por favor, selecione entre café, leite ou chá.");
}

console.log(`Você escolheu ${bebidaEscolhida}. Valor a pagar: R$ ${valorBebida.toFixed(2)}`);