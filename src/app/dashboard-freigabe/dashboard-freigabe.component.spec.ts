import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardFreigabeComponent } from './dashboard-freigabe.component';

describe('DashboardFreigabeComponent', () => {
  let component: DashboardFreigabeComponent;
  let fixture: ComponentFixture<DashboardFreigabeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardFreigabeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardFreigabeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
