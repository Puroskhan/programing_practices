var Ruler;
(function (Ruler) {
    var testClass = /** @class */ (function () {
        function testClass() {
        }
        testClass.prototype.test = function () {
            console.log("My Test");
        };
        return testClass;
    }());
    Ruler.testClass = testClass;
})(Ruler || (Ruler = {}));
///<reference path = "namespace_one.ts"/>
var Ruler;
(function (Ruler) {
    var tsTest1 = /** @class */ (function () {
        function tsTest1(parameters) {
            console.log(parameters);
        }
        return tsTest1;
    }());
    Ruler.tsTest1 = tsTest1;
})(Ruler || (Ruler = {}));
var excuteClass = /** @class */ (function () {
    function excuteClass(para) {
        return para;
    }
    return excuteClass;
}());
var tc = new excuteClass(new Ruler.tsTest1([22]));
var tc1 = new Ruler.testClass();
tc1.test();
