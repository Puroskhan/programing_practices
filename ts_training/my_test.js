var namesss = "John";
var score1 = 50;
var score2 = 42.50;
var sum = score1 + score2;
console.log("name" + namesss);
console.log("first score: " + score1);
console.log("second score: " + score2);
console.log("sum of the scores: " + sum);
var myFirstProgram = /** @class */ (function () {
    function myFirstProgram() {
    }
    myFirstProgram.prototype.hello = function () {
        var myVar;
        var myStiring;
        myVar = 315;
        myStiring = "kavi";
        console.log(myVar + myStiring + "hello world");
    };
    return myFirstProgram;
}());
var m1 = new myFirstProgram();
m1.hello();
