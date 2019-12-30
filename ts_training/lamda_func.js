var lamda = /** @class */ (function () {
    function lamda(parameters) {
        console.log(this.test(1));
    }
    lamda.prototype.test = function (newNum) {
        var my_lamda = function (newNum) {
            return newNum * 12;
        };
        return my_lamda;
    };
    return lamda;
}());
var l1 = new lamda(1);
