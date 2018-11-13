import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuftragslisteComponent } from './auftragsliste.component';

describe('AuftragslisteComponent', () => {
  let component: AuftragslisteComponent;
  let fixture: ComponentFixture<AuftragslisteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuftragslisteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuftragslisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
