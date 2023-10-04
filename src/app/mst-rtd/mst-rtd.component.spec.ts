import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MstRtdComponent } from './mst-rtd.component';

describe('MstRtdComponent', () => {
  let component: MstRtdComponent;
  let fixture: ComponentFixture<MstRtdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MstRtdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MstRtdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
