import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddnoteComponent } from 'src/app/components/addnote/addnote.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  title: string = 'Notes App';

  constructor(private modalController: ModalController) {
  }

  async openAddNoteModel() {
    const modal = await this.modalController.create({
      component: AddnoteComponent
    });
    await modal.present();
  }
}
