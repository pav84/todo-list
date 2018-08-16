import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  info: string = "";

  elements: string[];

  ngOnInit() {
    this.elements = ["Apple", "Strawberry"];
  }

  onSubmit(elements: string[]) {
    this.info = this.elements.join(", ");
  }
}
