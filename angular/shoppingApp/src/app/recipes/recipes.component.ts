import { Component, OnInit, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  selectedRecipes:Recipe;

  featues = new EventEmitter<string>();

  constructor() { 
    console.log("recipeDetails " + this.selectedRecipes);
  }

  ngOnInit() {
  }

}
