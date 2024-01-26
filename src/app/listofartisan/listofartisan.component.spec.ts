import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListofartisanComponent } from './listofartisan.component';

describe('ListofartisanComponent', () => {
  let component: ListofartisanComponent;
  let fixture: ComponentFixture<ListofartisanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListofartisanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListofartisanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
