import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopmentcomponentComponent } from './developmentcomponent.component';

describe('DevelopmentcomponentComponent', () => {
  let component: DevelopmentcomponentComponent;
  let fixture: ComponentFixture<DevelopmentcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevelopmentcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevelopmentcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
