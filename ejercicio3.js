// creo una constante de personas con su nombre junto su edad.
const personas = 
    [
        { nombre: 'Juan', edad: 30 }, 
        { nombre: 'María', edad: 25 }, 
        { nombre: 'Pedro', edad: 35 },
        { nombre: 'Lisandro', edad: 45 },
        { nombre: 'Belen', edad: 28 },
        { nombre: 'Cristina', edad: 23 },
    ];

// creo la variable donde se hara el cambio, osea Lisandro pasara a => LISANDRO como ejemplo.
    let nombres = personas.map(obj => {return obj.nombre.toUpperCase()});

// hago un console.log() para verificar si el codigo funciona y me da lo correcto.
console.log('sus nombres son ' + nombres);
