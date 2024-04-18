import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostreComponentComponent } from './mostre-component.component';

describe('MostreComponentComponent', () => {
  let component: MostreComponentComponent;
  let fixture: ComponentFixture<MostreComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MostreComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MostreComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
