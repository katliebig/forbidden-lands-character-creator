import { Component, OnInit } from '@angular/core';
import Character from '../classes/Character';

@Component({
  selector: 'app-character-sheet',
  templateUrl: './character-sheet.component.html',
  styleUrls: ['./character-sheet.component.scss']
})
export class CharacterSheetComponent implements OnInit {
  character: Character = new Character

  constructor() { }

  ngOnInit(): void {
  }

}
