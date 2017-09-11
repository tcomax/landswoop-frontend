import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCommissionsComponent } from './list-commissions.component';

describe('ListOrdersComponent', () => {
  let component: ListCommissionsComponent;
  let fixture: ComponentFixture<ListCommissionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListCommissionsComponent],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCommissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
