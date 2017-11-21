
google.charts.load('current', {'packages':['corechart']}); // graficos

console.log(data);


var generacion = data.LIM['2017-1']; // esta variable cambia todos datos y gráficos
var estudiantes = generacion.students; // objeto students
var opiniones = generacion.ratings; // objeto rating


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


for (var i = 0; i < estudiantes.length; i++) {
	
	total++;


	if (estudiantes[i].active === true ) {
         
        ++inscCont;

	} else if (estudiantes[i].active === false) {

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
var sprint2 = [];
var sprint3 = [];
var sprint4 = [];

var sprintMetaHSE = 840;
var sprintMetaTech = 1260;


for (var i = 0; i < estudiantes.length; i++) { // variables de notas para cada sprint
	
	if (estudiantes[i].active === true ) {
         

	    sprint1.push(estudiantes[i].sprints[0]);
	    sprint2.push(estudiantes[i].sprints[1]);
	    //sprint3.push(estudiantes[i].sprints[2]);
	    //sprint4.push(estudiantes[i].sprints[3]);

	}
    
    
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
	//sprint3Tech.push(sprint3[i].score['tech']);
	//sprint4Tech.push(sprint4[i].score['tech']);

}





for (var i = 0; i < sprint1Tech.length; i++) {// cantidad de alumnas que alcanzan la meta en el sprint1
	
	if (sprint1Tech[i] >= sprintMetaTech) {

         ++sprint1TechMeta
		
	}
}

for (var i = 0; i < sprint2Tech.length; i++) {// cantidad de alumnas que alcanzan la meta en el sprint2
	
	if (sprint2Tech[i] >= sprintMetaTech) {

         ++sprint2TechMeta
		
	}
}

for (var i = 0; i < sprint3Tech.length; i++) {// cantidad de alumnas que alcanzan la meta en el sprint3
	
	if (sprint3Tech[i] >= sprintMetaTech) {

         ++sprint3TechMeta
		
	}
}

for (var i = 0; i < sprint4Tech.length; i++) {// cantidad de alumnas que alcanzan la meta en el sprint4
	
	if (sprint4Tech[i] >= sprintMetaTech) {

         ++sprint4TechMeta
		
	}
}

sprint1TechMetaPorcentaje = parseInt((sprint1TechMeta * 100) / sprint1Tech.length) // porcentaje de alumnas que alcanzaron la meta en el sprint1

sprint2TechMetaPorcentaje = parseInt((sprint2TechMeta * 100) / sprint2Tech.length) // porcentaje de alumnas que alcanzaron la meta en el sprint2

sprint3TechMetaPorcentaje = parseInt((sprint3TechMeta * 100) / sprint3Tech.length) // porcentaje de alumnas que alcanzaron la meta en el sprint3

sprint4TechMetaPorcentaje = parseInt((sprint4TechMeta * 100) / sprint4Tech.length) // porcentaje de alumnas que alcanzaron la meta en el sprint4


// PARA SACAR PROMEDIO DE NOTAS TECH

for (var i = 0; i < sprint1Tech.length; i++) {
	
	var sprint1TechPromedio = parseInt((sprint1TechNotas += sprint1Tech[i])/total);

}

for (var i = 0; i < sprint2Tech.length; i++) {
	
	var sprint2TechPromedio = parseInt((sprint2TechNotas += sprint2Tech[i])/total);

}

for (var i = 0; i < sprint3Tech.length; i++) {
	
	var sprint3TechPromedio = parseInt((sprint3TechNotas += sprint3Tech[i])/total);

}

for (var i = 0; i < sprint4Tech.length; i++) {
	
	var sprint4TechPromedio = parseInt((sprint4TechNotas += sprint4Tech[i])/total);

}




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
	//sprint3HSE.push(sprint3[i].score['hse']);
	//sprint4HSE.push(sprint4[i].score['hse']);

}

for (var i = 0; i < sprint1HSE.length; i++) {// cantidad de alumnas que alcanzan la meta en el sprint1
	
	if (sprint1HSE[i] >= sprintMetaHSE) {

         ++sprint1HSEMeta
		
	}
}


for (var i = 0; i < sprint2HSE.length; i++) {// cantidad de alumnas que alcanzan la meta en el sprint2
	
	if (sprint2HSE[i] >= sprintMetaHSE) {

         ++sprint2HSEMeta
		
	}
}

for (var i = 0; i < sprint3HSE.length; i++) {// cantidad de alumnas que alcanzan la meta en el sprint3
	
	if (sprint3HSE[i] >= sprintMetaHSE) {

         ++sprint3HSEMeta
	}
}

for (var i = 0; i < sprint4HSE.length; i++) {// cantidad de alumnas que alcanzan la meta en el sprint4
	
	if (sprint4HSE[i] >= sprintMetaHSE) {

         ++sprint4HSEMeta
	}
}


sprint1HSEMetaPorcentaje = parseInt((sprint1HSEMeta * 100) / sprint1HSE.length) // porcentaje de alumnas que alcanzaron la meta en el sprint1

sprint2HSEMetaPorcentaje = parseInt((sprint2HSEMeta * 100) / sprint2HSE.length) // porcentaje de alumnas que alcanzaron la meta en el sprint2

sprint3HSEMetaPorcentaje = parseInt((sprint3HSEMeta * 100) / sprint3HSE.length) // porcentaje de alumnas que alcanzaron la meta en el sprint3

sprint4HSEMetaPorcentaje = parseInt((sprint4HSEMeta * 100) / sprint4HSE.length) // porcentaje de alumnas que alcanzaron la meta en el sprint4

;

// PARA SACAR PROMEDIO DE NOTAS HSE

for (var i = 0; i < sprint1HSE.length; i++) {
	
	var sprint1HSEPromedio = parseInt((sprint1HSENotas += sprint1HSE[i])/total);

}

for (var i = 0; i < sprint2HSE.length; i++) {
	
	var sprint2HSEPromedio = parseInt((sprint2HSENotas += sprint2HSE[i])/total);

}

for (var i = 0; i < sprint3HSE.length; i++) {
	
	var sprint3HSEPromedio = parseInt((sprint3HSENotas += sprint3HSE[i])/total);

}

for (var i = 0; i < sprint4HSE.length; i++) {
	
	var sprint4HSEPromedio = parseInt((sprint4HSENotas += sprint4HSE[i])/total);

}





// PROMEDIO GENERAL DE NOTAS (HSE Y TECH) 
var sprint1Meta = (sprint1HSEMeta + sprint1TechMeta) / 2;
var sprint2Meta = (sprint2HSEMeta + sprint2TechMeta) / 2;
var sprint3Meta = (sprint3HSEMeta + sprint3TechMeta) / 2;
var sprint4Meta = (sprint4HSEMeta + sprint4TechMeta) / 2;
var sprintsMetaTotal = (sprint1Meta + sprint2Meta + sprint3Meta + sprint4Meta) / 4; // no seusó parseInt en este resultado ya que cambiaba mucho el porcentaje real
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



/* promedio - recuadro TECH SKILLS */

var contMetaTech = document.getElementById("tech");
var contMetaTechEstudiantes = document.createElement("li");
var contMetaTechPorcentaje = document.createElement("li");
var metaTech = document.createElement("span");
var porcentajeMetaTech = document.createElement("span");
var todasMetasTech = (sprint1TechMeta + sprint2TechMeta + sprint3TechMeta + sprint4TechMeta) / 4; // promedio de alumnas que alcanzaron la meta tech
var todasMetasTechPorcentaje = parseInt((todasMetasTech * 100) / total);


// promedio de cantidad de alumnas que lograron las meta TECH en los 4 sprint
    metaTech.appendChild(document.createTextNode(todasMetasTech));
    contMetaTechEstudiantes.appendChild(metaTech);
    contMetaTech.appendChild(contMetaTechEstudiantes);
    // frase
    var fraseMetaTech = document.createElement("p");
    var textoMetaTech = document.createTextNode("# Students that meet the target");
    fraseMetaTech.appendChild(textoMetaTech);
    contMetaTechEstudiantes.appendChild(fraseMetaTech);

   //porcentaje de alumnas que alcanzaron la meta TECH en los 4 sprint
    porcentajeMetaTech.appendChild(document.createTextNode(todasMetasTechPorcentaje + "%"));
    porcentajeMetaTech.setAttribute("class", "green");
    contMetaTechPorcentaje.appendChild(porcentajeMetaTech);
    contMetaTech.appendChild(contMetaTechPorcentaje);

    var frasePorcentajeMetaTech = document.createElement("p");
    var textoPorcentajeMetaTech = document.createTextNode("of total " + total);
    frasePorcentajeMetaTech.appendChild(textoPorcentajeMetaTech);
    contMetaTechPorcentaje.appendChild(frasePorcentajeMetaTech);






/* promedio - recuadro LIFE SKILLS */

var contMetaHSE = document.getElementById("hse");
var contMetaHSEEstudiantes = document.createElement("li");
var contMetaHSEPorcentaje = document.createElement("li");
var metaHSE = document.createElement("span");
var porcentajeMetaHSE = document.createElement("span");
var todasMetasHSE = (sprint1HSEMeta + sprint2HSEMeta + sprint3HSEMeta + sprint4HSEMeta) / 4; // promedio de alumnas que alcanzaron la meta HSE
var todasMetasHSEPorcentaje = parseInt((todasMetasHSE * 100) / total);


// promedio de cantidad de alumnas que lograron las meta TECH en los 4 sprint
    metaHSE.appendChild(document.createTextNode(todasMetasHSE));
    contMetaHSEEstudiantes.appendChild(metaHSE);
    contMetaHSE.appendChild(contMetaHSEEstudiantes);
    // frase
    var fraseMetaHSE = document.createElement("p");
    var textoMetaHSE = document.createTextNode("# Students that meet the target");
    fraseMetaHSE.appendChild(textoMetaHSE);
    contMetaHSEEstudiantes.appendChild(fraseMetaHSE);

   //porcentaje de alumnas que alcanzaron la meta TECH en los 4 sprint
    porcentajeMetaHSE.appendChild(document.createTextNode(todasMetasHSEPorcentaje + "%"));
    porcentajeMetaHSE.setAttribute("class", "green");
    contMetaHSEPorcentaje.appendChild(porcentajeMetaHSE);
    contMetaHSE.appendChild(contMetaHSEPorcentaje);

    var frasePorcentajeMetaHSE = document.createElement("p");
    var textoPorcentajeMetaHSE = document.createTextNode("of total " + total);
    frasePorcentajeMetaHSE.appendChild(textoPorcentajeMetaHSE);
    contMetaHSEPorcentaje.appendChild(frasePorcentajeMetaHSE);






/********* VARIABLES PARA DATOS RATING ********/


// SPRINT 1

var ratingsSprint1 = opiniones[0];
var jediSprint1 = ratingsSprint1.jedi;
var teacherSprint1 = ratingsSprint1.teacher;
var npsSprint1 = ratingsSprint1.nps;
var promotersSprint1 = npsSprint1.promoters;
var passiveSprint1 = npsSprint1.passive;
var detractorsSprint1 = npsSprint1.detractors;
var satisfactionSprint1 = ratingsSprint1.student;
var cumpleSprint1 = satisfactionSprint1.cumple;
var superaSprint1 = satisfactionSprint1.supera;


// SPRINT 2

var ratingsSprint2 = opiniones[1];
var jediSprint2 = ratingsSprint2.jedi;
var teacherSprint2 = ratingsSprint2.teacher;
var npsSprint2 = ratingsSprint2.nps;
var promotersSprint2 = npsSprint2.promoters;
var passiveSprint2 = npsSprint2.passive;
var detractorsSprint2 = npsSprint2.detractors;
var satisfactionSprint2 = ratingsSprint2.student;
var cumpleSprint2 = satisfactionSprint2.cumple;
var superaSprint2 = satisfactionSprint2.supera;




// PROMEDIOS RATINGS

var nps = parseInt(((promotersSprint1 - detractorsSprint1) + (promotersSprint2 - detractorsSprint2)) / 2);
var promoters = parseInt((promotersSprint1 + promotersSprint2) / 2);
var passive = parseInt((passiveSprint1 + passiveSprint2) / 2);
var detractors = parseInt((detractorsSprint1 + detractorsSprint2) / 2);
var satisfaction1 = parseInt(cumpleSprint1 +  superaSprint1);
var satisfaction2 = parseInt(cumpleSprint2 +  superaSprint2);
var satisfaction = parseInt((satisfaction1 + satisfaction2) / 2);
var teacher = (teacherSprint1 + teacherSprint2) / 2;
var jedi = (jediSprint1 + jediSprint2) / 2;



/* recuadro NET PROMOTER SCORE */

// creando los nodos
var contNps = document.getElementById("net");
var contNpsPuntos = document.createElement("li");
var contNpsPorcentajes = document.createElement("li");
var npsPuntos = document.createElement("span");
var npsProm = document.createElement("p");
var npsPass = document.createElement("p");
var npsDetrac = document.createElement("p");

   // NPS%
    npsPuntos.appendChild(document.createTextNode(nps + "%"));
    npsPuntos.setAttribute("class","green")
    contNpsPuntos.appendChild(npsPuntos);
    contNps.appendChild(contNpsPuntos);
    // frase
    var frasenpsPuntos = document.createElement("p");
    var textonpsPuntos = document.createTextNode("% Cumulative nps");
    frasenpsPuntos.appendChild(textonpsPuntos);
    contNpsPuntos.appendChild(frasenpsPuntos);


    // porcentajes
    npsProm.appendChild(document.createTextNode(promoters + "% Promoters"));
    npsPass.appendChild(document.createTextNode(passive + "% Passive"));
    npsDetrac.appendChild(document.createTextNode(detractors + "% Detractors"));
    contNpsPorcentajes.appendChild(npsProm);
    contNpsPorcentajes.appendChild(npsPass);
    contNpsPorcentajes.appendChild(npsDetrac);
    contNps.appendChild(contNpsPorcentajes);

    

// nodos satisfaction

var contSatis = document.getElementById("satisfaction");
var contSatisPorcentaje = document.createElement("li");
var satisPorcentaje = document.createElement("span");
   
    satisPorcentaje.appendChild(document.createTextNode(satisfaction));
    contSatisPorcentaje.appendChild(satisPorcentaje);
    contSatis.appendChild(contSatisPorcentaje);
    // frase
    var fraseSatis = document.createElement("p");
    var textoSatis = document.createTextNode("% Meeting or exceeding expectations (cumulative)");
    fraseSatis.appendChild(textoSatis);
    contSatisPorcentaje.appendChild(fraseSatis);


// nodos teacher

var contTeacher = document.getElementById("teacher");
var contTeacherNota = document.createElement("li");
var teacherNota = document.createElement("span");
   
    teacherNota.appendChild(document.createTextNode(teacher));
    contTeacherNota.appendChild(teacherNota);
    contTeacher.appendChild(contTeacherNota);
    // frase
    var fraseTeacher = document.createElement("p");
    var textoTeacher = document.createTextNode("Overall teacher rating (cumulative)");
    fraseTeacher.appendChild(textoTeacher);
    contTeacherNota.appendChild(fraseTeacher);


// nodos jedi

var contJedi = document.getElementById("jedi");
var contJediNota = document.createElement("li");
var jediNota = document.createElement("span");
   
    jediNota.appendChild(document.createTextNode(jedi));
    contJediNota.appendChild(jediNota);
    contJedi.appendChild(contJediNota);
    // frase
    var fraseJedi = document.createElement("p");
    var textoJedi = document.createTextNode("Overall jedi rating (cumulative)");
    fraseJedi.appendChild(textoJedi);
    contJediNota.appendChild(fraseJedi);





/*************** GRÁFICOS ***************/


// GRÁFICO ACHIEVEMENT


google.charts.setOnLoadCallback(graficoBarras);
   function graficoBarras() {
     var data = google.visualization.arrayToDataTable([
       ["S1", "Students", { role: "style" } ],
       ["S1", sprint1Meta, "#FFC300 "],
       ["S2", sprint2Meta, "#FFC300 "],
      
     ]);

     var view = new google.visualization.DataView(data);
     view.setColumns([0, 1,
                      { calc: "stringify",
                        sourceColumn: 1,
                        type: "string",
                        role: "annotation" },
                      2]);

     var options = {
       width: 300,
       height: 200,
       bar: {groupWidth: "95%"},
       legend: { position: "none" },
     };
     var chart = new google.visualization.ColumnChart(document.getElementById("columnchart_values"));
     chart.draw(view, options);
 }



// GRÁFICO RECUADRO ENROLLMENT

google.charts.setOnLoadCallback(graficoTorta);
     function graficoTorta() {
       var data = google.visualization.arrayToDataTable([
         ['Enrollment', '% Dropout'],
         ['Dropout',  bajasCont],
         ['Currently', inscCont],
      
       
       ]);

     var options = {
       legend: 'none',
       pieSliceText: 'label',
       pieStartAngle: 180,
       slices: {
           0: { color: '#b87333' },
           1: { color: '#ffc300' }
         }

     };

       var chart = new google.visualization.PieChart(document.getElementById('piechart'));
       chart.draw(data, options);
     }


// GRAFICO TECH

google.charts.setOnLoadCallback(graficoHorizontal);
   function graficoHorizontal() {
     var data = google.visualization.arrayToDataTable([
       ["Element", "Students", { role: "style" } ],
       ["S1", sprint1TechMeta, "orange"],
       ["S2", sprint2TechMeta, "yellow"],
       
     ]);

     var view = new google.visualization.DataView(data);
     view.setColumns([0, 1,
                      { calc: "stringify",
                        sourceColumn: 1,
                        type: "string",
                        role: "annotation" },
                      2]);

     var options = {

       width: 250,
       height: 250,
       bar: {groupWidth: "95%"},
       legend: { position: "none" },
     };
     var chart = new google.visualization.BarChart(document.getElementById("barra-tech"));
     chart.draw(view, options);
 }
        

        google.charts.setOnLoadCallback(tortaTech);
     function tortaTech() {
       var data = google.visualization.arrayToDataTable([
         ['Students', 'Meet the target'],
         ['Dont meet target',  83],
         ['Target', todasMetasTechPorcentaje],
      
       
       ]);

     var options = {
       legend: 'none',
       pieSliceText: 'label',
       pieStartAngle: 90,
       slices: {
           0: { color: '#b87333' },
           1: { color: '#ffc300' }
         }

     };

       var chart = new google.visualization.PieChart(document.getElementById('torta-tech'));
       chart.draw(data, options);
     }

        


 // GRAFICO HSE

google.charts.setOnLoadCallback(barraHSE);
   function barraHSE() {
     var data = google.visualization.arrayToDataTable([
       ["Element", "Students", { role: "style" } ],
       ["S1", sprint1HSEMeta, "orange"],
       ["S2", sprint2HSEMeta, "yellow"],
       
     ]);

     var view = new google.visualization.DataView(data);
     view.setColumns([0, 1,
                      { calc: "stringify",
                        sourceColumn: 1,
                        type: "string",
                        role: "annotation" },
                      2]);

     var options = {

       width: 250,
       height: 250,
       bar: {groupWidth: "95%"},
       legend: { position: "none" },
     };
     var chart = new google.visualization.BarChart(document.getElementById("barra-hse"));
     chart.draw(view, options);
 }
        

        google.charts.setOnLoadCallback(tortaHSE);
     function tortaHSE() {
       var data = google.visualization.arrayToDataTable([
         ['Target', 'Students meet the Target'],
         ['Dont meet target',  76],
         ['Target', todasMetasHSEPorcentaje],
      
       
       ]);

     var options = {
       legend: 'none',
       pieSliceText: 'label',
       pieStartAngle: 90,
       slices: {
           0: { color: '#b87333' },
           1: { color: '#ffc300' }
         }

     };

       var chart = new google.visualization.PieChart(document.getElementById('torta-hse'));
       chart.draw(data, options);
     }



//GRAFICO NET PROMOTER SCORE

google.charts.setOnLoadCallback(datos);

     function datos() {
       var data = google.visualization.arrayToDataTable([
         ['', 'Promoters', 'Detractors' , 'Passive'],
         ['S1', promotersSprint1, passiveSprint1, detractorsSprint1],
         ['S2', promotersSprint2, passiveSprint2, detractorsSprint2],
      
       ]);

       var options = {
         curveType: 'function',
         legend: { position: 'bottom' }
       };

       var chart = new google.visualization.LineChart(document.getElementById('net-promo'));

       chart.draw(data, options);
     }



// GRAFICO STUDEnt satisfaction


google.charts.setOnLoadCallback(datosSatis);

     function datosSatis() {
       var data = google.visualization.arrayToDataTable([
         ['', 'Supera', 'Cumple'],
         ['S1', superaSprint1, cumpleSprint1],
         ['S2', superaSprint2, cumpleSprint2],
      
       ]);

       var options = {
         curveType: 'function',
         legend: { position: 'bottom' }
       };

       var chart = new google.visualization.LineChart(document.getElementById('satis-lineas'));

       chart.draw(data, options);
     }



// GRAFICOS TEACHER

     google.charts.setOnLoadCallback(teacherBarras);
   function teacherBarras() {
     var data = google.visualization.arrayToDataTable([
       ["S1", "Students", { role: "style" } ],
       ["S1", teacherSprint1 , "orange"],
       ["S2", teacherSprint2 , "brown"],
      
     ]);

     var view = new google.visualization.DataView(data);
     view.setColumns([0, 1,
                      { calc: "stringify",
                        sourceColumn: 1,
                        type: "string",
                        role: "annotation" },
                      2]);

     var options = {
       width: 300,
       height: 200,
       bar: {groupWidth: "95%"},
       legend: { position: "none" },
     };
     var chart = new google.visualization.ColumnChart(document.getElementById("barras-teachers"));
     chart.draw(view, options);
 }



// GRAFICOS JEDI

     google.charts.setOnLoadCallback(jediBarras);
   function jediBarras() {
     var data = google.visualization.arrayToDataTable([
       ["S1", "Students", { role: "style" } ],
       ["S1", jediSprint1 , "orange"],
       ["S2", jediSprint2 , "brown"],
      
     ]);

     var view = new google.visualization.DataView(data);
     view.setColumns([0, 1,
                      { calc: "stringify",
                        sourceColumn: 1,
                        type: "string",
                        role: "annotation" },
                      2]);

     var options = {
       width: 300,
       height: 200,
       bar: {groupWidth: "95%"},
       legend: { position: "none" },
     };
     var chart = new google.visualization.ColumnChart(document.getElementById("barras-jedi"));
     chart.draw(view, options);
 }




