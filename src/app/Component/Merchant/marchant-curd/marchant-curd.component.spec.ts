import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarchantCurdComponent } from './marchant-curd.component';

describe('MarchantCurdComponent', () => {
  let component: MarchantCurdComponent;
  let fixture: ComponentFixture<MarchantCurdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarchantCurdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarchantCurdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
