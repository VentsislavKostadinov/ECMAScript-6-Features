


function letExample() {

    var x = 10;

    if(x > 5) {

        let x = 5;

        console.log(" Inside x is: " + x);
    }

    console.log(" Outside x is: " + x);
}



testVar();

function testVar() {

    var a = 30;

    if(true) {

        let a = 50;

        console.log(a);
    }

    console.log(a);
}

