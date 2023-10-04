import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutComponent } from './layout.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

describe('LayoutComponent', () => {
  let component: LayoutComponent;
  let fixture: ComponentFixture<LayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
      declarations: [ LayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate', () => {
    const router = TestBed.inject(Router);
    const spyNavigate = spyOn(router, 'navigate');
    component.goTo('some-url');
    expect(spyNavigate).toHaveBeenCalled();
    expect(spyNavigate).toHaveBeenCalledWith(['some-url']);
  });

  it('should navigate to login', () => {
    const router = TestBed.inject(Router);
    const spyNavigate = spyOn(router, 'navigate');
    component.goTo('saadsd');
    expect(spyNavigate).toHaveBeenCalled();
    expect(spyNavigate).toHaveBeenCalledWith(['login']);
  });
});
