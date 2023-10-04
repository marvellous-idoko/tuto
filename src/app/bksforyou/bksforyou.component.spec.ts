import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BksforyouComponent } from './bksforyou.component';

describe('BksforyouComponent', () => {
  let component: BksforyouComponent;
  let fixture: ComponentFixture<BksforyouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BksforyouComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BksforyouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
