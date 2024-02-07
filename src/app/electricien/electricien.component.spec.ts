import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricienComponent } from './electricien.component';

describe('ElectricienComponent', () => {
  let component: ElectricienComponent;
  let fixture: ComponentFixture<ElectricienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ElectricienComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ElectricienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
