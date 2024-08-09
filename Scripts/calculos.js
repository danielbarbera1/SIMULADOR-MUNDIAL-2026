var contador = 0;

var octavos_1I = 0;
var octavos_2I = 0;
var octavos_3I = 0;
var octavos_4I = 0;
var octavos_5I = 0;
var octavos_6I = 0;
var octavos_7I = 0;
var octavos_8I = 0;
var octavos_1D = 0;
var octavos_2D = 0;
var octavos_3D = 0;
var octavos_4D = 0;
var octavos_5D = 0;
var octavos_6D = 0;
var octavos_7D = 0;
var octavos_8D = 0;
   

var penales_1I = 0;
var penales_2I = 0;
var penales_3I = 0;
var penales_4I = 0;
var penales_5I = 0;
var penales_6I = 0;
var penales_7I = 0;
var penales_8I = 0;
var penales_1D = 0;
var penales_2D = 0;
var penales_3D = 0;
var penales_4D = 0;
var penales_5D = 0;
var penales_6D = 0;
var penales_7D = 0;
var penales_8D = 0;


var cuartos_1I = 0;
var cuartos_2I = 0;
var cuartos_3I = 0;
var cuartos_4I = 0;
var cuartos_1D = 0;
var cuartos_2D = 0;
var cuartos_3D = 0;
var cuartos_4D = 0;

var penales_1I = 0;
var penales_2I = 0;
var penales_3I = 0;
var penales_4I = 0;
var penales_1D = 0;
var penales_2D = 0;
var penales_3D = 0;
var penales_4D = 0;
// Semis
var semis_1I = 0;
var semis_2I = 0;
var semis_1D = 0;
var semis_2D = 0;

var penales_1I = 0;
var penales_2I = 0;
var penales_1D = 0;
var penales_2D = 0;
// Final
var finalI = 0;
var finalD = 0;

var penales_I = 0;
var penales_D = 0;

var auxganadoresOctavos =  [];
var auxganadoresCuartos =  [];
var auxganadoresSemis =  [];

function goles_octavos(){
    octavos_1I += (Math.random()*100)/100;
    octavos_2I += (Math.random()*100)/100;
    octavos_3I += (Math.random()*100)/100;
    octavos_4I += (Math.random()*100)/100;
    octavos_5I += (Math.random()*100)/100;
    octavos_6I += (Math.random()*100)/100;
    octavos_7I += (Math.random()*100)/100;
    octavos_8I += (Math.random()*100)/100;
    octavos_1D += (Math.random()*100)/100;
    octavos_2D += (Math.random()*100)/100;
    octavos_3D += (Math.random()*100)/100;
    octavos_4D += (Math.random()*100)/100;
    octavos_5D += (Math.random()*100)/100;
    octavos_6D += (Math.random()*100)/100;
    octavos_7D += (Math.random()*100)/100;
    octavos_8D += (Math.random()*100)/100;
}

function colocarResultados_octavos(){
    document.querySelector('.resultado.octavos-1I').innerHTML = Math.floor(octavos_1I);
    document.querySelector('.resultado.octavos-2I').innerHTML = Math.floor(octavos_2I);
    document.querySelector('.resultado.octavos-3I').innerHTML = Math.floor(octavos_3I);
    document.querySelector('.resultado.octavos-4I').innerHTML = Math.floor(octavos_4I);
    document.querySelector('.resultado.octavos-5I').innerHTML = Math.floor(octavos_5I);
    document.querySelector('.resultado.octavos-6I').innerHTML = Math.floor(octavos_6I);
    document.querySelector('.resultado.octavos-7I').innerHTML = Math.floor(octavos_7I);
    document.querySelector('.resultado.octavos-8I').innerHTML = Math.floor(octavos_8I);
    document.querySelector('.resultado.octavos-1D').innerHTML = Math.floor(octavos_1D);
    document.querySelector('.resultado.octavos-2D').innerHTML = Math.floor(octavos_2D);
    document.querySelector('.resultado.octavos-3D').innerHTML = Math.floor(octavos_3D);
    document.querySelector('.resultado.octavos-4D').innerHTML = Math.floor(octavos_4D);
    document.querySelector('.resultado.octavos-5D').innerHTML = Math.floor(octavos_5D);
    document.querySelector('.resultado.octavos-6D').innerHTML = Math.floor(octavos_6D);
    document.querySelector('.resultado.octavos-7D').innerHTML = Math.floor(octavos_7D);
    document.querySelector('.resultado.octavos-8D').innerHTML = Math.floor(octavos_8D);
    
}

