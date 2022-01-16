import { Component, OnInit, Input } from '@angular/core';
import { DiceService } from 'src/app/services/dice.service';
import Character from '../classes/Character';
import Talent from '../classes/Talent';

@Component({
  selector: 'app-profession',
  templateUrl: './profession.component.html',
  styleUrls: ['./profession.component.scss']
})
export class ProfessionComponent implements OnInit {
  @Input() character: Character = new Character
  
  constructor(private diceService: DiceService) { }

  ngOnInit(): void {
  }

  rollProfession(): void {
    let roll = this.diceService.roll2D6()
    if (roll < 15) {
      this.character.profession = "Druid"
    } else if (roll < 24) {
      this.character.profession = "Jägare"
    } else if (roll < 34) {
      this.character.profession = "Krigare"
    } else if (roll < 43) {
      this.character.profession = "Magiker"
    } else if (roll < 51) {
      this.character.profession = "Nasare"
    } else if (roll < 55) {
      this.character.profession = "Ryttare"
    } else if (roll < 63) {
      this.character.profession = "Skald"
    } else {
      this.character.profession = "Tjuv"
    }
    this.character.professionalTalent = new Talent("")
  }

  rollProfessionalTalent(): void {
    if (this.character.profession === "") {
      alert("You need to roll a profession first.")
    }
    let roll = this.diceService.roll1D6()
    if (this.character.profession === "Druid") {
      if (roll < 3) {
        this.character.professionalTalent = new Talent("Helandets Väg")
      } else if (roll < 5) {
        this.character.professionalTalent = new Talent("Hamnskiftets Väg")
      } else {
        this.character.professionalTalent = new Talent("Synens Väg")
      }
    } else if (this.character.profession === "Jägare") {
      if (roll < 3) {
        this.character.professionalTalent = new Talent("Djurets Väg")
      } else if (roll < 5) {
        this.character.professionalTalent = new Talent("Pilens Väg")
      } else {
        this.character.professionalTalent = new Talent("Skogens Väg")
      }
    } else if (this.character.profession === "Krigare") {
      if (roll < 3) {
        this.character.professionalTalent = new Talent("Svärdets Väg")
      } else if (roll < 5) {
        this.character.professionalTalent = new Talent("Sköldens Väg")
      } else {
        this.character.professionalTalent = new Talent("Fiendens Väg")
      }
    } else if (this.character.profession === "Nasare") {
      if (roll < 3) {
        this.character.professionalTalent = new Talent("Guldets Väg")
      } else if (roll < 5) {
        this.character.professionalTalent = new Talent("Kappsäckens Väg")
      } else {
        this.character.professionalTalent = new Talent("Lögnens Väg")
      }
    } else if (this.character.profession === "Ryttare") {
      if (roll < 3) {
        this.character.professionalTalent = new Talent("Följeslagarens Väg")
      } else if (roll < 5) {
        this.character.professionalTalent = new Talent("Riddarens Väg")
      } else {
        this.character.professionalTalent = new Talent("Viddernas Väg")
      }
    } else if (this.character.profession === "Skald") {
      if (roll < 3) {
        this.character.professionalTalent = new Talent("Stämmans Väg")
      } else if (roll < 5) {
        this.character.professionalTalent = new Talent("Hymnens Väg")
      } else {
        this.character.professionalTalent = new Talent("Stridsropets Väg")
      }
    } else if (this.character.profession === "Tjuv") {
      if (roll < 3) {
        this.character.professionalTalent = new Talent("Ansiktets Väg")
      } else if (roll < 5) {
        this.character.professionalTalent = new Talent("Giftets Väg")
      } else {
        this.character.professionalTalent = new Talent("Mördarens Väg")
      }
    } else if (this.character.profession === "Magiker") {
      let d8 = this.diceService.roll1D8()
      if (d8 < 3) {
        this.character.professionalTalent = new Talent("Tecknets Väg")
      } else if (d8 < 5) {
        this.character.professionalTalent = new Talent("Stenens Väg")
      } else if (d8 < 7) {
        this.character.professionalTalent = new Talent("Blodets Väg")
      } else {
        this.character.professionalTalent = new Talent("Dödens Väg")
      }
    }
  }

}
