import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ListItemComponent} from "./list-item.component";

describe('ElementListItemComponent', () => {
  let component: ListItemComponent;
  let fixture: ComponentFixture<ListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListItemComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should remove element', () => {
    fixture = TestBed.createComponent(ListItemComponent);
    component = fixture.componentInstance;

    component.remove.subscribe(next => {
      expect(next).toEqual("aaa");
    });
    component.removeElement("aaa");
  });
});
