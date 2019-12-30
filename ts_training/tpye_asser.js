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
var inhere = /** @class */ (function () {
    function inhere(myparam) {
        console.log("parent class called : " + myparam);
    }
    return inhere;
}());
var asserT = /** @class */ (function (_super) {
    __extends(asserT, _super);
    function asserT() {
        var _this = _super.call(this, "froze") || this;
        var str1 = "1";
        var str2 = str1; //data type conversion
        console.log(str1 + _this.secondMethod(2));
        return _this;
    }
    asserT.prototype.secondMethod = function (myNum) {
        var newNum = myNum + 5;
        return myNum;
    };
    return asserT;
}(inhere));
var al = new asserT();
