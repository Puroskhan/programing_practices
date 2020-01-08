import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService{

  ingredientsChanged = new Subject<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
      ];

      getIncredients(){
        return this.ingredients.slice();
      }

      addIncredient(ingredient:Ingredient){
      this.ingredients.push(ingredient);
      this.ingredientsChanged.next(this.ingredients.slice());
      }

      addIncredients(ingredients:Ingredient[]){
        // for(let ingredient of ingredients){
        // this.addIncredients(ingredient)
        // }
        this.ingredients.push(...ingredients) //ecma 6 updation
        this.ingredientsChanged.next(this.ingredients.slice())

      }
}