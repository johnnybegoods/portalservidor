import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutorizaextraComponent } from './autorizaextra.component';

describe('AutorizaextraComponent', () => {
  let component: AutorizaextraComponent;
  let fixture: ComponentFixture<AutorizaextraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutorizaextraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutorizaextraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
