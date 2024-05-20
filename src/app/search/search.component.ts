import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  searchValue :string = "";
  changeSerachValue(event:any){
    //console.log((<HTMLInputElement>event.target).value);    
    const data = (<HTMLInputElement>event.target).value;
    if(data.length>0){
      this.searchValue = " [ " +data + " ] ";
    }
    else{
      this.searchValue = data;
    }
  }
  
}
