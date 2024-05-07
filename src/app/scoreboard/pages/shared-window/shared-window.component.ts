import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shared-window',
  templateUrl: './shared-window.component.html',
  styleUrls: ['./shared-window.component.css'],
})
export class SharedWindowComponent implements OnInit {
  ngOnInit(): void {
    console.log('entrando ...');
  }
}
