import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NoteslistComponent } from './noteslist.component';

describe('NoteslistComponent', () => {
  let component: NoteslistComponent;
  let fixture: ComponentFixture<NoteslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteslistComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NoteslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
