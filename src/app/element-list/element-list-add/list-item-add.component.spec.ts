import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {FormsModule} from "@angular/forms";
import {ListItemAddComponent} from "./list-item-add.component";

describe('ElementListAddComponent', () => {
  let component: ListItemAddComponent;
  let fixture: ComponentFixture<ListItemAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule
      ],
      declarations: [ ListItemAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListItemAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle visibility', () => {
    fixture = TestBed.createComponent(ListItemAddComponent);
    component = fixture.componentInstance;
    component.inputVisibility = true;
    component.toggleInputVisibility();
    expect(component.inputVisibility).toBeFalsy();
  });

  it('should not add empty element', () => {
    fixture = TestBed.createComponent(ListItemAddComponent);
    component = fixture.componentInstance;

    spyOn(component.add, 'emit');
    component.addElement();
    expect(component.add.emit).not.toHaveBeenCalled();
  });

  it('should add element', () => {
    fixture = TestBed.createComponent(ListItemAddComponent);
    component = fixture.componentInstance;

    component.element = "aaa";
    component.add.subscribe(next => {
      expect(next).toEqual("aaa");
    });
    component.addElement();
  });
});
