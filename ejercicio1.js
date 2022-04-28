const arr = [1, 2, 3, 4, 5, 6];

// utilizar el método map de los arreglos para duplicar cada elemento
// [2, 4, 6, 8, 10, 12]

const duplicateArray = arr.map (function(e){
    return e*2;
})

console.log(duplicateArray);

// utilizar el método filter para filtrar los números pares de arr
// [2, 4, 6]

const parArray = arr.filter ( function(number){
    return number%2 === 0    
});

console.log(parArray);

// utilizar el método reduce para sumar todos los elementos
// 21

const sum = arr.reduce(function (a, b){
    return a+b;
});

console.log (sum);
