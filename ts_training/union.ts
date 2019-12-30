function testUnion(varType:string|number){ //checking two types
 if(typeof varType ==="string"){
   console.log("sting");
 }
else if(typeof varType ==="number"){
    console.log("number");
}

}

var f1 = new testUnion(2);
var f2 = new testUnion("2");
// var f2 = new testUnion([1]);  // error types
