
console.log(data);


/*
var estudiante = data.AQP['2017-1'].students;
var select = document.getElementById("seleccion").value;
document.getElementById("seleccion").value = "";
var op1 = document.getElementById("p1").text;
var op2 = document.getElementById("p2").text;

 
 function varEstudiante(){

if (select === op1) {

	var estudiante = data.AQP['2016-2'].students;

} else if (select === op2) {
    
   var estudiante = data.AQP['2017-1'].students;

}

};

console.log(estudiante);

*/

var generacion = data.AQP['2016-2'].students;


/* inscritas y bajas - recuadro ENROLLMENT */

var contInsc = document.getElementById("inscritas-bajas");
var incrBajas = document.createElement("li");
var incrBajas2 = document.createElement("li");
var insc = document.createElement("span");
var bajas = document.createElement("span");
var bajasCont = 0;
var inscCont = 0;
var total = 0;
var porcentaje = 0;


for (var i = 0; i < generacion.length; i++) {
	
	total++;


	if (generacion[i].active === true ) {
         
        ++inscCont;

	} else if (generacion[i].active === false) {

		++bajasCont;
	}

}


 porcentaje = parseInt((bajasCont * 100) / total);


    // cantidad inscritas
    insc.appendChild(document.createTextNode(inscCont));
    incrBajas.appendChild(insc);
    contInsc.appendChild(incrBajas);
    // frase
    var frase = document.createElement("p");
    var texto = document.createTextNode("# Students currently enrolled");
    frase.appendChild(texto);
    incrBajas.appendChild(frase);

    //porcentaje de deserciones
    bajas.appendChild(document.createTextNode(porcentaje + "%"));
    bajas.setAttribute("class", "red");
    incrBajas2.appendChild(bajas);
    contInsc.appendChild(incrBajas2);

    var frase2 = document.createElement("p");
    var texto2 = document.createTextNode("% Dropout");
    frase2.appendChild(texto2);
    incrBajas2.appendChild(frase2);






// VARIABLES SPRINTS

var sprint1 = [];
var sprint1MetaHSE = 800;
var sprint1MetaTech = 1100;

var sprint2 = [];
var sprint2MetaHSE = 800;
var sprint2MetaTech = 1200;

var sprint3 = [];
var sprint3MetaHSE = 800;
var sprint3MetaTech = 1300;

var sprint4 = [];
var sprint4MetaHSE = 800;
var sprint4MetaTech = 1400;



for (var i = 0; i < generacion.length; i++) { // variables de notas para cada sprint
	
    sprint1.push(generacion[i].sprints[0]);
    sprint2.push(generacion[i].sprints[1]);
    sprint3.push(generacion[i].sprints[2]);
    sprint4.push(generacion[i].sprints[3]);
    
}






// VARIABLES PARA DATOS DE TECH POR SPRINT

// SPRINT 1
var sprint1Tech = [];
var sprint1TechMeta = 0; // cantidad de alumnas que alcanzaron la meta
var sprint1TechMetaPorcentaje = 0;// porcentaje de alumnas que alcanzaron la meta
var sprint1TechNotas = 0; // suma de notas de Tech
var sprint1TechPromedio = 0; // promedio de notas

// SPRINT 2
var sprint2Tech = [];
var sprint2TechMeta = 0; // cantidad de alumnas que alcanzaron la meta
var sprint2TechMetaPorcentaje = 0;// porcentaje de alumnas que alcanzaron la meta
var sprint2TechNotas = 0; // suma de notas de Tech
var sprint2TechPromedio = 0; // promedio de notas

// SPRINT 3
var sprint3Tech = [];
var sprint3TechMeta = 0; // cantidad de alumnas que alcanzaron la meta
var sprint3TechMetaPorcentaje = 0;// porcentaje de alumnas que alcanzaron la meta
var sprint3TechNotas = 0; // suma de notas de Tech
var sprint3TechPromedio = 0; // promedio de notas

// SPRINT 4
var sprint4Tech = [];
var sprint4TechMeta = 0; // cantidad de alumnas que alcanzaron la meta
var sprint4TechMetaPorcentaje = 0;// porcentaje de alumnas que alcanzaron la meta
var sprint4TechNotas = 0; // suma de notas de Tech
var sprint4TechPromedio = 0; // promedio de notas


