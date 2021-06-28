// selection on objects
let produce = {
    apple: 'Fruit',
    carrot: 'Vegetable',
    pear: 'Fruit',
    broccoli: 'Vegetable'
};

function selectFruit (produce) {
    let obj = {};
    const keys = Object.keys(produce);
    for (let key in produce) {
        if (produce[key] === 'Fruit') {
            obj[key] = produce[key];
        }
    }
    return obj;
}

//console.log(selectFruit(produce));

// transformation functions.
// Note: in the function below, the original array was not mutated.
function doubleNumber(numbers) {
    let doubleNumbers = [];
    for (let index = 0; index < numbers.length; index++) {
        doubleNumbers[index] = Math.pow(numbers[index], 2); 
    }
    return doubleNumbers;
}

//console.log(doubleNumber([10,20,30]));

// Note: to mutate the original array, use forEach() method on the array
function doubleNumberV2(numbers) {
    for (let index = 0; index < numbers.length; index++) {
        numbers[index] = Math.pow(numbers[index] , 2);
    }
    return numbers;
}

const numbers = [10,20,30];
// console.log("numbers before doubled " , numbers);
// console.log("numbers after doubled" , doubleNumberV2(numbers));
// console.log("original numbers", numbers)

// Question: double numbers array with odd indices.
function doubleOdd (numbers) {
    let doubleNumbers = [];
    for (let index = 0; index < numbers.length; index++) {
        if (index %2 === 1) doubleNumbers[index] = numbers[index];
        else doubleNumbers[index] = Math.pow(numbers[index], 2);
    }
    return doubleNumbers;
}

//console.log(doubleOdd([10,20,30,40,50]));


//question: select all vowels in the string and return it as a single string
function vowelString(str) {
    const strArray = str.split('');
    let vowelArr = [];
    const vowels = ['a','e','i','o','u','A','E', 'I', 'O','U' ];
    vowelArr = strArray.filter(letter => vowels.includes(letter))
    return vowelArr.join('');
}

console.log(vowelString("What's up, Doc?"));