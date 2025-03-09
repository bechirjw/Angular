import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdetailComponent } from './rdetail.component';

describe('RdetailComponent', () => {
  let component: RdetailComponent;
  let fixture: ComponentFixture<RdetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RdetailComponent]
    });
    fixture = TestBed.createComponent(RdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