function octavos(){

    return new Promise(resolve =>{
        var iteracion = setInterval(() => {
            contador++;
            goles_octavos();
            colocarResultados_octavos();
            if (contador == 4) {
                clearInterval(iteracion);
                Promise.all([empate1_octavos(), empate2_octavos(), empate3_octavos(), empate4_octavos(), empate5_octavos(), empate6_octavos(), empate7_octavos(), empate8_octavos()]).then((resultado) => {
                    resolve();
                });
            }
        }, 1500);
    });
}

octavos().then((resultado) => {
    octavos_1I += Math.floor(penales_1I);
    octavos_2I += Math.floor(penales_2I);
    octavos_3I += Math.floor(penales_3I);
    octavos_4I += Math.floor(penales_4I);
    octavos_5I += Math.floor(penales_5I);
    octavos_6I += Math.floor(penales_6I);
    octavos_7I += Math.floor(penales_7I);
    octavos_8I += Math.floor(penales_8I);
    octavos_1D += Math.floor(penales_1D);
    octavos_2D += Math.floor(penales_2D);
    octavos_3D += Math.floor(penales_3D);
    octavos_4D += Math.floor(penales_4D);
    octavos_5D += Math.floor(penales_5D);
    octavos_6D += Math.floor(penales_6D);
    octavos_7D += Math.floor(penales_7D);
    octavos_8D += Math.floor(penales_8D);
    ganadores_octavos(); 
    cuartos().then((resultado) => {
        cuartos_1I += Math.floor(penales_1I);
        cuartos_2I += Math.floor(penales_2I);
        cuartos_3I += Math.floor(penales_3I);
        cuartos_4I += Math.floor(penales_4I);
        cuartos_1D += Math.floor(penales_1D);
        cuartos_2D += Math.floor(penales_2D);
        cuartos_3D += Math.floor(penales_3D);
        cuartos_4D += Math.floor(penales_4D);
        ganadores_cuartos();
        semis().then((resultado) =>{
            semis_1I += Math.floor(penales_1I);
            semis_2I += Math.floor(penales_2I);
            semis_1D += Math.floor(penales_1D);
            semis_2D += Math.floor(penales_2D);
            ganadores_semis();
            final().then((resultado) => {
                finalI += Math.floor(penales_1I);
                finalD += Math.floor(penales_1D);
                ganadores_final();
                clearInterval(t);
            });
            
        });
        
    });
});

function empate1_octavos(){
    return new Promise(resolve=>{
        if(Math.floor(octavos_1I) === Math.floor(octavos_2I)){
            var pen = setInterval(() => {
                penales_1I += (Math.random()*100)/100;
                penales_2I += (Math.random()*100)/100;
                document.querySelector('.resultado.octavos-1I').innerHTML = `${Math.floor(octavos_1I)} (${Math.floor(penales_1I)})` ;
                document.querySelector('.resultado.octavos-2I').innerHTML = `${Math.floor(octavos_2I)} (${Math.floor(penales_2I)})`;
                if (Math.floor(penales_1I) > Math.floor(penales_2I) || Math.floor(penales_1I) < Math.floor(penales_2I)){
                    clearInterval(pen);
                    resolve();
                } 
            }, 1500);
        }else{
            resolve();
        }
    });
}

