import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input('title') title: string = '';
  @Input('icon') icon: string = '';

  constructor() {}

  ngOnInit(): void {}

  click(): void {
    window.open('google.com');
  }
}
