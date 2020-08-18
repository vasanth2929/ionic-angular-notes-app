import { Component, OnInit, OnDestroy } from '@angular/core';
import { Note } from 'src/app/models/NoteModel';
import { NoteService } from 'src/app/services/note.service';
import { Subscription } from 'rxjs';
import { AlertController, ToastController } from '@ionic/angular';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-noteslist',
  templateUrl: './noteslist.component.html',
  styleUrls: ['./noteslist.component.scss'],
})
export class NoteslistComponent implements OnInit, OnDestroy {
  notes: Array<Note> = [];
  noteSubscription: Subscription;
  constructor(private noteService: NoteService, private alertController: AlertController, private toastController: ToastController) { }

  ngOnInit() {
    this.noteSubscription = this.noteService.getNotes().subscribe(data => {
      this.notes = data;
    })
  }

  async remove(index: number) {
    const alert = await this.alertController.create({
      header: 'Are you sure do you want to delete this ?',
      message: 'This is will be irreverible change.',
      buttons: [
        {
          text: 'No',
          handler: () => console.log("No")
        },
        {
          text: 'Yes',
          handler: async () => {
            this.noteService.remove(index);
            const toast = await this.toastController.create({
              duration: 2000,
              message: 'Successfully deleted.'
            });
            await toast.present();
          }
        }
      ]
    })
    await alert.present();
  }

  ngOnDestroy() {
    this.noteSubscription.unsubscribe();
  }

}
