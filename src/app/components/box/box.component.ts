import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {
  @Input() isNotMultipleOfFive;
  @Input() isOdd;
  @Input() value;

  constructor() { }

  ngOnInit() {
  }

  /**
   * @desc this function is used to apply styles to box based on conditions
   */
  applyBoxStyles() {
    return {
      backgroundColor: this.isOdd ? 'blue' : 'black',
      borderTop: !this.isNotMultipleOfFive ? '5px solid orange' : '5px solid white',
    };
  }

}