import {async, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {ListComponent} from "./element-list/list.component";
import {ListItemComponent} from "./element-list/element-list-item/list-item.component";
import {ListItemAddComponent} from "./element-list/element-list-add/list-item-add.component";

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule
      ],
      declarations: [
        AppComponent,
        ListComponent,
        ListItemComponent,
        ListItemAddComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
