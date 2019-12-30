import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  featues = new EventEmitter<string>();

  constructor() { }
  recipeDetailsLoad(recipeDetails){
    console.log("recipeDetails " +recipeDetails);
  }

  ngOnInit() {
  }

}
