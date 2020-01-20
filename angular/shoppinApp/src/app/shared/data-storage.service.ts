import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpParams, HttpRequest } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
// import { Observable } from 'rxjs';
import 'rxjs/Rx';
import { AuthService } from '../auth/auth.service';
@Injectable()
export class DataStorageService {
    constructor(private http:HttpClient,private recipeService:RecipeService,private authService:AuthService){
    }

    storeRecipes(){
        //default type
        const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
         
        // we can set header type 
        //const headersType = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'}).set('Authorization':'ascascas');
        const token = this.authService.getToken();
    //     const params = new HttpParams().set('auth',token)//set query param with values
    //    return this.http.put('https://ng-recipe-app-d00b7.firebaseio.com/recipe.json?auth='+token,
    //    this.recipeService.getRecipes(),
    //    {observe:'body',
    //    params:params
    // }
    //    );

    //progress bar
    const req = new HttpRequest('PUT',
    'https://ng-recipe-app-d00b7.firebaseio.com/recipe.json',
    this.recipeService.getRecipes(),
    {reportProgress:true,params:new HttpParams().set('auth',token)}
    )
     return this.http.request(req)
    }

    getRecipe(){
        const token = this.authService.getToken();
        //default type is json
        // return this.http.get<Recipe[]>('https://ng-recipe-app-d00b7.firebaseio.com/recipe.json?auth='+token)
        //we can override types
        return this.http.get<Recipe[]>('https://ng-recipe-app-d00b7.firebaseio.com/recipe.json?auth='+token,{observe:'body',responseType:'json'})
        .map(
            (recipes)=>{
                for(let recipe of recipes){
                  if(!recipe['ingredients']){
                    recipe['ingredients'] = [];
                  }
                }
                return recipes;
                }
        )
        .subscribe(
            (response)=>{
            const recipes = response;
             this.recipeService.setRecipes(recipes)
            }
        )
    }

    // getRecipe(): Observable<HttpResponse<Recipe[]>> {
    //     return this.http.get<Recipe[]>(
    //         'https://ng-recipe-app-d00b7.firebaseio.com/recipe.json', { observe: 'response' });
    //   }

    //  getData(){
    //   return this.getRecipe().subscribe(
    //         (response)=>{
    //                     const recipes = response;
    //                     console.log("response",response);
    //                   //   this.recipeService.setRecipes(recipes)
    //                     }
    //       )
    //   }

}