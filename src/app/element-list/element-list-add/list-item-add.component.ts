import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-list-item-add',
  templateUrl: './list-item-add.component.html',
  styleUrls: ['./list-item-add.component.css']
})
export class ListItemAddComponent {
  element: string = "";

  @Output() add: EventEmitter<string> = new EventEmitter();
  inputVisibility: boolean = false;

  addElement() {
    if (this.element == "") {
      return;
    }
    this.add.emit(this.element);
    this.element = "";
  }

  toggleInputVisibility() {
    this.inputVisibility = !this.inputVisibility;
  }
}
