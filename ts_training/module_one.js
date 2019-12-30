define(["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    var tsClassOne = /** @class */ (function () {
        function tsClassOne() {
        }
        tsClassOne.prototype.excuter = function () {
            console.log("i am from class one");
        };
        return tsClassOne;
    }());
    exports.tsClassOne = tsClassOne;
});
