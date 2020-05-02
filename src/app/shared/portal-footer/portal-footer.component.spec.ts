import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalFooterComponent } from './portal-footer.component';
import { SharedMaterialModule } from '../shared-material.module';
import { By } from '@angular/platform-browser';

describe('PortalFooterComponent', () => {
  let component: PortalFooterComponent;
  let fixture: ComponentFixture<PortalFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ SharedMaterialModule ],
      declarations: [ PortalFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortalFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should contain pinki in the footer toolbar', () => {
    const footerText = "Pinki";
    const component = fixture.debugElement.componentInstance;
    expect(component.name).toContain(footerText);
  });

});

