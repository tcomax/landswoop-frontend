import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLandsComponent } from './list-lands.component';

describe('ListLandsComponent', () => {
  let component: ListLandsComponent;
  let fixture: ComponentFixture<ListLandsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListLandsComponent],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