function empate2_octavos(){
    return new Promise(resolve =>{
        if(Math.floor(octavos_3I) === Math.floor(octavos_4I)){
            var pen = setInterval(() => {
                penales_3I += (Math.random()*100)/100;
                penales_4I += (Math.random()*100)/100;
                document.querySelector('.resultado.octavos-3I').innerHTML = `${Math.floor(octavos_3I)} (${Math.floor(penales_3I)})` ;
                document.querySelector('.resultado.octavos-4I').innerHTML = `${Math.floor(octavos_4I)} (${Math.floor(penales_4I)})`;
                if (Math.floor(penales_3I) > Math.floor(penales_4I) || Math.floor(penales_3I) < Math.floor(penales_4I)){
                    clearInterval(pen);
                    resolve();
                } 
                
            }, 1500);
        }else{
            resolve();
        }
    });
}
function empate3_octavos(){
    return new Promise(resolve =>{
        if(Math.floor(octavos_5I) === Math.floor(octavos_6I)){
            var pen = setInterval(() => {
                penales_5I += (Math.random()*100)/100;
                penales_6I += (Math.random()*100)/100;
                document.querySelector('.resultado.octavos-5I').innerHTML = `${Math.floor(octavos_5I)} (${Math.floor(penales_5I)})` ;
                document.querySelector('.resultado.octavos-6I').innerHTML = `${Math.floor(octavos_6I)} (${Math.floor(penales_6I)})`;
                if (Math.floor(penales_5I) > Math.floor(penales_6I) || Math.floor(penales_5I) < Math.floor(penales_6I)){
                
                    clearInterval(pen);
                    resolve();
                } 
                
            }, 1500);
        }else{
            resolve();
        }
    });
}
function empate4_octavos(){
    return new Promise(resolve =>{
        if(Math.floor(octavos_7I) === Math.floor(octavos_8I)){
            var pen = setInterval(() => {
                penales_7I += (Math.random()*100)/100;
                penales_8I += (Math.random()*100)/100;
                document.querySelector('.resultado.octavos-7I').innerHTML = `${Math.floor(octavos_7I)} (${Math.floor(penales_7I)})` ;
                document.querySelector('.resultado.octavos-8I').innerHTML = `${Math.floor(octavos_8I)} (${Math.floor(penales_8I)})`;
                if (Math.floor(penales_7I) > Math.floor(penales_8I) || Math.floor(penales_7I) < Math.floor(penales_8I)){
                    clearInterval(pen);
                    resolve();
                } 
                
                
            }, 1500);
        }else{
            resolve();
        }
        
    });
}
function empate5_octavos(){
    return new Promise(resolve =>{
        if(Math.floor(octavos_1D) === Math.floor(octavos_2D)){
            var pen = setInterval(() => {
                penales_1D += (Math.random()*100)/100;
                penales_2D += (Math.random()*100)/100;
                document.querySelector('.resultado.octavos-1D').innerHTML = `${Math.floor(octavos_1D)} (${Math.floor(penales_1D)})` ;
                document.querySelector('.resultado.octavos-2D').innerHTML = `${Math.floor(octavos_2D)} (${Math.floor(penales_2D)})`;
                if (Math.floor(penales_1D) > Math.floor(penales_2D) || Math.floor(penales_1D) < Math.floor(penales_2D)){
                    clearInterval(pen);
                    resolve();
                } 
            }, 1500);
        }else{
            resolve();
        }
        
    });
}
function empate6_octavos(){
    return new Promise(resolve =>{
        if(Math.floor(octavos_3D) === Math.floor(octavos_4D)){
            var pen = setInterval(() => {
                penales_3D += (Math.random()*100)/100;
                penales_4D += (Math.random()*100)/100;
                document.querySelector('.resultado.octavos-3D').innerHTML = `${Math.floor(octavos_3D)} (${Math.floor(penales_3D)})` ;
                document.querySelector('.resultado.octavos-4D').innerHTML = `${Math.floor(octavos_4D)} (${Math.floor(penales_4D)})`;
                if (Math.floor(penales_3D) > Math.floor(penales_4D) || Math.floor(penales_3D) < Math.floor(penales_4D)){
                    clearInterval(pen);
                    resolve();
                }
                
            }, 1500);
        }else{
            resolve();
        }
    });
}function empate7_octavos(){
    return new Promise(resolve =>{
        if(Math.floor(octavos_5D) === Math.floor(octavos_6D)){
            var pen = setInterval(() => {
                penales_5D += (Math.random()*100)/100;
                penales_6D += (Math.random()*100)/100;
                document.querySelector('.resultado.octavos-5D').innerHTML = `${Math.floor(octavos_5D)} (${Math.floor(penales_5D)})` ;
                document.querySelector('.resultado.octavos-6D').innerHTML = `${Math.floor(octavos_6D)} (${Math.floor(penales_6D)})`;
                if (Math.floor(penales_5D) > Math.floor(penales_6D) || Math.floor(penales_5D) < Math.floor(penales_6D)){
                    clearInterval(pen);
                    resolve();
                }               
                
            }, 1500);
        }else{
            resolve();
        }
    });
}function empate8_octavos(){
    return new Promise(resolve =>{
        if(Math.floor(octavos_7D) === Math.floor(octavos_8D)){
            var pen = setInterval(() => {
                penales_7D += (Math.random()*100)/100;
                penales_8D += (Math.random()*100)/100;
                document.querySelector('.resultado.octavos-7D').innerHTML = `${Math.floor(octavos_7D)} (${Math.floor(penales_7D)})` ;
                document.querySelector('.resultado.octavos-8D').innerHTML = `${Math.floor(octavos_8D)} (${Math.floor(penales_8D)})`;
                if (Math.floor(penales_7D) > Math.floor(penales_8D) || Math.floor(penales_7D) < Math.floor(penales_8D)){
                    clearInterval(pen);
                    resolve();
                }   
                
            }, 1500);
        }else{
            resolve();
        }  
    });
}

