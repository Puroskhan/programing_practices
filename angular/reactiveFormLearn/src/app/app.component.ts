import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';
import { resolve } from 'url';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  genders = ['male', 'female'];
  signupForm:FormGroup;
  forbiddeNamesHobbies= ['anna','kavi'];

  ngOnInit(){
    
  this.signupForm = new FormGroup({
    'userData':new FormGroup({
      'username':new FormControl(null,[Validators.required,this.forbiddenNames.bind(this)]),
      'email':new FormControl(null,[Validators.required,Validators.email],this.forbiddenEmail),
    }),
    'gender':new FormControl('male'),
    'hobbies':new FormArray([])
  }); 


  
  // this.signupForm.valueChanges.subscribe(
  //   (values)=>console.log(values)
  // )
  // this.signupForm.statusChanges.subscribe(
  //   (status)=>console.log(status)
  // )


  }

  onSubmit(){
    console.log(this.signupForm);
  }

  onHoppy(){
    const hoppy =  new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(hoppy);
  }

  forbiddenNames(controls:FormControl):{[s:string]:boolean}{
   if(this.forbiddeNamesHobbies.indexOf(controls.value) !== -1){
     return {'name':true}
   }
   return null;
  }

  forbiddenEmail(controls:FormControl):Promise<any> | Observable<any>{
  const promise = new Promise<any>(
    (resolve,reject)=>{
     setTimeout(()=>{
       if(controls.value ==="test@test.com"){
            resolve({'emailForbidden':true})
       }
       else{
         resolve(null)
       }
     },3000)
    }
  )
  return promise;
  }


}
