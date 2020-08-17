import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingCurdComponent } from './billing-curd.component';

describe('BillingCurdComponent', () => {
  let component: BillingCurdComponent;
  let fixture: ComponentFixture<BillingCurdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillingCurdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingCurdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
