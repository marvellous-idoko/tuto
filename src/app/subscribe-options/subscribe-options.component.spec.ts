import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribeOptionsComponent } from './subscribe-options.component';

describe('SubscribeOptionsComponent', () => {
  let component: SubscribeOptionsComponent;
  let fixture: ComponentFixture<SubscribeOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscribeOptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscribeOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
