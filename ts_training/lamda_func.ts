class lamda {
    constructor(parameters) {
        console.log(this.test(1));
    }

    test(newNum:number){
        var my_lamda =(newNum:number)=>{
            return newNum * 12
        }
        return my_lamda;
    }
}

var l1 = new lamda(1);