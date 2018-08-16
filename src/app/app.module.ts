import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {ListItemAddComponent} from "./element-list/element-list-add/list-item-add.component";
import {ListItemComponent} from "./element-list/element-list-item/list-item.component";
import {ListComponent} from "./element-list/list.component";

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ListItemComponent,
    ListItemAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
