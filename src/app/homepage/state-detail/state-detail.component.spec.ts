import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateDetailComponent } from './state-detail.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { routes } from '../../core/approuting/app-routing.module';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule } from 'ngx-toastr';

describe('StateDetailComponent', () => {
  let component: StateDetailComponent;
  let fixture: ComponentFixture<StateDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,
        RouterTestingModule.withRoutes(routes),
        ToastrModule.forRoot()
      ],
      declarations: [ StateDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
