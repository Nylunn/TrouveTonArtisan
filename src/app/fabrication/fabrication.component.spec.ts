import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FabricationComponent } from './fabrication.component';

describe('FabricationComponent', () => {
  let component: FabricationComponent;
  let fixture: ComponentFixture<FabricationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FabricationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FabricationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
