import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.scss']
})
export class DiceComponent implements OnInit {
  @Input() firstDie = 0
  @Input() secondDie = 0

  constructor() { }

  ngOnInit(): void {
  }
}
