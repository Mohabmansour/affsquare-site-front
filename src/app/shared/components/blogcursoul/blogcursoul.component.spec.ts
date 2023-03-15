import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogcursoulComponent } from './blogcursoul.component';

describe('BlogcursoulComponent', () => {
  let component: BlogcursoulComponent;
  let fixture: ComponentFixture<BlogcursoulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogcursoulComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogcursoulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
