import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyLandsComponent } from './buy-lands.component';

describe('ListLandsComponent', () => {
  let component: BuyLandsComponent;
  let fixture: ComponentFixture<BuyLandsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BuyLandsComponent],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyLandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
