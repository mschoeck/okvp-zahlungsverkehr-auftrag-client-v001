import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuftragDetailComponent } from './auftrag-detail.component';

describe('AuftragDetailComponent', () => {
  let component: AuftragDetailComponent;
  let fixture: ComponentFixture<AuftragDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuftragDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuftragDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
