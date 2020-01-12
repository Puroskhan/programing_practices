import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService{

  ingredientsChanged = new Subject<Ingredient[]>();

  startEditItem = new Subject<number>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
      ];

      getIncredient(index:number):Ingredient{
        return this.ingredients[index]
      }

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

      updateIncredient(index:number,newIncredient:Ingredient){
       this.ingredients[index]=newIncredient;
       this.ingredientsChanged.next(this.ingredients.slice())
      }

      deleteIndcredient(index:number){
        console.log('org index',index)
        this.ingredients.slice(index,1)
        console.log('org',this.ingredients.slice())
        this.ingredientsChanged.next(this.ingredients.slice())
      }
}