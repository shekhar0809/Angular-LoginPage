import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AskCityComponent } from './ask-city.component';

describe('AskCityComponent', () => {
  let component: AskCityComponent;
  let fixture: ComponentFixture<AskCityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AskCityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AskCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
