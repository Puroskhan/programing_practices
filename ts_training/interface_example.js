var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//normal way
var car = {
    name: "audi",
    color: "black",
    rate: 1000,
    feature: function () { return 1.2; }
};
;
//mention type with interface
var car1 = {
    names: "audi",
    color: "black",
    rate: 1000,
    feature: function () { return 1.2; }
};
var testTs = /** @class */ (function () {
    function testTs(parameters) {
        this.callMethod();
        console.log(this.doTest(parameters));
    }
    testTs.prototype.callMethod = function () {
        var car2 = {
            names: "audi",
            color: "black",
            rate: 1000,
            feature: function () { return 1.2; }
        };
        console.log("callMethod Called :" + car2.names);
    };
    testTs.prototype.doTest = function (param) {
        return 2 + param;
    };
    return testTs;
}());
var testTs1 = /** @class */ (function (_super) {
    __extends(testTs1, _super);
    function testTs1(parameters) {
        return _super.call(this, 2) || this;
    }
    testTs1.prototype.finalMethod = function (str) {
        var finalStr = "final methed called";
        console.log(finalStr);
        return finalStr;
    };
    return testTs1;
}(testTs));
var t1 = new testTs1(2);
t1.finalMethod("hi");
