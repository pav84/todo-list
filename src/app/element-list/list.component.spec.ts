import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FormsModule} from "@angular/forms";
import {ListComponent} from "./list.component";
import {ListItemComponent} from "./element-list-item/list-item.component";
import {ListItemAddComponent} from "./element-list-add/list-item-add.component";

describe('ElementListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule
      ],
      declarations: [
        ListComponent,
        ListItemComponent,
        ListItemAddComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add element', () => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    component.elements = ["a", "b"];

    component.onAddElement("c");
    expect(component.elements).toEqual(["a", "b", "c"]);
  });

  it('should remove element', () => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    component.elements = ["a", "b"];

    component.onRemoveElement("b");
    expect(component.elements).toEqual(["a"]);
  });

  it('should submit list', () => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    component.elements = ["a", "b"];

    component.submit.subscribe(next => {
      expect(next).toEqual(["a", "b"]);
    });
    component.submitList();
  });

  it('should set warning', () => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    component.elements = ["a", "b"];
    component.onAddElement("b");

    expect(component.warning).not.toEqual("");
  });

  it('should cleanup warning', () => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    component.elements = ["a", "b"];
    component.onAddElement("b");

    component.onRemoveElement("b");
    expect(component.warning).toEqual("");
  });
});
