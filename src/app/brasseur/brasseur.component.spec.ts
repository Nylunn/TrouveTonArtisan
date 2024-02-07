import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrasseurComponent } from './brasseur.component';

describe('BrasseurComponent', () => {
  let component: BrasseurComponent;
  let fixture: ComponentFixture<BrasseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BrasseurComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BrasseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
