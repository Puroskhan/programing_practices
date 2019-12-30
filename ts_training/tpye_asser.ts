class inhere {
    constructor(myparam:string) {
        console.log("parent class called : " +myparam);
    }
}



class asserT extends inhere{
    constructor() {
     super("froze");
     var  str1:string = "1"; 
     var  str2:number =<number><any> str1  //data type conversion
     console.log(str1+this.secondMethod(2))
    }

    public secondMethod(myNum:number):number{
        var newNum = myNum +5
        return myNum
    }
}

var al:asserT = new asserT();
