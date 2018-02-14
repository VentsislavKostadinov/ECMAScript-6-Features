(function() {
    let x = '';

    function myFunction () {
        console.log('Hello: ' + x);
    }

    x = 'Bob';
    myFunction();

    console.log(typeof x);            // string
    console.log(typeof myFunction);   // function
})();

console.log();

console.log(typeof x);               // undefined
console.log(typeof myFunction);
