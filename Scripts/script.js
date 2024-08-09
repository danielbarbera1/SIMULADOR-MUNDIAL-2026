var contador = 0;
var list = [];

function agregar(pais){
    // Buscar si existe
    let indice = list.indexOf(pais)
    if (indice != -1){
        // El elemento existe, por tanto se elimina "Evitar que el equipo se repita"
        list.splice(indice, 1);
        document.getElementsByClassName(pais)[0].style.cssText = 'transition: 0.4s;'
        contador--
        
    }else{// Agregar equipo
        // Comprobar que solo seleccione 16 equipos
        if(list.length >= 16){
            return alert('Solo puede seleccionar 16 equipos!')
        }
        contador++
        list.push(pais)
        document.getElementsByClassName(pais)[0].style.cssText = 'transition: 0.4s;  opacity: 0.7;'
                
    }

    // Cambiamos el boton por un enlaze a home
    if(contador === 16){
        return document.querySelector('.calcular').innerHTML = '<center><button id = "seleccionar" class="boton comenzar" onclick="start();location.href=`brackets.html`">Comenzar</button></center>'
    }else{
        return document.querySelector('.calcular').innerHTML = '<center><button id="seleccionar" class="boton comenzar" onclick="start()">Comenzar</button></center>'
    }
}

function start(){
    if(list.length < 16){
        return alert(`Le faltan ${16-contador} equipos para poder iniciar!`)
    }else{
        localStorage.setItem('brackets', list)
    }
}