var ganador = [];
function ganadores_octavos(){
    let equipos = localStorage.getItem('equipos').split(',');
    equipos = JSON.parse(equipos)

    if (octavos_1I > octavos_2I) {
        ganador.push(0);
        document.querySelector('.equipo.octavos-1I').style.cssText += 'background-color: red; transition: 0.7s; color:ghostwhite;' 
        document.querySelector('.equipo.octavos-2I').style.cssText += 'opacity: 0.4; transition: 0.7s;' 
    } else {
        ganador.push(1);
        document.querySelector('.equipo.octavos-2I').style.cssText += 'background-color: red; transition: 0.7s; color:ghostwhite;' 
        document.querySelector('.equipo.octavos-1I').style.cssText += 'opacity: 0.4; transition: 0.7s;' 
    }
    if (octavos_3I > octavos_4I) {
        ganador.push(2);
        document.querySelector('.equipo.octavos-3I').style.cssText += 'background-color: red; transition: 0.7s; color:ghostwhite;' 
        document.querySelector('.equipo.octavos-4I').style.cssText += 'opacity: 0.4; transition: 0.7s;' 
    } else {
        ganador.push(3);
        document.querySelector('.equipo.octavos-4I').style.cssText += 'background-color: red; transition: 0.7s; color:ghostwhite;' 
        document.querySelector('.equipo.octavos-3I').style.cssText += 'opacity: 0.4; transition: 0.7s;' 
    }
    if (octavos_5I > octavos_6I) {
        ganador.push(4);
        document.querySelector('.equipo.octavos-5I').style.cssText += 'background-color: red; transition: 0.7s; color:ghostwhite;' 
        document.querySelector('.equipo.octavos-6I').style.cssText += 'opacity: 0.4; transition: 0.7s;' 
    } else {
        ganador.push(5);
        document.querySelector('.equipo.octavos-6I').style.cssText += 'background-color: red; transition: 0.7s; color:ghostwhite;' 
        document.querySelector('.equipo.octavos-5I').style.cssText += 'opacity: 0.4; transition: 0.7s;' 
    }
    if (octavos_7I > octavos_8I) {
        ganador.push(6);
        document.querySelector('.equipo.octavos-7I').style.cssText += 'background-color: red; transition: 0.7s; color:ghostwhite;' 
        document.querySelector('.equipo.octavos-8I').style.cssText += 'opacity: 0.4; transition: 0.7s;' 
    } else {
        ganador.push(7);
        document.querySelector('.equipo.octavos-8I').style.cssText += 'background-color: red; transition: 0.7s; color:ghostwhite;' 
        document.querySelector('.equipo.octavos-7I').style.cssText += 'opacity: 0.4; transition: 0.7s;' 
    }
    if (octavos_1D > octavos_2D) {
        ganador.push(8);
        document.querySelector('.equipo.octavos-1D').style.cssText += 'background-color: red; transition: 0.7s; color:ghostwhite;' 
        document.querySelector('.equipo.octavos-2D').style.cssText += 'opacity: 0.4; transition: 0.7s;' 
    } else {
        ganador.push(9);
        document.querySelector('.equipo.octavos-2D').style.cssText += 'background-color: red; transition: 0.7s; color:ghostwhite;' 
        document.querySelector('.equipo.octavos-1D').style.cssText += 'opacity: 0.4; transition: 0.7s;' 
    }
    if (octavos_3D > octavos_4D) {
        ganador.push(10);
        document.querySelector('.equipo.octavos-3D').style.cssText += 'background-color: red; transition: 0.7s; color:ghostwhite;' 
        document.querySelector('.equipo.octavos-4D').style.cssText += 'opacity: 0.4; transition: 0.7s;' 
    } else {
        ganador.push(11);
        document.querySelector('.equipo.octavos-4D').style.cssText += 'background-color: red; transition: 0.7s; color:ghostwhite;' 
        document.querySelector('.equipo.octavos-3D').style.cssText += 'opacity: 0.4; transition: 0.7s;' 
    }
    if (octavos_5D > octavos_6D) {
        ganador.push(12);
        document.querySelector('.equipo.octavos-5D').style.cssText += 'background-color: red; transition: 0.7s; color:ghostwhite;' 
        document.querySelector('.equipo.octavos-6D').style.cssText += 'opacity: 0.4; transition: 0.7s;' 
    } else {
        ganador.push(13);
        document.querySelector('.equipo.octavos-6D').style.cssText += 'background-color: red; transition: 0.7s; color:ghostwhite;' 
        document.querySelector('.equipo.octavos-5D').style.cssText += 'opacity: 0.4; transition: 0.7s;' 
    }
    if (octavos_7D > octavos_8D) {
        ganador.push(14);
        document.querySelector('.equipo.octavos-7D').style.cssText += 'background-color: red; transition: 0.7s; color:ghostwhite;' 
        document.querySelector('.equipo.octavos-8D').style.cssText += 'opacity: 0.4; transition: 0.7s;' 
    } else {
        ganador.push(15);
        document.querySelector('.equipo.octavos-8D').style.cssText += 'background-color: red; transition: 0.7s; color:ghostwhite;' 
        document.querySelector('.equipo.octavos-7D').style.cssText += 'opacity: 0.4; transition: 0.7s;' 
    }
    
    var ganadoresOctavos = equipos.filter((item, index) =>{
        for (i of ganador) {
            if(index == i)
            return true
        }
    })
    auxganadoresOctavos =  ganadoresOctavos;
    puestos_cuartos(ganadoresOctavos);
}

