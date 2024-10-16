import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainHeaderSearchComponent } from './main-header-search.component';

describe('MainHeaderSearchComponent', () => {
  let component: MainHeaderSearchComponent;
  let fixture: ComponentFixture<MainHeaderSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainHeaderSearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainHeaderSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
