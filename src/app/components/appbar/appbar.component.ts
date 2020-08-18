import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-appbar',
  templateUrl: './appbar.component.html',
  styleUrls: ['./appbar.component.scss'],
})
export class AppbarComponent implements OnInit {
  @Input('title') title : string = '';
  
  constructor() { }

  ngOnInit() {}
  

}
