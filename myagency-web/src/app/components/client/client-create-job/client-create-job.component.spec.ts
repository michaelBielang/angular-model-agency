import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientCreateJobComponent } from './client-create-job.component';

describe('ClientCreateJobComponent', () => {
  let component: ClientCreateJobComponent;
  let fixture: ComponentFixture<ClientCreateJobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientCreateJobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientCreateJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
