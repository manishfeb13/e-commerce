import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMensFashionComponent } from './list-mens-fashion.component';

describe('ListMensFashionComponent', () => {
  let component: ListMensFashionComponent;
  let fixture: ComponentFixture<ListMensFashionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListMensFashionComponent]
    });
    fixture = TestBed.createComponent(ListMensFashionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
