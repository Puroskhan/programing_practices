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
var tc = new Ruler.testClass();
tc.test();
