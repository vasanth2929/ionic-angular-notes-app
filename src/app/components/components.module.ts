import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppbarComponent } from './appbar/appbar.component';
import { NoteslistComponent } from './noteslist/noteslist.component';
import { AddnoteComponent } from './addnote/addnote.component';
import { NoteService } from '../services/note.service';



@NgModule({
  declarations: [AppbarComponent,NoteslistComponent,AddnoteComponent],
  imports: [
    CommonModule
  ],
  exports : [AppbarComponent,NoteslistComponent,AddnoteComponent],
  providers : [NoteService]
})
export class ComponentsModule { }
