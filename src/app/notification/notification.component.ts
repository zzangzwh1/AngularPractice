import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
 template: `<div class="alert alert-success" [hidden]="displayNotification"> 
  This website uses cookies to provide bettwe user experience.
  <div class="close"><div class="btn" (click)="closeNotification()">X</div></div>
  </div>`,
 styles:["div{margin:10px 0px; padding: 10px 20px;  text-align:center;}","p{font-size:14px;}",".close{float:right; margin-top:-30px;}"]
})
export class NotificationComponent {
  displayNotification : boolean = false;

  closeNotification(){
    this.displayNotification=true;
  
  }

}

