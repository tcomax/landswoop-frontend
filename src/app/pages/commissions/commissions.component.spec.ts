import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommissionsComponent } from './commissions.component';

describe('ListOrdersComponent', () => {
  let component: CommissionsComponent;
  let fixture: ComponentFixture<CommissionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CommissionsComponent],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
