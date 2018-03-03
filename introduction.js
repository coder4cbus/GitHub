(introduction)
console.log('hello');
var example = 'some string';
console.log(example);
(numbers.js)
var example = 123456789;
console.log(example);
(revising strings)
var pizza = 'pizza is alright';
(string length)
var example = 'example string';
console.log(example.length);
(string length)
var someString = 'this is a string';
console.log(someString);
(variables)
var example = 'some string';
console.log(example);
(revising string)
console.log(pizza.replace("alright", "wonderful"));
(rounding)
var roundUp = 1.5;
var rounded = Math.round(roundUp);
console.log(rounded);
(number to string)
var n = 128;
console.log(n.toString());
(
    if,
    else statment)
var fruit = 'orange';
if (fruit.length > 5) {
    console.log("The fruit name has more than five characters.");
} else {
    console.log("The fruit name has five characters or less.");
}
(
    for loop)
var total = 0;
var limit = 10;
for (var i = 0; i < 10; i++) {
    total += i;
}
console.log(total);

(array)
var pizzaToppings = ['tomato sauce', 'cheese', 'pepperoni'];
console.log(pizzaToppings);
(array filter)
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var filtered = numbers.filter(function evenNumbers(number) {
    return number % 2 === 0;
});
console.log(filtered);
(accessing elements of arrays)
var food = ['apple', 'pizza', 'pear'];
console.log(food[1]);

(looping through arrays)
var pets = ['cat', 'dog', 'rat'];

for (var i = 0; i < pets.length; i++) {
    pets[i] = pets[i] + 's';
}
console.log(pets);
(accessing objects)
var pizza = {
    toppings: ['cheese', 'sauce', 'pepperoni'],
    crust: 'deep dish',
    serves: 2
};
console.log(pizza);
(object properties)
var food = {
    types: 'only pizza'
};
console.log(food.types);
(functions)
var food = 'bananas ';

function eat(food) {
    return food + 'tasted really good.';
}
console.log(eat(food));
(arguments)

function math([first, second, third]) {
    return (second * third) + first;
}
console.log(math([53, 61, 67]));

(function arguments)

function math([first, second, third]) {
    return (second * third) + first;
}
console.log(math([53, 61, 67]));

function math([o1, t2, t3]) {
    return ((t2 * t3) + o1);
}
console.log(math([53, 61, 67]));

Why do the arguments
for
the

function definition need to begin with a letter,
while the arguments that were evaluated are able to be numbers ?

    function math(['1', '2', '3']) {
        return (('2' * '3') + '1');
    }
console.log(math([53, 61, 67]));
(scope)
var a = 1,
    b = 2,
    c = 3;

(function firstFunction() {
    var b = 5,
        c = 6;

    (function secondFunction() {
        var b = 8;

        (function thirdFunction() {
            var a = 7,
                c = 9;

            (function fourthFunction() {
                var a = 1,
                    c = 8;

            })();
        })();
        console.log("a: " + a + ", b: " + b + ", c: " + c);
    })();
})();