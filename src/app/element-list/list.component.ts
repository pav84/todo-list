import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input() elements: string[];
  @Output() submit: EventEmitter<string[]> = new EventEmitter();

  warning: string = "";

  constructor() {
  }

  submitList() {
    this.submit.emit(this.elements);
  }

  onRemoveElement(element: string) {
    this.warning = "";
    this.elements.splice(this.elements.indexOf(element), 1);
  }

  onAddElement(element: string) {
    this.warning = "";
    if (this.elements.find(el => el == element)) {
      this.warning = "Item already on the list";
      return;
    }
    this.elements.push(element);
  }
}
