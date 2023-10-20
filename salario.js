import escolha from 'readline-sync';

console.log(`Escolha uma das alternativas:\n`)
console.log(`1 - Listar os salários minímos de 2010 à 2020`)
console.log(`2 - Listar o índice IPCA de 2010 à 2020`)
console.log(`3 - Comparação entre o percentual de aumento salarial e o IPCA\n`)

//carreira programador Front-end 16º missão

let salarioMinimo = [
    {ano: 2010, salario: 510.00},
    {ano: 2011, salario: 545.00},
    {ano: 2012, salario: 622.00},
    {ano: 2013, salario: 678.00},
    {ano: 2014, salario: 724.00},
    {ano: 2015, salario: 788.00},
    {ano: 2016, salario: 880.00},
    {ano: 2017, salario: 937.00},
    {ano: 2018, salario: 954.00},
    {ano: 2019, salario: 998.00},
    {ano: 2020, salario: 1045.00}
];

let inflacao = [
    {ano: 2010, ipca: 5.91},
    {ano: 2011, ipca: 6.50},
    {ano: 2012, ipca: 5.84},
    {ano: 2013, ipca: 5.91},
    {ano: 2014, ipca: 6.41},
    {ano: 2015, ipca: 10.67},
    {ano: 2016, ipca: 6.29},
    {ano: 2017, ipca: 2.95},
    {ano: 2018, ipca: 3.75},
    {ano: 2019, ipca: 4.31},
    {ano: 2020, ipca: 4.52}
];

let opcao = Number(escolha.question("Digite o numero da sua escolha: "));

let anoLabel = "Ano: ";
let salarioLabel = "Salário mínimo: ";
let crescimentoLabel = "Crescimento Salarial: ";
let ipcaLabel = "Inflação IPCA: ";

anoLabel = anoLabel.padEnd(25,'.');
salarioLabel = salarioLabel;
crescimentoLabel = crescimentoLabel.padEnd(25,'.');
ipcaLabel = ipcaLabel.padEnd(25,'.');

switch(opcao){
    case 1:
        for (let contador = 0; contador <= salarioMinimo.length-1; contador++) {
            let ano = salarioMinimo[contador].ano;
            let salario = salarioMinimo[contador].salario.toFixed(2).replace(".",",");

            console.log("\nAno: ".padEnd(25,'.') + ano);
            console.log("Salário Mínimo: ".padEnd(24,'.') + "R$ " + salario);
        }
        break;
    case 2:
        for (let contador = 0; contador <= inflacao.length-1; contador++) {
            let ano = inflacao[contador].ano;
            let ipca = inflacao[contador].ipca.toFixed(2).replace(".",",");

            console.log("\n");
            console.log("Ano: ".padEnd(25,'.') + ano);
            console.log("Inflação IPCA: ".padEnd(25,'.') + ipca + "%");
        }
        break;
    case 3:
        for (let contador = 0; contador <= salarioMinimo.length-1; contador++) {
            let ano = salarioMinimo[contador].ano;
            let salario = salarioMinimo[contador].salario;
            let ipca = inflacao[contador].ipca.toFixed(2).replace(".",",");
            let percentualCrescimento;
            let crescimentoFormatado;

            let salarioFormatado = salario.toFixed(2).replace(".",",");

            if (contador > 0){
                let salarioAnterior = salarioMinimo[contador-1].salario;
                let diferenca = salario - salarioAnterior;
                
                percentualCrescimento = (diferenca / salarioAnterior) * 100;
                crescimentoFormatado = percentualCrescimento.toFixed(2).replace(".",",") + "%";
            }
            else {
                crescimentoFormatado = "-";
            }

            console.log("\nAno: ".padEnd(26,'.') + ano);
            console.log("Salário Mínimo: ".padEnd(25,'.') + "R$ " + salarioFormatado);
            console.log("Crescimento Salarial: ".padEnd(25,'.') + crescimentoFormatado);
            console.log("Inflação IPCA: ".padEnd(25,'.') + ipca + "%");
        }
        break;
    default:
        console.log(`Opção Inválida!`);
        break;
}

// unset NPM_CONFIG_PREFIX
//nvm use 18
//npm init -y (na pasta do projeto ja)
//npm install readline-sync
//no arquivo criado na pasta (package.json) adicionar "type": "module", na pŕimeira chaves
//node arquivo.js