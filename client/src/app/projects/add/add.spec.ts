import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectAddComponent } from './add.component';

describe('ProjectDetailsComponent', () => {
  let component: ProjectAddComponent;
  let fixture: ComponentFixture<ProjectAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
