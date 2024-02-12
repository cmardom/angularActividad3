import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainUsuariosComponent } from './mainUsuarios.component';

describe('MainComponent', () => {
  let component: MainUsuariosComponent;
  let fixture: ComponentFixture<MainUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainUsuariosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
