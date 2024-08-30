// un arreglo de numeros enteros
const numeros = [5, 9, 25, 34, 40, 46, 70, 75, 88, 65, 10];
console.log('valores iniciales ' + numeros);

// en este caso "a" es 4 y "b" 2
let isdivisible = numeros.reduce(n => {return n % 4 === 0, n % 2 === 0});
console.log(isdivisible);

//filtro todos los numeros divisibles por cinco y que me lo devuelva en la consola
let filtro = numeros.filter(obj => obj % 5 === 0); 
    console.log('valores filtrados ' + filtro);