function puestos_cuartos(ganadoresOctavos){
    document.querySelector('.bandera.cuartos-1I').innerHTML = `<img src="${ganadoresOctavos[0].img}" alt="${ganadoresOctavos[0].name}">`;
    document.querySelector('.bandera.cuartos-2I').innerHTML = `<img src="${ganadoresOctavos[1].img}" alt="${ganadoresOctavos[1].name}">`;
    document.querySelector('.bandera.cuartos-3I').innerHTML = `<img src="${ganadoresOctavos[2].img}" alt="${ganadoresOctavos[2].name}">`;
    document.querySelector('.bandera.cuartos-4I').innerHTML = `<img src="${ganadoresOctavos[3].img}" alt="${ganadoresOctavos[3].name}">`;
    document.querySelector('.bandera.cuartos-1D').innerHTML = `<img src="${ganadoresOctavos[4].img}" alt="${ganadoresOctavos[4].name}">`;
    document.querySelector('.bandera.cuartos-2D').innerHTML = `<img src="${ganadoresOctavos[5].img}" alt="${ganadoresOctavos[5].name}">`;
    document.querySelector('.bandera.cuartos-3D').innerHTML = `<img src="${ganadoresOctavos[6].img}" alt="${ganadoresOctavos[6].name}">`;
    document.querySelector('.bandera.cuartos-4D').innerHTML = `<img src="${ganadoresOctavos[7].img}" alt="${ganadoresOctavos[7].name}">`;
}

function goles_cuartos(){
    cuartos_1I += (Math.random()*100)/100;
    cuartos_2I += (Math.random()*100)/100;
    cuartos_3I += (Math.random()*100)/100;
    cuartos_4I += (Math.random()*100)/100;
    cuartos_1D += (Math.random()*100)/100;
    cuartos_2D += (Math.random()*100)/100;
    cuartos_3D += (Math.random()*100)/100;
    cuartos_4D += (Math.random()*100)/100;
}

function colocarResultados_cuartos(){
    document.querySelector('.resultado.cuartos-1I').innerHTML = Math.floor(cuartos_1I);
    document.querySelector('.resultado.cuartos-2I').innerHTML = Math.floor(cuartos_2I);
    document.querySelector('.resultado.cuartos-3I').innerHTML = Math.floor(cuartos_3I);
    document.querySelector('.resultado.cuartos-4I').innerHTML = Math.floor(cuartos_4I);
    document.querySelector('.resultado.cuartos-1D').innerHTML = Math.floor(cuartos_1D);
    document.querySelector('.resultado.cuartos-2D').innerHTML = Math.floor(cuartos_2D);
    document.querySelector('.resultado.cuartos-3D').innerHTML = Math.floor(cuartos_3D);
    document.querySelector('.resultado.cuartos-4D').innerHTML = Math.floor(cuartos_4D);
}

