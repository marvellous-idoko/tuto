import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinShopComponent } from './coin-shop.component';

describe('CoinShopComponent', () => {
  let component: CoinShopComponent;
  let fixture: ComponentFixture<CoinShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoinShopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoinShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
