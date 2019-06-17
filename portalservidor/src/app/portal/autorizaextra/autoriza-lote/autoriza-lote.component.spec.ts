import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutorizaLoteComponent } from './autoriza-lote.component';

describe('AutorizaLoteComponent', () => {
  let component: AutorizaLoteComponent;
  let fixture: ComponentFixture<AutorizaLoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutorizaLoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutorizaLoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
