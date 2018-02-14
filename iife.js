  (function () {

    let counter = 0;

    function increase(num) {

        counter +=num;
    }

    function descrease(num) {

        counter -=num;
    }

    return {increase, descrease}
})();

