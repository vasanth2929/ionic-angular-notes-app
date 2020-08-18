import { Injectable } from '@angular/core';
import { Note } from '../models/NoteModel';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private tempData: Array<Note> = [];

  constructor() {
    this.tempData = [
      { key: 'Flutter Ui Clone Project', value: 'https://localhost:9000/essages.com' },
      { key: 'Phone Ui Clone Project', value: 'https://heroku:9000/essages.com' },
      { key: 'Files Go Ui', value: 'https://files-go:9000/essages.com' },
      { key: 'Testing Notes', value: 'https://tesyt:9000/esaeadssages.com' },
      { key: 'Instagram Clone', value: 'https://productionbuild:9000/essages.com' },
    ];
    this.notes.next(this.tempData);
  }

  private notes: BehaviorSubject<Array<Note>> = new BehaviorSubject([]);

  getNotes(): Observable<Array<Note>> {
    return this.notes.asObservable();
  }

  addNote(note: Note): void {
    this.tempData.unshift(note);
    this.notes.next(this.tempData);
  }

  remove(index: number): void {
    this.tempData = this.tempData.filter((_, i: Number) => i !== index);
    this.notes.next(this.tempData);
  }
}
