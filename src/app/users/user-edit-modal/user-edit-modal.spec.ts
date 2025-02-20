import { ComponentFixture, TestBed } from '@angular/core/testing'

import { UserEditModalComponent } from './user-edit-modal.component'
import { UserEditModalService } from './user-edit-modal.service'

describe('UserEditModalComponent', () => {
  let component: UserEditModalComponent
  let fixture: ComponentFixture<UserEditModalComponent>
  let service: UserEditModalService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserEditModalComponent],
      providers: [UserEditModalService]
    })
      .compileComponents()

    fixture = TestBed.createComponent(UserEditModalComponent)
    component = fixture.componentInstance
    service = TestBed.inject(UserEditModalService)
    fixture.detectChanges()
  })

  it('Component should be create', () => {
    expect(component).toBeTruthy()
  })

  it('Service should be create', () => {
    expect(service).toBeTruthy()
  })
})
