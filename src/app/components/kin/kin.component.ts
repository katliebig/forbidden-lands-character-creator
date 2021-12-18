import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DiceService } from 'src/app/services/dice.service';

@Component({
  selector: 'app-kin',
  templateUrl: './kin.component.html',
  styleUrls: ['./kin.component.scss']
})
export class KinComponent implements OnInit {
  kin: string = ""
  constructor(private diceService: DiceService) { }

  ngOnInit(): void {
  }

  rollKin(): void {
    let roll = this.diceService.roll2D6()
    if (roll < 23) {
      this.kin = "Alderlänning"
    } else if (roll < 32) {
      this.kin = "Aslen"
    } else if (roll < 35) {
      this.kin = "Eländer"
    } else if (roll < 42) {
      this.kin = "Halvalv"
    } else if (roll < 45) {
      this.kin = "Halvlängdsman"
    } else if (roll < 53) {
      this.kin = "Svartalf"
    } else if (roll < 61) {
      this.kin = "Orch"
    } else if (roll < 63) {
      this.kin = "Vargfolk"
    } else if (roll < 65) {
      this.kin = "Dvärg"
    } else {
      this.kin = "Alv"
    }
  }
}
