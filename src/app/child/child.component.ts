import { Component, EventEmitter, OnInit } from '@angular/core';
import { Input, Output } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  // Input is used to get value from Parent 
  @Input() xInChild: number = 0;
  // Output is used to emit value to Parent
  @Output() emitMessage = new EventEmitter();

  // This function will emit the value of 15 to the Parent
  SendYToParent(){
      this.emitMessage.emit(15)
  }

}
