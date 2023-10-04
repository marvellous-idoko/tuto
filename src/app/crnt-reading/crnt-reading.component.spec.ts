import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrntReadingComponent } from './crnt-reading.component';

describe('CrntReadingComponent', () => {
  let component: CrntReadingComponent;
  let fixture: ComponentFixture<CrntReadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrntReadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrntReadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
