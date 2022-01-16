import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DiceService } from 'src/app/services/dice.service';
import Character from '../classes/Character';

@Component({
  selector: 'app-kin',
  templateUrl: './kin.component.html',
  styleUrls: ['./kin.component.scss']
})
export class KinComponent implements OnInit {
  @Input() character: Character = new Character
  // @Output() characterChange()<Event> = new EventEmitter
  constructor(private diceService: DiceService) { }

  ngOnInit(): void {
  }

  rollKin(): void {
    let roll = this.diceService.roll2D6()
    if (roll < 23) {
      this.character.kin = { name: "Alderlänning", talent: "Adaptiv" }
    } else if (roll < 32) {
      this.character.kin = { name: "Aslen", talent: "Adaptiv" }
    } else if (roll < 35) {
      this.character.kin = { name: "Eländer", talent: "Adaptiv" }
    } else if (roll < 42) {
      this.character.kin = { name: "Halvalv", talent: "Psykisk kraft" }
    } else if (roll < 45) {
      this.character.kin = { name: "Halvlängdsman", talent: "Kvickfotad" }
    } else if (roll < 53) {
      this.character.kin = { name: "Svartalf", talent: "Lömsk" }
    } else if (roll < 61) {
      this.character.kin = { name: "Orch", talent: "Stryktålig" }
    } else if (roll < 63) {
      this.character.kin = { name: "Vargfolk", talent: "Jaktsinne" }
    } else if (roll < 65) {
      this.character.kin = { name: "Dvärg", talent: "Bita ihop" }
    } else {
      this.character.kin = { name: "Alv", talent: "Inre frid" }
    }
  }
}
