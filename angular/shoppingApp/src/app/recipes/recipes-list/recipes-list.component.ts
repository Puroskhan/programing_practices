import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
 
@Output() recipesDetailsWasSelected = new EventEmitter<Recipe>();

recipes:Recipe[] =[
  new Recipe(
  "A Test Recipe",
  "simple Testing Item",
  "https://mommyshomecooking.com/wp-content/uploads/2018/03/Easy-Whole-30-Chicken-and-Asparagus-Skillet-1-768x1075.jpg"
  )
];

  constructor() { 
    console.log(this.recipes,"jhvhjjhvvhj");
  }

  ngOnInit() {
  }
  recipeDetailsLoad(recipeDetails:Recipe){
   this.recipesDetailsWasSelected.emit(recipeDetails);
  }
}