for (var i = 0; i < sprint1.length; i++) { // array con notas de Tech por sprint

	sprint1Tech.push(sprint1[i].score['tech']);
	sprint2Tech.push(sprint2[i].score['tech']);
	sprint3Tech.push(sprint3[i].score['tech']);
	sprint4Tech.push(sprint4[i].score['tech']);

}

for (var i = 0; i < sprint1Tech.length; i++) {// cantidad de alumnas que alcanzan la meta en el sprint1
	
	if (sprint1Tech[i] >= sprint1MetaTech) {

         ++sprint1TechMeta
		
	}
}

for (var i = 0; i < sprint2Tech.length; i++) {// cantidad de alumnas que alcanzan la meta en el sprint2
	
	if (sprint2Tech[i] >= sprint2MetaTech) {

         ++sprint2TechMeta
		
	}
}

for (var i = 0; i < sprint3Tech.length; i++) {// cantidad de alumnas que alcanzan la meta en el sprint3
	
	if (sprint3Tech[i] >= sprint3MetaTech) {

         ++sprint3TechMeta
		
	}
}

for (var i = 0; i < sprint4Tech.length; i++) {// cantidad de alumnas que alcanzan la meta en el sprint4
	
	if (sprint4Tech[i] >= sprint4MetaTech) {

         ++sprint4TechMeta
		
	}
}

sprint1TechMetaPorcentaje = parseInt((sprint1TechMeta * 100) / sprint1Tech.length) // porcentaje de alumnas que alcanzaron la meta en el sprint1

sprint2TechMetaPorcentaje = parseInt((sprint2TechMeta * 100) / sprint2Tech.length) // porcentaje de alumnas que alcanzaron la meta en el sprint2

sprint3TechMetaPorcentaje = parseInt((sprint3TechMeta * 100) / sprint3Tech.length) // porcentaje de alumnas que alcanzaron la meta en el sprint3

sprint4TechMetaPorcentaje = parseInt((sprint4TechMeta * 100) / sprint4Tech.length) // porcentaje de alumnas que alcanzaron la meta en el sprint4







// VARIABLES PARA DATOS DE HSE POR SPRINT

//SPRINT 1
var sprint1HSE = []; // array con notas HSE 
var sprint1HSEMeta = 0; // cantidad de alumnas que alcanzaron la meta
var sprint1HSEMetaPorcentaje = 0;// porcentaje de alumnas que alcanzaron la meta
var sprint1HSENotas = 0; // suma de notas de HSE
var sprint1HSEPromedio = 0; // promedio de notas

//SPRINT 2
var sprint2HSE = []; // array con notas HSE 
var sprint2HSEMeta = 0; // cantidad de alumnas que alcanzaron la meta
var sprint2HSEMetaPorcentaje = 0;// porcentaje de alumnas que alcanzaron la meta
var sprint2HSENotas = 0; // suma de notas de HSE
var sprint2HSEPromedio = 0; // promedio de notas

//SPRINT 3
var sprint3HSE = []; // array con notas HSE 
var sprint3HSEMeta = 0; // cantidad de alumnas que alcanzaron la meta
var sprint3HSEMetaPorcentaje = 0;// porcentaje de alumnas que alcanzaron la meta
var sprint3HSENotas = 0; // suma de notas de HSE
var sprint3HSEPromedio = 0; // promedio de notas

//SPRINT 4
var sprint4HSE = []; // array con notas HSE 
var sprint4HSEMeta = 0; // cantidad de alumnas que alcanzaron la meta
var sprint4HSEMetaPorcentaje = 0;// porcentaje de alumnas que alcanzaron la meta
var sprint4HSENotas = 0; // suma de notas de HSE
var sprint4HSEPromedio = 0; // promedio de notas



for (var i = 0; i < sprint1.length; i++) { // array con notas de HSE por sprint

	sprint1HSE.push(sprint1[i].score['hse']);
	sprint2HSE.push(sprint2[i].score['hse']);
	sprint3HSE.push(sprint3[i].score['hse']);
	sprint4HSE.push(sprint4[i].score['hse']);

}

