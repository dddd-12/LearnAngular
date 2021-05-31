import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloLifeCycleComponent } from './hello-life-cycle.component';

describe('HelloLifeCycleComponent', () => {
  let component: HelloLifeCycleComponent;
  let fixture: ComponentFixture<HelloLifeCycleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelloLifeCycleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloLifeCycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
