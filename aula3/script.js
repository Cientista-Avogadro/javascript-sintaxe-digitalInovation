//arrays e objects

//arrays
//declarar um array
// let array = ['string', 1, true];
// console.log(array);

// let array = ['string', 1, true, ['array1'], ['array2'], ['array3'], ['array4']];
// console.log(array[3]);

//Manipulação de arrays

//Foreach function
let array = ['string', 1, true, ['array1'], ['array2'], ['array3'], ['array4']];
// array.forEach(function(item, index){console.log(item, index);});

//push
// array.push('novo item');
// console.log(array);

//pop
// array.pop();
// console.log(array);

//shift
// array.shift();
// console.log(array);

//unshift
// array.unshift('novo item no inicio');
// console.log(array);

//indexOf
// console.log(array.indexOf(true))

//splice
// array.splice(0, 3);
// console.log(array);

//slice
// let novoArray = array.slice(0, 3);
// console.log(novoArray);

//Objects
let object = {
  string: 'string',
  number: '1',
  boleand: true,
  array: ['array'],
  objectInterno: {
    objectInterno: 'objecto interno',
  },
};

// console.log(object.objectInterno);

//desestruturação de objecto

// var string = object.string;
// console.log(string);

// var arrayInterno = object.array;
// console.log(arrayInterno);

// var { string, boleand, objectInterno } = object;
// console.log(string, boleand, objectInterno);