for (var i = 0; i < sprint1HSE.length; i++) {// cantidad de alumnas que alcanzan la meta en el sprint1
	
	if (sprint1HSE[i] >= sprint1MetaHSE) {

         ++sprint1HSEMeta
		//sprint1HSEMeta.push(sprint1HSE[i]); //para sacar las notas
	}
}




for (var i = 0; i < sprint2HSE.length; i++) {// cantidad de alumnas que alcanzan la meta en el sprint2
	
	if (sprint2HSE[i] >= sprint2MetaHSE) {

         ++sprint2HSEMeta
		
	}
}

for (var i = 0; i < sprint3HSE.length; i++) {// cantidad de alumnas que alcanzan la meta en el sprint3
	
	if (sprint3HSE[i] >= sprint3MetaHSE) {

         ++sprint3HSEMeta
	}
}

for (var i = 0; i < sprint4HSE.length; i++) {// cantidad de alumnas que alcanzan la meta en el sprint4
	
	if (sprint4HSE[i] >= sprint4MetaHSE) {

         ++sprint4HSEMeta
	}
}


sprint1HSEMetaPorcentaje = parseInt((sprint1HSEMeta * 100) / sprint1HSE.length) // porcentaje de alumnas que alcanzaron la meta en el sprint1

sprint2HSEMetaPorcentaje = parseInt((sprint2HSEMeta * 100) / sprint2HSE.length) // porcentaje de alumnas que alcanzaron la meta en el sprint2

sprint3HSEMetaPorcentaje = parseInt((sprint3HSEMeta * 100) / sprint3HSE.length) // porcentaje de alumnas que alcanzaron la meta en el sprint3

sprint4HSEMetaPorcentaje = parseInt((sprint4HSEMeta * 100) / sprint4HSE.length) // porcentaje de alumnas que alcanzaron la meta en el sprint4



// PARA SACAR PROMEDIO DE HSE

for (var i = 0; i < sprint1HSE.length; i++) {
	
	var sprint1HSEPromedio = parseInt((sprint1HSENotas += sprint1HSE[i])/total);

}





// PROMEDIO GENERAL DE NOTAS (HSE Y TECH) 
var sprint1Meta = (sprint1HSEMeta + sprint1TechMeta) / 2;
var sprint2Meta = (sprint2HSEMeta + sprint2TechMeta) / 2;
var sprint3Meta = (sprint3HSEMeta + sprint3TechMeta) / 2;
var sprint4Meta = (sprint4HSEMeta + sprint4TechMeta) / 2;
var sprintsMetaTotal = (sprint1Meta + sprint2Meta + sprint3Meta + sprint4Meta) / 4;
var sprintsMetaPorcentaje = parseInt((sprintsMetaTotal * 100) / total);



/* metas - recuadro ACHIEVEMENT */

var contMeta = document.getElementById("meta");
var contLogro = document.createElement("li");
var contPorLogro = document.createElement("li");
var logro = document.createElement("span");
var porcentajeLogro = document.createElement("span");


// promedio de cantidad de alumnas que lograron las meta en los 4 sprint
    logro.appendChild(document.createTextNode(sprintsMetaTotal));
    contLogro.appendChild(logro);
    contMeta.appendChild(contLogro);
    // frase
    var fraseLogro = document.createElement("p");
    var textoLogro = document.createTextNode("# Students that meet the target");
    fraseLogro.appendChild(textoLogro);
    contLogro.appendChild(fraseLogro);

   //porcentaje de alumnas que alcanzaron la meta en los 4 sprint
    porcentajeLogro.appendChild(document.createTextNode(sprintsMetaPorcentaje + "%"));
    porcentajeLogro.setAttribute("class", "green");
    contPorLogro.appendChild(porcentajeLogro);
    contMeta.appendChild(contPorLogro);

    var frasePorLogro = document.createElement("p");
    var textoPorLogro = document.createTextNode("of total " + total);
    frasePorLogro.appendChild(textoPorLogro);
    contPorLogro.appendChild(frasePorLogro);















        

        








