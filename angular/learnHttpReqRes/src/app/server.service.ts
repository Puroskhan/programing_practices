import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { error } from 'protractor';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ServerService {
    constructor(private http:HttpClient){}

    storeSever(servers:any[]){
        
     //return this.http.post('https://my-test-app-1117a.firebaseio.com/data.json',servers)
     return this.http.put('https://my-test-app-1117a.firebaseio.com/data.json',servers)

    }
    
    getServes(){
     return this.http.get('https://my-test-app-1117a.firebaseio.com/data.json').map(
         (reponse:Response)=>{
          return reponse
         }
     ).catch(
        (error:Response)=>{
            console.log(error);
            return Observable.throw('Somthing wrong ggg');
        }
     )
    }

    
}