function cuartos(){
    contador = 0;
    return new Promise(resolve =>{
        var iteracion = setInterval(() => {
            contador++
            goles_cuartos();
            colocarResultados_cuartos();
            if (contador == 4) {
                clearInterval(iteracion);
                penales_1I = 0;
                penales_2I = 0;
                penales_3I = 0;
                penales_4I = 0;
                penales_1D = 0;
                penales_2D = 0;
                penales_3D = 0;
                penales_4D = 0;
                Promise.all([empate1_cuartos(), empate2_cuartos(), empate3_cuartos(), empate4_cuartos()]).then((resultado) => {
                    resolve();
                });
            }
        }, 1500);
    });
}
function empate1_cuartos(){
    return new Promise(resolve=>{
        if(Math.floor(cuartos_1I) === Math.floor(cuartos_2I)){
            var pen = setInterval(() => {
                penales_1I += (Math.random()*100)/100;
                penales_2I += (Math.random()*100)/100;
                document.querySelector('.resultado.cuartos-1I').innerHTML = `${Math.floor(cuartos_1I)} (${Math.floor(penales_1I)})` ;
                document.querySelector('.resultado.cuartos-2I').innerHTML = `${Math.floor(cuartos_2I)} (${Math.floor(penales_2I)})`;
                if (Math.floor(penales_1I) > Math.floor(penales_2I) || Math.floor(penales_1I) < Math.floor(penales_2I)){
                    clearInterval(pen);
                    resolve();
                } 
                
            }, 1500);
        }else{
            resolve();
        }
    });
}
function empate2_cuartos(){
    return new Promise(resolve =>{
        if(Math.floor(cuartos_3I) === Math.floor(cuartos_4I)){
            var pen = setInterval(() => {
                penales_3I += (Math.random()*100)/100;
                penales_4I += (Math.random()*100)/100;
                document.querySelector('.resultado.cuartos-3I').innerHTML = `${Math.floor(cuartos_3I)} (${Math.floor(penales_3I)})` ;
                document.querySelector('.resultado.cuartos-4I').innerHTML = `${Math.floor(cuartos_4I)} (${Math.floor(penales_4I)})`;
                if (Math.floor(penales_3I) > Math.floor(penales_4I) || Math.floor(penales_3I) < Math.floor(penales_4I)){
                    clearInterval(pen);
                    resolve();
                } 
                
            }, 1500);
        }else{
            resolve();
        }
    });
}
function empate3_cuartos(){
    return new Promise(resolve =>{
        if(Math.floor(cuartos_1D) === Math.floor(cuartos_2D)){
            var pen = setInterval(() => {
                penales_1D += (Math.random()*100)/100;
                penales_2D += (Math.random()*100)/100;
                document.querySelector('.resultado.cuartos-1D').innerHTML = `${Math.floor(cuartos_1D)} (${Math.floor(penales_1D)})` ;
                document.querySelector('.resultado.cuartos-2D').innerHTML = `${Math.floor(cuartos_2D)} (${Math.floor(penales_2D)})`;
                if (Math.floor(penales_1D) > Math.floor(penales_2D) || Math.floor(penales_1D) < Math.floor(penales_2D)){
                
                    clearInterval(pen);
                    resolve();
                } 
                
            }, 1500);
        }else{
            resolve();
        }
    });
}
function empate4_cuartos(){
    return new Promise(resolve =>{
        if(Math.floor(cuartos_3D) === Math.floor(cuartos_4D)){
            var pen = setInterval(() => {
                penales_3D += (Math.random()*100)/100;
                penales_4D += (Math.random()*100)/100;
                document.querySelector('.resultado.cuartos-3D').innerHTML = `${Math.floor(cuartos_3D)} (${Math.floor(penales_3D)})` ;
                document.querySelector('.resultado.cuartos-4D').innerHTML = `${Math.floor(cuartos_4D)} (${Math.floor(penales_4D)})`;
                if (Math.floor(penales_3D) > Math.floor(penales_4D) || Math.floor(penales_3D) < Math.floor(penales_4D)){
                    clearInterval(pen);
                    resolve();
                } 
                
            }, 1500);
        }else{
            resolve();
        }
    });
}

function ganadores_cuartos(){
    ganador = [];
    if (cuartos_1I > cuartos_2I) {
        ganador.push(0);
        document.querySelector('.equipo.cuartos-1I').style.cssText += 'background-color: red; transition: 0.7s; color:ghostwhite;' 
        document.querySelector('.equipo.cuartos-2I').style.cssText += 'opacity: 0.4; transition: 0.7s;' 
    } else {
        ganador.push(1);
        document.querySelector('.equipo.cuartos-2I').style.cssText += 'background-color: red; transition: 0.7s; color:ghostwhite;' 
        document.querySelector('.equipo.cuartos-1I').style.cssText += 'opacity: 0.4; transition: 0.7s;' 
    }
    if (cuartos_3I > cuartos_4I) {
        ganador.push(2);
        document.querySelector('.equipo.cuartos-3I').style.cssText += 'background-color: red; transition: 0.7s; color:ghostwhite;' 
        document.querySelector('.equipo.cuartos-4I').style.cssText += 'opacity: 0.4; transition: 0.7s;' 
    } else {
        ganador.push(3);
        document.querySelector('.equipo.cuartos-4I').style.cssText += 'background-color: red; transition: 0.7s; color:ghostwhite;' 
        document.querySelector('.equipo.cuartos-3I').style.cssText += 'opacity: 0.4; transition: 0.7s;' 
    }
    
    if (cuartos_1D > cuartos_2D) {
        ganador.push(4);
        document.querySelector('.equipo.cuartos-1D').style.cssText += 'background-color: red; transition: 0.7s; color:ghostwhite;' 
        document.querySelector('.equipo.cuartos-2D').style.cssText += 'opacity: 0.4; transition: 0.7s;' 
    } else {
        ganador.push(5);
        document.querySelector('.equipo.cuartos-2D').style.cssText += 'background-color: red; transition: 0.7s; color:ghostwhite;' 
        document.querySelector('.equipo.cuartos-1D').style.cssText += 'opacity: 0.4; transition: 0.7s;' 
    }
    if (cuartos_3D > cuartos_4D) {
        ganador.push(6);
        document.querySelector('.equipo.cuartos-3D').style.cssText += 'background-color: red; transition: 0.7s; color:ghostwhite;' 
        document.querySelector('.equipo.cuartos-4D').style.cssText += 'opacity: 0.4; transition: 0.7s;' 
    } else {
        ganador.push(7);
        document.querySelector('.equipo.cuartos-4D').style.cssText += 'background-color: red; transition: 0.7s; color:ghostwhite;' 
        document.querySelector('.equipo.cuartos-3D').style.cssText += 'opacity: 0.4; transition: 0.7s;' 
    }
    
    var ganadoresCuartos = auxganadoresOctavos.filter((item, index) =>{
        for (i of ganador) {
            if(index == i)
            return true
        }
    });
    auxganadoresCuartos = ganadoresCuartos;
    puestos_semis(ganadoresCuartos);
}


