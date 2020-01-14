import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
 name:'shorten'
})
export class ShortenPipe implements PipeTransform {
 transform(value:any,limit:any){
     if(value.length > 10){
        return value.substring(0,limit) + ' ...';
     }
   return value;
 }
}