define(["require", "exports", "./module_one", "./module_two"], function (require, exports, ClassOne, ClassTwo) {
    "use strict";
    exports.__esModule = true;
    function excute(obj) {
        obj.excuter();
    }
    var ec = excute(new ClassOne.tsClassOne());
    var ec = excute(new ClassTwo.classTwo());
});
