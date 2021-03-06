const contratoUsoDeImagemABI = [
	{
		"constant": true,
		"inputs": [],
		"name": "nomeEmpresa",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "receberPeloUso",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "qualEnderecoDoAgente",
				"type": "address"
			}
		],
		"name": "definirEnderecoDoAgente",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "qualNomeDaEmpresa",
				"type": "string"
			}
		],
		"name": "definirNomeDaEmpresa",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	}
];
var contratoUsoDeImagem = web3.eth.contract(contratoUsoDeImagemABI).at("0x7EC5d823B0D23F2740E6CcEf633CBaBfDa570e4f");
function obtemNomeEmpresa() {
    contratoUsoDeImagem.nomeEmpresa({from: contaUsuario, gas: 3000000, value: 0}, function (err, resultado) {
        if (err)    {
            console.log("Erro");
            console.error(err);
        } else {
            console.log("Resultado");
            let objStatus = document.getElementById("spanNomeEmpresa");
            console.log(resultado);
            objStatus.innerText = resultado;
        }
    });
}

function registrarNomeEmpresa() {
	var statusTransacao = document.getElementById("statusTransacaoNomeEmpresa");
	var nomeEmpresa = document.formNomeEmpresa.campoNomeEmpresa.value;
	statusTransacao.innerHTML = "Enviando transação. Por favor monitore seu Metamask.";
	contratoUsoDeImagem.definirNomeDaEmpresa(nomeEmpresa, {from: contaUsuario, gas: 3000000, value: 0}, function (err, resultado) {
        if (err)    {
            console.log("Erro");
			console.error(err);
			statusTransacao.innerHTML = "Erro: " + err;
        } else {
            console.log("Resultado");
            console.log(resultado);
            statusTransacao.innerHTML = "Transação enviada ao Blockchain Ethereum. Faça a monitoração pelo hash: " + resultado;
        }
    });
}

function registrarEnderecoDoAgente() {
	var statusTransacao = document.getElementById("statusTransacaoEnderecoDoAgente");
	var enderecoDoAgente = document.formEnderecoDoAgente.campoEnderecoDoAgente.value;
	statusTransacao.innerHTML = "Enviando transação. Por favor monitore seu Metamask.";
	contratoUsoDeImagem.definirEnderecoDoAgente(enderecoDoAgente, {from: contaUsuario, gas: 3000000, value: 0}, function (err, resultado) {
        if (err)    {
            console.log("Erro");
			console.error(err);
			statusTransacao.innerHTML = "Erro: " + err;
        } else {
            console.log("Resultado");
            console.log(resultado);
            statusTransacao.innerHTML = "Transação enviada ao Blockchain Ethereum. Faça a monitoração pelo hash: " + resultado;
        }
    });
}
