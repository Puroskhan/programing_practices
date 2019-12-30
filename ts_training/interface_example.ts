
//normal way
var car = {
    name:"audi",
    color:"black",
    rate:1000,
    feature:() => { return 1.2}
};

//condinal way

interface Icarproperty {
    names:string,
    color:string,
    rate:number,
    feature:()=> number
};

//mention type with interface
var car1:Icarproperty = {
    names:"audi",
    color:"black",
    rate:1000,
    feature:() => { return 1.2}
}
  

interface classRuler extends classRuler1{
 /**
  * name
  */
  callMethod():void;
  doTest(param:number):number;
}

interface classRuler1{
  finalMethod(str:string):string;
}

abstract class testTs implements classRuler{

    constructor(parameters) {
        this.callMethod();
        console.log( this.doTest(parameters));
    }
    public callMethod():void{
      var car2:Icarproperty=  {
        names:"audi",
        color:"black",
        rate:1000,
        feature:() => { return 1.2}
    }
    console.log("callMethod Called :"+car2.names);
    }

    public doTest(param:number):number{
        return 2 + param
    }
    abstract finalMethod(str:string):string;
}  

class testTs1 extends testTs {
    constructor(parameters) {
        super(2);
    }
    public finalMethod(str:string):string{
      var finalStr:string = "final methed called";
       console.log(finalStr);
       return finalStr
    }
}

var t1 = new testTs1(2);
    t1.finalMethod("hi");