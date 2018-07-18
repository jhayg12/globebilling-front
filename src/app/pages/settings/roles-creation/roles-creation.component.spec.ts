import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RolesCreationComponent } from './roles-creation.component';

describe('RolesCreationComponent', () => {
  let component: RolesCreationComponent;
  let fixture: ComponentFixture<RolesCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RolesCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RolesCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
