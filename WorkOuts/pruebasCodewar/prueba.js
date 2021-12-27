//ejercicio prueba
/*  function animal(obj){
let frase="This "+obj.color+ " "+obj.name+ " has " + obj.legs + " legs.";
onsole.log(frase);
                               
return frase;
}
animal(animal({name:"dog",legs:4,color:"white"}));
animal(animal({name:"cock",legs:2,color:"red"}));
                               */
/* primer ejercicio */
//codigo propio
/* let cuentaPalabras;

function billboard(name,price=30){
  let cuentaTotal=0;
  for(let i=0;i<name.length;i++){
    console.log(name[i]);
    cuentaPalabras=name.length;   
    cuentaTotal=cuentaTotal+price;
  }

  console.log(cuentaPalabras)
  console.log(cuentaTotal)
  return cuentaTotal
} 
 billboard("nataly")

 // codigo sugerido
 function billboard(name, price = 30){

    var totalCost = 0;
    for(i=0; i<name.length; i++){
        totalCost += price;
    } 
    
    return totalCost;
    
    } */

/* segundo ejercicio */
//codigo propio
/*  function lovefunc(flower1, flower2){
    let petalos1=flower1%2;
   console.log(petalos1)
   let petalos2=flower2%2;
   console.log(petalos2)
    // moment of truth
    if(petalos1===petalos2){
      console.log("No estan enamorados")
        return false;
    }else{
      console.log("Estan enamorados")
       return true;
    }
  }
lovefunc(2, 5);

//codigo sugerido
function lovefunc(flower1, flower2){
  return ((flower1%2==0 && flower2%2!=0) || (flower1%2!=0 && flower2%2==0)) ? true : false;
}
 */

/* tercer ejercicio */
//codigo propio
/* 
  function strCount(str,letter){  
    let totalRepite=0;
   //code here
   for(let i=0;i<str.length;i++){
    console.log(str[i]);
    if(str[i]===letter){
      
      totalRepite= totalRepite+1;
    }else{
      totalRepite= totalRepite+0;
    }
   
   }
   console.log(totalRepite);
   return totalRepite;
   
  
 }
strCount("pala","a");
strCount("pal","o");

//codigo sugerido
function strCount(str, letter){  
  
  let count = 0;
  
  for (let i = 0; i < str.length; i++) {
    if (str[i] == letter)
      count++;
  }
  
  return count;
  
} */
/* cuarto ejercicio */
//codigo propio
/* let posicion = "";
let palabra = "";
let final = "";
function htmlspecialchars(formData) {
	// Insert your code here
	for (let i = 0; i < formData.length; i++) {
		palabra = formData[i];
		console.log(palabra);
		if (formData[i] === "<") {
			posicion = formData[i].length;
			//posicion="&lt";
			final = palabra + posicion;
		}
	}
	console.log(final);
}
htmlspecialchars("h<ola");
 */

/* function pickIt(arr){
  var odd=[],even=[];
  //coding here
    for (var i=0;i<arr.length;i++){
     let numero=arr[i];
       console.log(numero)
      let parImpar=numero%2;
      //cero es par
      //console.log(numero);
      if(parImpar==0){
       even.push(numero)
      }else{
         odd.push(numero)
      }
  }
  console.log(odd)
   console.log(even)
  return [odd,even];
}
pickIt([1,2])
 */


function padIt(str,n){
  //coding here
 let signo = "*";
  let palabra;
 let numero = 1;

  while(numero<=n){  
        numero++;
       if (numero%2==0){
    palabra=signo+str;
         console.log(palabra)
  }
     if (numero%2==1){
    palabra=palabra+signo;
    console.log(palabra)
  }
    
}
   return palabra;

}

padIt("a",1);
padIt("a",2);