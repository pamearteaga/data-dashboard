/*
 * Funcionalidad de tu producto
 */

// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(data);


/************ AREQUIPA ************/

// GENERACIÓN 2016-2

/* inscritas y bajas */

var contInsc = document.getElementById("inscritas-bajas");
var incrBajas = document.createElement("li");
var insc = document.createElement("span");
var bajas = document.createElement("span");
var estudiante = data.AQP['2016-2'].students;
var bajasCont = 0;
var inscCont = 0;
var total = 0;
var porcentaje = (bajasCont * 100)/total;


for (var i = 0; i < estudiante.length; i++) {
	
	total++;


	if (estudiante[i].active === true ) {
         
        ++inscCont;

	} else if (estudiante[i].active === false) {

		++bajasCont;
	}

}

       
        insc.appendChild(document.createTextNode(inscCont));
        incrBajas.appendChild(insc);
        contInsc.appendChild(incrBajas)
        









