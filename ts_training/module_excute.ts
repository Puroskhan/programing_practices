import Imain = require("./module_interface");
import ClassOne = require("./module_one");
import ClassTwo = require("./module_two");
 function excute(obj:Imain.Imain){
    obj.excuter();
 }

var ec = excute(new ClassOne.tsClassOne());
var ec = excute(new ClassTwo.classTwo());