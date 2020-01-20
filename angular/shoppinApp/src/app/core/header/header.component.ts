import { Component } from '@angular/core';
import { DataStorageService } from '../../shared/data-storage.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  constructor(private dataStoreService:DataStorageService,private authService:AuthService){

  }
 // authValid = this.authService.isAuthenticated();
  
  onSaveData(){
    this.dataStoreService.storeRecipes().subscribe(
      (response)=>{
        console.log(response);
      },
      (errors)=>console.log(errors)
    )
  }
 
  onFetchData(){
    this.dataStoreService.getRecipe()
  }

  onLogOut(){
    this.authService.logOut();
  }

}
