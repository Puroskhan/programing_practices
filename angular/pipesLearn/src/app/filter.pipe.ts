import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure:false //it is havvy wait rare to use..performans 
})
export class FilterPipe implements PipeTransform {
 
  transform(value: any,fileterStatus:any,propName:any): any {
    const resultArray = [];
    if(value.length ===0 || fileterStatus ===''){
      return value
    }
    for(let item of value){
       if(item[propName] === fileterStatus){
         resultArray.push(item)
       }
    }
    return resultArray;
  }

}
