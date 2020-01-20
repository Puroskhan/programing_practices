import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { HomeComponent } from './core/home/home.component';


const appRoutes:Routes = [
  //  {path:'',redirectTo:'/recipes',pathMatch:'full'},
    {path:'',component:HomeComponent},
    {path:'recipes',loadChildren:'./recipes/recipes.module#RecipesModule'},
    {path:'shopping-list',component:ShoppingListComponent,children:[
        {path:':edit/:id',component:ShoppingEditComponent}
    ]}
]
 
@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})
export class AppRoutingModule{

}