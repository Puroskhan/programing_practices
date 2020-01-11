import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
@ViewChild('f',{static:true}) sigUpForm:NgForm;
defaultValue='teacher'
answer:string='';
genders= ['male','female']

   suggestUserName() {
    const suggestedName = 'Superuser';
    // this.sigUpForm.setValue({
    //   userData:{
    //     username:'Froze',
    //     email:'restMins'
    //   },
    //   secret:'pet',
    //   questionAnswer:'dog',
    //   gender:'male'
    // });
    this.sigUpForm.form.patchValue({
      userData:{
        username:"froze"
      }
    });
  }

  // onSubmit(form:NgForm){
  // console.log(form);
  // }



  onSubmit(form:NgForm){
    console.log(this.sigUpForm);
    this.sigUpForm.reset();
    }
}
