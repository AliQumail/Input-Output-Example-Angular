import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})

export class ParentComponent {
 
  // We will send x to the child component to display 
  x = 10; 

  // The child component will send the updated value which we will bind to X
  messageFromChild(y: any){
    this.x = y;
  }
}
