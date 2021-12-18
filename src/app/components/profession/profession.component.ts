import { Component, OnInit } from '@angular/core';
import { DiceService } from 'src/app/services/dice.service';

@Component({
  selector: 'app-profession',
  templateUrl: './profession.component.html',
  styleUrls: ['./profession.component.scss']
})
export class ProfessionComponent implements OnInit {
  profession: string = ""
  professionalTalent: string = ""

  constructor(private diceService: DiceService) { }

  ngOnInit(): void {
  }

  rollProfession(): void {
    let roll = this.diceService.roll2D6()
    if (roll < 15) {
      this.profession = "Druid"
    } else if (roll < 24) {
      this.profession = "Jägare"
    } else if (roll < 34) {
      this.profession = "Krigare"
    } else if (roll < 43) {
      this.profession = "Magiker"
    } else if (roll < 51) {
      this.profession = "Nasare"
    } else if (roll < 55) {
      this.profession = "Ryttare"
    } else if (roll < 63) {
      this.profession = "Skald"
    } else {
      this.profession = "Tjuv"
    }
    this.professionalTalent = ""
  }

  rollProfessionalTalent(): void {
    if (this.profession === "") {
      alert("You need to roll a profession first.")
    }
    let roll = this.diceService.roll1D6()
    if (this.profession === "Druid") {
      if (roll < 3) {
        this.professionalTalent = "Helandets Väg"
      } else if (roll < 5) {
        this.professionalTalent = "Hamnskiftets Väg"
      } else {
        this.professionalTalent = "Synens Väg"
      }
    } else if (this.profession === "Jägare") {
      if (roll < 3) {
        this.professionalTalent = "Djurets Väg"
      } else if (roll < 5) {
        this.professionalTalent = "Pilens Väg"
      } else {
        this.professionalTalent = "Skogens Väg"
      }
    } else if (this.profession === "Krigare") {
      if (roll < 3) {
        this.professionalTalent = "Svärdets Väg"
      } else if (roll < 5) {
        this.professionalTalent = "Sköldens Väg"
      } else {
        this.professionalTalent = "Fiendens Väg"
      }
    } else if (this.profession === "Nasare") {
      if (roll < 3) {
        this.professionalTalent = "Guldets Väg"
      } else if (roll < 5) {
        this.professionalTalent = "Kappsäckens Väg"
      } else {
        this.professionalTalent = "Lögnens Väg"
      }
    } else if (this.profession === "Ryttare") {
      if (roll < 3) {
        this.professionalTalent = "Följeslagarens Väg"
      } else if (roll < 5) {
        this.professionalTalent = "Riddarens Väg"
      } else {
        this.professionalTalent = "Viddernas Väg"
      }
    } else if (this.profession === "Skald") {
      if (roll < 3) {
        this.professionalTalent = "Stämmans Väg"
      } else if (roll < 5) {
        this.professionalTalent = "Hymnens Väg"
      } else {
        this.professionalTalent = "Stridsropets Väg"
      }
    } else if (this.profession === "Tjuv") {
      if (roll < 3) {
        this.professionalTalent = "Ansiktets Väg"
      } else if (roll < 5) {
        this.professionalTalent = "Giftets Väg"
      } else {
        this.professionalTalent = "Mördarens Väg"
      }
    } else if (this.profession === "Magiker") {
      let d8 = this.diceService.roll1D8()
      if (d8 < 3) {
        this.professionalTalent = "Tecknets Väg"
      } else if (d8 < 5) {
        this.professionalTalent = "Stenens Väg"
      } else if (d8 < 7) {
        this.professionalTalent = "Blodets Väg"
      } else {
        this.professionalTalent = "Dödens Väg"
      }
    }
  }

}
