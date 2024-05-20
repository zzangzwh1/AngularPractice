import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  products =[
    {id :1, name:'TEST1', Price:'100',available:'O'},
    {id :2, name:'TEST2', Price:'102',available:'X'},
    {id :3, name:'TEST3', Price:'103',available:'O'},
    {id :4, name:'TEST4', Price:'104',available:'X'},
    {id :5, name:'TEST5', Price:'105',available:'O'},
    {id :6, name:'TEST6', Price:'106',available:'X'},
    {id :7, name:'TEST7', Price:'107',available:'O'}
    

  ];

}
