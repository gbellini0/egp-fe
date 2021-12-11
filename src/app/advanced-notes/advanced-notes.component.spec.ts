import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedNotesComponent } from './advanced-notes.component';

describe('AdvancedNotesComponent', () => {
  let component: AdvancedNotesComponent;
  let fixture: ComponentFixture<AdvancedNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvancedNotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
