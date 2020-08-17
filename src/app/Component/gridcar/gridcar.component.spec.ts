import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridcarComponent } from './gridcar.component';

describe('GridcarComponent', () => {
  let component: GridcarComponent;
  let fixture: ComponentFixture<GridcarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridcarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridcarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
