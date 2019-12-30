import { Component, ViewChild, EventEmitter, Output } from "@angular/core";

@Component({
selector:"app-header",
templateUrl:"./header.component.html"
})
export class HeaderComponent {

@Output() feature = new EventEmitter<string>();
onLoader(componentPoint:string){
 this.feature.emit(componentPoint);
}

}