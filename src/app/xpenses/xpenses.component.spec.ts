import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XpensesComponent } from './xpenses.component';

describe('XpensesComponent', () => {
  let component: XpensesComponent;
  let fixture: ComponentFixture<XpensesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [XpensesComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
