import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NoteService } from '../../services/note.service';
import { Note } from 'src/app/models/NoteModel';

@Component({
  selector: 'app-addnote',
  templateUrl: './addnote.component.html',
  styleUrls: ['./addnote.component.scss'],
})
export class AddnoteComponent {
  constructor(private modalController: ModalController, private noteService: NoteService) { }

  note: Note = {
    key: '',
    value: ''
  };

  dismiss() {
    this.modalController.dismiss();
  }

  addNote() {
    if (this.note.key.trim().length > 0 && this.note.value.trim().length > 0) {
      this.noteService.addNote(this.note);
      this.modalController.dismiss();
    }
  }

  change(event) {
    this.note[event.target.name] = event.target.value;
  }
}
