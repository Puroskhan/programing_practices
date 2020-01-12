import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit,OnDestroy {
  ingredients: Ingredient[];
   private subcription:Subscription;

  constructor(private shoppinListService:ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppinListService.getIncredients();
   this.subcription = this.shoppinListService.ingredientsChanged.subscribe(
      (ingredients:Ingredient[]) =>{
        this.ingredients = ingredients;
      }
    );
  }

  onEdit(index:number){
     this.shoppinListService.startEditItem.next(index)
  }

  ngOnDestroy(){
  this.subcription.unsubscribe();
  }
}
