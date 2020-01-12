import {
  Component,
  OnInit,
  ViewChild
} from '@angular/core';
import { NgForm } from '@angular/forms';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
 editMode:boolean= false;
 editId:number;
 editItem:Ingredient;
 @ViewChild('f',{static:false}) shoppingListForm:NgForm;

  
  constructor(private shoppinhListService:ShoppingListService) { }

  ngOnInit() {
    this.shoppinhListService.startEditItem.subscribe(
      (index)=>{
        console.log("ide",index)
       this.editId= index
       this.editMode= true;
       this.editItem= this.shoppinhListService.getIncredient(index);
       this.shoppingListForm.setValue({
         'name':this.editItem.name,
         'amount':this.editItem.amount
       })

      }
    )
  }

  onSubmit(form:NgForm) {
    const value =  form.value
    const newIngredient = new Ingredient(value.name, value.amount);
    if(this.editMode){
       this.shoppinhListService.updateIncredient(this.editId,newIngredient)
    }
    else{
      this.shoppinhListService.addIncredient(newIngredient);
    }
    form.reset();
    this.editMode = false;
  }

  onReset(){
    this.shoppingListForm.reset();
    this.editMode=  false;
  }


  onDelete(){
   this.shoppinhListService.deleteIndcredient(this.editId)
   this.onReset();
  }

}
