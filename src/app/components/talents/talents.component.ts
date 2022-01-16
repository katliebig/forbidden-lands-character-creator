import { Component, Input, OnInit } from '@angular/core';
import Character from '../classes/Character';

@Component({
  selector: 'app-talents',
  templateUrl: './talents.component.html',
  styleUrls: ['./talents.component.scss']
})
export class TalentsComponent implements OnInit {
  @Input() character: Character = new Character

  constructor() { }

  ngOnInit(): void {
  }

}
