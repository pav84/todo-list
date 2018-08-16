import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent {
  @Input() element: string;
  @Output() remove: EventEmitter<string> = new EventEmitter();

  removeElement(element: string) {
    this.remove.emit(element);
  }

}
