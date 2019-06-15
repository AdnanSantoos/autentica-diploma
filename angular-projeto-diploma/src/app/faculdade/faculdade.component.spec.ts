import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaculdadeComponent } from './faculdade.component';

describe('FaculdadeComponent', () => {
  let component: FaculdadeComponent;
  let fixture: ComponentFixture<FaculdadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaculdadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaculdadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
