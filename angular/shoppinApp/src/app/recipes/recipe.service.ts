import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
@Injectable()
export class RecipeService{

  constructor(private shoppingListServies:ShoppingListService){
     
  }

   private recipes: Recipe[] = [
        new Recipe(
            'A Test Recipe',
         'This is simply a test',
          'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
          [
              new Ingredient('Meat',20),
              new Ingredient('French Frices',30)
          ]
          ),
        new Recipe(
            'Another Test Recipe', 
            'This is simply a test',
             'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
             [
                new Ingredient('Meat',20),
              new Ingredient('Burgaer',30)
             ]
             )
      ];

    getRecipes(){
      return this.recipes.slice();
    }
   getRecipe(index:number){
   return this.recipes[index];
   }
    addIngredientsToShoppingList(ingredient:Ingredient[]){
     this.shoppingListServies.addIncredients(ingredient);
    }
   
  

}