function puestos_semis(ganadoresCuartos){
    document.querySelector('.bandera.semis-1I').innerHTML = `<img src="${ganadoresCuartos[0].img}" alt="${ganadoresCuartos[0].name}">`;
    document.querySelector('.bandera.semis-2I').innerHTML = `<img src="${ganadoresCuartos[1].img}" alt="${ganadoresCuartos[1].name}">`; 
    document.querySelector('.bandera.semis-1D').innerHTML = `<img src="${ganadoresCuartos[2].img}" alt="${ganadoresCuartos[2].name}">`;
    document.querySelector('.bandera.semis-2D').innerHTML = `<img src="${ganadoresCuartos[3].img}" alt="${ganadoresCuartos[3].name}">`;
    
}

function goles_semis(){
    semis_1I += (Math.random()*100)/100;
    semis_2I += (Math.random()*100)/100;
    semis_1D += (Math.random()*100)/100;
    semis_2D += (Math.random()*100)/100;
}

function colocarResultados_semis(){
    document.querySelector('.resultado.semis-1I').innerHTML = Math.floor(semis_1I);
    document.querySelector('.resultado.semis-2I').innerHTML = Math.floor(semis_2I);
    document.querySelector('.resultado.semis-1D').innerHTML = Math.floor(semis_1D);
    document.querySelector('.resultado.semis-2D').innerHTML = Math.floor(semis_2D);
}

function semis(){
    contador = 0;
    return new Promise(resolve =>{
        var iteracion = setInterval(() => {
            contador++
            goles_semis();
            colocarResultados_semis();
            if (contador == 4) {
                clearInterval(iteracion);
                penales_1I = 0;
                penales_2I = 0;
                penales_1D = 0;
                penales_2D = 0;
                Promise.all([empate1_semis(), empate2_semis()]).then((resultado) => {
                    resolve();
                });
            }
        }, 1500);
    });
}

function empate1_semis(){
    return new Promise(resolve=>{
        if(Math.floor(semis_1I) === Math.floor(semis_2I)){
            var pen = setInterval(() => {
                penales_1I += (Math.random()*100)/100;
                penales_2I += (Math.random()*100)/100;
                document.querySelector('.resultado.semis-1I').innerHTML = `${Math.floor(semis_1I)} (${Math.floor(penales_1I)})` ;
                document.querySelector('.resultado.semis-2I').innerHTML = `${Math.floor(semis_2I)} (${Math.floor(penales_2I)})`;
                if (Math.floor(penales_1I) > Math.floor(penales_2I) || Math.floor(penales_1I) < Math.floor(penales_2I)){
                    clearInterval(pen);
                    resolve();
                } 
                
            }, 1500);
        }else{
            resolve();
        }
    });
}

function empate2_semis(){
    return new Promise(resolve =>{
        if(Math.floor(semis_1D) === Math.floor(semis_2D)){
            var pen = setInterval(() => {
                penales_1D += (Math.random()*100)/100;
                penales_2D += (Math.random()*100)/100;
                document.querySelector('.resultado.semis-1D').innerHTML = `${Math.floor(semis_1D)} (${Math.floor(penales_1D)})` ;
                document.querySelector('.resultado.semis-2D').innerHTML = `${Math.floor(semis_2D)} (${Math.floor(penales_2D)})`;
                if (Math.floor(penales_1D) > Math.floor(penales_2D) || Math.floor(penales_1D) < Math.floor(penales_2D)){
                    clearInterval(pen);
                    resolve();
                } 
                
            }, 1500);
        }else{
            resolve();
        }
    });
}

