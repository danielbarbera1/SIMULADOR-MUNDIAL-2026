const paises = [
    {
        id: 1,
        name: 'alemania',
        img: 'imagenes/alemania.png'
    },
    {
        id: 2,
        name: 'argentina',
        img: 'imagenes/argentina.png'
    },
    {
        id: 3,
        name: 'belgica',
        img: 'imagenes/belgica.png'
    },
    {
        id: 4,
        name: 'brasil',
        img: 'imagenes/brasil.png'
    },
    {
        id: 5,
        name: 'dinamarca',
        img: 'imagenes/dinamarca.png'
    },
    {
        id: 6,
        name: 'corea',
        img: 'imagenes/corea.png'
    },
    {
        id: 7,
        name: 'croacia',
        img: 'imagenes/croacia.png'
    },
    {
        id: 8,
        name: 'españa',
        img: 'imagenes/espana.png'
    },
    {
        id: 9,
        name: 'francia',
        img: 'imagenes/francia.png'
    },
    {
        id: 10,
        name: 'holanda',
        img: 'imagenes/holanda.png'
    },
    {
        id: 11,
        name: 'inglaterra',
        img: 'imagenes/inglaterra.png'
    },
    {
        id: 12,
        name: 'japon',
        img: 'imagenes/japon.png'
    },
    {
        id: 13,
        name: 'marruecos',
        img: 'imagenes/marruecos.png'
    },
    {
        id: 14,
        name: 'mexico',
        img: 'imagenes/mexico.png'
    },
    {
        id: 15,
        name: 'polonia',
        img: 'imagenes/polonia.png'
    },
    {
        id: 16,
        name: 'portugal',
        img: 'imagenes/portugal.png'
    },
    {
        id: 17,
        name: 'senegal',
        img: 'imagenes/senegal.png'
    },
    {
        id: 18,
        name: 'suiza',
        img: 'imagenes/suiza.png'
    },
    {
        id: 19,
        name: 'uruguay',
        img: 'imagenes/uruguay.png'
    },
    {
        id: 20,
        name: 'usa',
        img: 'imagenes/usa.png'
    }
];

function cargarDatos(){
    let equipos = localStorage.getItem('brackets').split(',');
    var objEquipos = paises.filter((pais) =>{
        for (i of equipos){
            if(pais.name == i)
            return true;
        }
    }
    )
    colocarBanderas(objEquipos)
}

var equipos = [];
function colocarBanderas(objEquipos){
    objEquipos = objEquipos.sort((a,b) => Math.random() - 0.5);
    document.querySelector('.bandera.octavos-1I').innerHTML = `<img src="${objEquipos[0].img}" alt="${objEquipos[0].name}">`;
    document.querySelector('.bandera.octavos-2I').innerHTML = `<img src="${objEquipos[1].img}" alt="${objEquipos[1].name}">`;
    document.querySelector('.bandera.octavos-3I').innerHTML = `<img src="${objEquipos[2].img}" alt="${objEquipos[2].name}">`;
    document.querySelector('.bandera.octavos-4I').innerHTML = `<img src="${objEquipos[3].img}" alt="${objEquipos[3].name}">`;
    document.querySelector('.bandera.octavos-5I').innerHTML = `<img src="${objEquipos[4].img}" alt="${objEquipos[4].name}">`;
    document.querySelector('.bandera.octavos-6I').innerHTML = `<img src="${objEquipos[5].img}" alt="${objEquipos[5].name}">`;
    document.querySelector('.bandera.octavos-7I').innerHTML = `<img src="${objEquipos[6].img}" alt="${objEquipos[6].name}">`;
    document.querySelector('.bandera.octavos-8I').innerHTML = `<img src="${objEquipos[7].img}" alt="${objEquipos[7].name}">`;
    document.querySelector('.bandera.octavos-1D').innerHTML = `<img src="${objEquipos[8].img}" alt="${objEquipos[8].name}">`;
    document.querySelector('.bandera.octavos-2D').innerHTML = `<img src="${objEquipos[9].img}" alt="${objEquipos[9].name}">`;
    document.querySelector('.bandera.octavos-3D').innerHTML = `<img src="${objEquipos[10].img}" alt="${objEquipos[10].name}">`;
    document.querySelector('.bandera.octavos-4D').innerHTML = `<img src="${objEquipos[11].img}" alt="${objEquipos[11].name}">`;
    document.querySelector('.bandera.octavos-5D').innerHTML = `<img src="${objEquipos[12].img}" alt="${objEquipos[12].name}">`;
    document.querySelector('.bandera.octavos-6D').innerHTML = `<img src="${objEquipos[13].img}" alt="${objEquipos[13].name}">`;
    document.querySelector('.bandera.octavos-7D').innerHTML = `<img src="${objEquipos[14].img}" alt="${objEquipos[14].name}">`;
    document.querySelector('.bandera.octavos-8D').innerHTML = `<img src="${objEquipos[15].img}" alt="${objEquipos[15].name}">`;
    localStorage.setItem('equipos', JSON.stringify(objEquipos));
}



