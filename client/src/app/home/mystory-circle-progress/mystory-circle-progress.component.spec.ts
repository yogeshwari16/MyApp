import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MystoryCircleProgressComponent } from './mystory-circle-progress.component';

describe('MystoryCircleProgressComponent', () => {
  let component: MystoryCircleProgressComponent;
  let fixture: ComponentFixture<MystoryCircleProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MystoryCircleProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MystoryCircleProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
