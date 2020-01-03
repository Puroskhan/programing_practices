import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService{

  ingredientsChanged = new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
      ];

      getIncredients(){
        return this.ingredients.slice();
      }

      addIncredient(ingredient:Ingredient){
      this.ingredients.push(ingredient);
      this.ingredientsChanged.emit(this.ingredients.slice());
      }

      addIncredients(ingredients:Ingredient[]){
        // for(let ingredient of ingredients){
        // this.addIncredients(ingredient)
        // }
        this.ingredients.push(...ingredients) //ecma 6 updation
        this.ingredientsChanged.emit(this.ingredients.slice())

      }
}