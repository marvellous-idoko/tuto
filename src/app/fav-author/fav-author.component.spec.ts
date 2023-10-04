import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavAuthorComponent } from './fav-author.component';

describe('FavAuthorComponent', () => {
  let component: FavAuthorComponent;
  let fixture: ComponentFixture<FavAuthorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavAuthorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
