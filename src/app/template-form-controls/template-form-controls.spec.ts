import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateFormControls } from './template-form-controls';

describe('TemplateFormControls', () => {
  let component: TemplateFormControls;
  let fixture: ComponentFixture<TemplateFormControls>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateFormControls]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateFormControls);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
