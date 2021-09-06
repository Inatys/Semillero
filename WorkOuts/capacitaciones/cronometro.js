let cinco_minutos = document.getElementById("cinco_m");
let diez_minutos = document.getElementById("diez_m");
let treinta_minutos = document.getElementById("treinta_m");
let segundo = document.getElementById("segundo");
let tiempo;

cinco_minutos .onclick = function () {
	tiempo = 5;
	mostrarHora();
	cargarMinutos(segundos)
};
diez_minutos .onclick = function () {
	tiempo = 10;
	mostrarHora();
	cargarMinutos(segundos)
};
treinta_minutos .onclick = function () {
	tiempo = 30;
	mostrarHora();
	cargarMinutos(segundos)
};
segundo .onchange = function () {

	tiempo = parseInt(document.getElementById("segundo").value);
    //console.log(tiempo);
	mostrarHora();
	cargarMinutos(segundos)
}; 
let segundos = 0;
let minutos = 0;

function cargarSegundo() {
	let txtSegundos;

	if (segundos < 0) {
		segundos = 59;
	}

	if (segundos < 10) {
		txtSegundos = `0${segundos}`;
	} else {
		txtSegundos = segundos;
	}
	document.getElementById("segundos").innerHTML = txtSegundos;
	segundos--;

	cargarMinutos(segundos);
}

function cargarMinutos(segundos) {
	let txtMinutos;

	if (segundos == -1 && minutos !== 0) {
		setTimeout(() => {
			minutos--;
		}, 500);
	} else if (segundos == -1 && minutos == 0) {
		setTimeout(() => {
			minutos = tiempo-1;
		}, 500);
	} 

	if (minutos < 10) {
		txtMinutos = `0${minutos}`;
	} else {
		txtMinutos = minutos;
	}
	document.getElementById("minutos").innerHTML =  txtMinutos;  
}
setInterval(cargarSegundo, 1000);

 function mostrarHora(){
    let hora_completa= new Date();
    let hora=hora_completa.getHours();
    let minutos=hora_completa.getMinutes();
    let hora_normal;
let horafinal;

	if (hora< 10) {
		hora_normal = `0${hora}`;
	} else {
		hora_normal = hora;
	}

    if(hora_normal>12){
        horafinal=`0${(hora_normal-12)}`;
    }else{
        horafinal=hora_normal;
    }
    


 
let horaaumentada;
let minutosAumentados;
    let minutosTerminar=(minutos+tiempo);
    let minutosFin=(minutosTerminar-(minutos+20));
    if(minutosTerminar>=60){
        horaaumentada=parseInt(horafinal)+1;
        minutosAumentados=minutosFin;
    }
    else{
        horaaumentada=horafinal;
        minutosAumentados=minutosTerminar;
    }
    

    
    //document.getElementById("hora_inicio").innerHTML =   tiempo+ ":"+"00";
    document.getElementById("hora_fin").innerHTML = horaaumentada + ":" + minutosAumentados;
    //console.log(minutos+tiempo);
}  


 