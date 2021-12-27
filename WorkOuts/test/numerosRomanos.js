function numerosRomanos(numero) {
    let miles=parseInt((numero / 1000)% 10);
	let centenas = parseInt((numero / 100)% 10);
	let decenas = parseInt((numero / 10) % 10);
	let unidades = numero % 10;

	let romano = primerCifra(miles, "M", "V", "X");
    romano += primerCifra(centenas, "C", "D", "M");
	romano += primerCifra(decenas, "X", "L", "C");
	romano += primerCifra(unidades, "I", "V", "X");

	return romano;
}

function conversionNumeros(primeraCifra, uno, cinco, diez) {
	let numeroRomano = "";

	if ((primeraCifra >= 1) & (primeraCifra <= 3)) {
		for (let i = 1; i <= primeraCifra; i++) {
			numeroRomano += uno;
		}
	}
	if (primeraCifra === 4) {
		numeroRomano += uno + cinco;
	}
	if ((primeraCifra >= 5) & (primeraCifra <= 8)) {
		numeroRomano += cinco;
		for (let i = 6; i <= primeraCifra; i++) {
			numeroRomano += uno;
		}
	}
	if (primeraCifra === 9) {
		numeroRomano += uno + diez;
	}

	return primeraCifraRomano;
}

module.exports = generarNumerosRomanos;
