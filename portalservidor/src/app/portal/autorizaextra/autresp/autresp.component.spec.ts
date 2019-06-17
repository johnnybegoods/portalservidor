import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutrespComponent } from './autresp.component';

describe('AutrespComponent', () => {
  let component: AutrespComponent;
  let fixture: ComponentFixture<AutrespComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutrespComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutrespComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
