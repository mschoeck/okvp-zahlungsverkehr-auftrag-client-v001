import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuftragsfreigabeComponent } from './auftragsfreigabe.component';

describe('AuftragsfreigabeComponent', () => {
  let component: AuftragsfreigabeComponent;
  let fixture: ComponentFixture<AuftragsfreigabeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuftragsfreigabeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuftragsfreigabeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
