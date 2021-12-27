let tbody = document.getElementById("tbody");
let baseUrl = "https://api.coinranking.com/v2/coins";
let proxyUrl = "https://cors-anywhere.herokuapp.com/";
let apiKey = "coinranking2045480989ac3c46ba34125446a7502f4a05cec69cd943ec";

fetch(`${proxyUrl}${baseUrl}`, {
	method: "GET",
	headers: {
		"Content-Type": "application/json",
		"x-access-token": `${apiKey}`,
		"Access-Control-Allow-Origin": "*",
	},
})
	.then((response) => {
		console.log(response);
		if (response.ok) {
			response.json().then((json) => {
				console.log(json.data.coins);
				let coinsData = json.data.coins;
				coinsData.forEach((coins) => {
				tbody.innerHTML += `                    
                <tr id="fila">                
                <td>${coins.uuid}</td>
                <td>${coins.btcPrice}</td>
                <td>${coins.rank}</td>
                <td>${coins.tier}</td>
                <td><img class="icono" src="${coins.iconUrl}"></td>
                <td id="nombre">${coins.name}</td>
                <td>$${coins.price}</td>
                <td>${coins.symbol}</td>
                </tr>                
                `;
				});
			});
		}
	})
	.catch((error) => {
		console.log(error);
	});
//window.setInterval('refresh()', 3600000)
function filtrar() {
	let input,textoInput,elementoAFiltrar,textoElementoAFiltrar,txtValue;
	input = document.getElementById("inputSerch");
	textoInput = input.value.toUpperCase();
	elementoAFiltrar = document.querySelectorAll("#fila");
	for (let i = 0; i < elementoAFiltrar.length; i++) {
		textoElementoAFiltrar = elementoAFiltrar[i].querySelectorAll("#nombre")[0];
		txtValue = textoElementoAFiltrar.textContent 
		if (txtValue.toUpperCase().indexOf(textoInput) > -1) {
			elementoAFiltrar[i].style.display = "";
		} else {
			elementoAFiltrar[i].style.display = "none";
		}
	}
}

//cantidad de cripto que compra*el precio del bitcoin actual
//0.16*61.194