function ganadores_semis(){
    ganador = [];
    if (semis_1I > semis_2I) {
        ganador.push(0);
        document.querySelector('.equipo.semis-1I').style.cssText += 'background-color: red; transition: 0.7s; color:ghostwhite;' 
        document.querySelector('.equipo.semis-2I').style.cssText += 'opacity: 0.4; transition: 0.7s;' 
    } else {
        ganador.push(1);
        document.querySelector('.equipo.semis-2I').style.cssText += 'background-color: red; transition: 0.7s; color:ghostwhite;' 
        document.querySelector('.equipo.semis-1I').style.cssText += 'opacity: 0.4; transition: 0.7s;' 
    }    
    if (semis_1D > semis_2D) {
        ganador.push(2);
        document.querySelector('.equipo.semis-1D').style.cssText += 'background-color: red; transition: 0.7s; color:ghostwhite;' 
        document.querySelector('.equipo.semis-2D').style.cssText += 'opacity: 0.4; transition: 0.7s;' 
    } else {
        ganador.push(3);
        document.querySelector('.equipo.semis-2D').style.cssText += 'background-color: red; transition: 0.7s; color:ghostwhite;' 
        document.querySelector('.equipo.semis-1D').style.cssText += 'opacity: 0.4; transition: 0.7s;' 
    }
    
    var ganadoresSemis = auxganadoresCuartos.filter((item, index) =>{
        for (i of ganador) {
            if(index == i)
            return true
        }
    });
    auxganadoresSemis = ganadoresSemis;
    puestos_final(ganadoresSemis);
}

function puestos_final(ganadoresSemis){
    document.querySelector('.bandera.final-I').innerHTML = `<img src="${ganadoresSemis[0].img}" alt="${ganadoresSemis[0].name}">`;
    document.querySelector('.bandera.final-D').innerHTML = `<img src="${ganadoresSemis[1].img}" alt="${ganadoresSemis[1].name}">`;
}

function goles_final(){
    finalI += (Math.random()*100)/100;
    finalD += (Math.random()*100)/100;
}

function colocarResultados_final(){
    document.querySelector('.resultado.final-I').innerHTML = Math.floor(finalI);
    document.querySelector('.resultado.final-D').innerHTML = Math.floor(finalD);
}
function final(){
    contador = 0;
    return new Promise(resolve =>{
        var iteracion = setInterval(() => {
            contador++
            goles_final();
            colocarResultados_final();
            if (contador == 4) {
                clearInterval(iteracion);
                penales_1I = 0;
                penales_1D = 0;
                Promise.all([empate_final()]).then((resultado) => {
                    resolve();
                });
            }
        }, 1500);
    });
}
function empate_final(){
    return new Promise(resolve =>{
        if(Math.floor(finalI) === Math.floor(finalD)){
            var pen = setInterval(() => {
                penales_1D += (Math.random()*100)/100;
                penales_1I += (Math.random()*100)/100;
                document.querySelector('.resultado.final-D').innerHTML = `${Math.floor(finalD)} (${Math.floor(penales_1D)})` ;
                document.querySelector('.resultado.final-I').innerHTML = `${Math.floor(finalI)} (${Math.floor(penales_1I)})`;
                if (Math.floor(penales_1D) > Math.floor(penales_1I) || Math.floor(penales_1D) < Math.floor(penales_1I)){
                    clearInterval(pen);
                    resolve();
                } 
            }, 1500);
        }else{
            resolve();
        }
    });
}

function ganadores_final(){
    ganador = [];
    if (finalI > finalD) {
        ganador.push(0);
        document.querySelector('.equipo.final-I').style.cssText += 'background-color: red; transition: 0.7s; color:ghostwhite;' 
        document.querySelector('.equipo.final-D').style.cssText += 'opacity: 0.4; transition: 0.7s;' 
    } else {
        ganador.push(1);
        document.querySelector('.equipo.final-D').style.cssText += 'background-color: red; transition: 0.7s; color:ghostwhite;' 
        document.querySelector('.equipo.final-I').style.cssText += 'opacity: 0.4; transition: 0.7s;' 
    }    
    
    var ganadorFinal = auxganadoresSemis.filter((item, index) =>{
        for (i of ganador) {
            if(index == i)
            return true
        }
    });
    document.querySelector('.central').innerHTML = `<center><label class="mensaje"></label></center> <div class="resultado ganador"> </div> <button class="repetir" style="display: flex;" onclick="location.href='brackets.html'">Nueva Simulacion</button>`;
    document.querySelector('.mensaje').innerHTML = 'GANADOR';
    document.querySelector('.ganador').innerHTML = `<img class = "resultado" src="${ganadorFinal[0].img}" alt="${ganadorFinal[0].name}">`;
    
}

var segundos = 0;
var minutos = 0;
function digitos(num){
    if (num < 10)
        num = `0${num}`;
    return num;
}
function tiempo(){
    segundos++;
    segundos = digitos(segundos);
    if (segundos == 59) {
        minutos++;
        segundos = 0;
        segundos = digitos(segundos);
    }
    document.querySelector('#hora').innerHTML = `Tiempo 0${minutos}:${segundos}`;
}
var t = setInterval(function(){
    tiempo();
}, 1000);


