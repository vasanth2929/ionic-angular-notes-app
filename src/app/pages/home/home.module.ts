import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { AppbarComponent } from 'src/app/components/appbar/appbar.component';
import { NoteService } from 'src/app/services/note.service';
import { NoteslistComponent } from 'src/app/components/noteslist/noteslist.component';
import { AddnoteComponent } from 'src/app/components/addnote/addnote.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ReactiveFormsModule,
    ComponentsModule
  ],
  providers : [NoteService],
  declarations: [HomePage],
  entryComponents : [AppbarComponent,NoteslistComponent,AddnoteComponent]
})
export class HomePageModule {}
