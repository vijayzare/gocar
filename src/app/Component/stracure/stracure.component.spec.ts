import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StracureComponent } from './stracure.component';

describe('StracureComponent', () => {
  let component: StracureComponent;
  let fixture: ComponentFixture<StracureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StracureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StracureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
