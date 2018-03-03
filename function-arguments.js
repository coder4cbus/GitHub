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