import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  boxes = [];

  constructor() { }

  ngOnInit() {
  }

  /**
   * @desc This function is used to add/remove box based on action
   * @param action {String} - one of 'add' or 'remove'
   * @return {void}
   */
  operateBoxes(action) {
    if (action === 'add') {
      this.boxes.push('unused');
    } else {
      this.boxes.pop();
    }
  }
}
