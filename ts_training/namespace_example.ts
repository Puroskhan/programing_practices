///<reference path = "namespace_one.ts"/>
namespace Ruler{
  export class tsTest1 {
      constructor(parameters:any) {
          console.log(parameters)
      }
  } 
}

class excuteClass {
    constructor(para:object|any){
      return para  
    }
}
var tc = new excuteClass(new Ruler.tsTest1([22]));
var tc1 = new Ruler.testClass();
    tc1.test();
    