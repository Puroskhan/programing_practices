import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';


import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id:number;

  constructor(private recipesServices:RecipeService,
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit() {
    //this.recipe = this.recipesServices.getRecipes()
    this.route.params.subscribe(
      (params:Params)=>{
        this.id= +params['id'];
        this.recipe= this.recipesServices.getRecipe(this.id)
      }
    )
  }
  onAddToShoppingList(){
   this.recipesServices.addIngredientsToShoppingList(this.recipe.ingredients)
  } 

  onEdit(){
  this.router.navigate(['edit'],{relativeTo:this.route})
  }


}
