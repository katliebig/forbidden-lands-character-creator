import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.scss']
})
export class DiceComponent implements OnInit {
  @Input() race = ""
  @Input() profession = ""
  @Input() talent = ""
  @Input() childhood = ""
  @Input() firstDie = 0
  @Input() secondDie = 0

  constructor() { }

  ngOnInit(): void {
  }

  roll1D6(): number {
    this.firstDie = 0
    this.secondDie = Math.floor(Math.random() * 6) + 1
    return this.secondDie
  }

  roll2D6(): number {
    this.firstDie = Math.floor(Math.random() * 6) + 1
    this.secondDie = Math.floor(Math.random() * 6) + 1
    return (this.firstDie * 10) + this.secondDie
  }

  determineRace(roll: number): void {
    if (roll < 23) {
      this.race = "Alderlänning"
    } else if (roll < 32) {
      this.race = "Aslen"
    } else if (roll < 35) {
      this.race = "Eländer"
    } else if (roll < 42) {
      this.race = "Halvalv"
    } else if (roll < 45) {
      this.race = "Halvlängdsman"
    } else if (roll < 53) {
      this.race = "Svartalf"
    } else if (roll < 61) {
      this.race = "Orch"
    } else if (roll < 63) {
      this.race = "Vargfolk"
    } else if (roll < 65) {
      this.race = "Dvärg"
    } else {
      this.race = "Alv"
    }
  }

  determineProfession(roll: number): void {
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
  }

  determineTalent(roll: number): void {
    if (this.profession === "Druid") {
      if (roll < 3) {
        this.talent = "Helandets Väg"
      } else if (roll < 5) {
        this.talent = "Hamnskiftets Väg"
      } else {
        this.talent = "Synens Väg"
      }
    } else if (this.profession === "Jägare") {
      if (roll < 3) {
        this.talent = "Djurets Väg"
      } else if (roll < 5) {
        this.talent = "Pilens Väg"
      } else {
        this.talent = "Skogens Väg"
      }
    } else if (this.profession === "Krigare") {
      if (roll < 3) {
        this.talent = "Svärdets Väg"
      } else if (roll < 5) {
        this.talent = "Sköldens Väg"
      } else {
        this.talent = "Fiendens Väg"
      }
    } else if (this.profession === "Nasare") {
      if (roll < 3) {
        this.talent = "Guldets Väg"
      } else if (roll < 5) {
        this.talent = "Kappsäckens Väg"
      } else {
        this.talent = "Lögnens Väg"
      }
    } else if (this.profession === "Ryttare") {
      if (roll < 3) {
        this.talent = "Följeslagarens Väg"
      } else if (roll < 5) {
        this.talent = "Riddarens Väg"
      } else {
        this.talent = "Viddernas Väg"
      }
    } else if (this.profession === "Skald") {
      if (roll < 3) {
        this.talent = "Stämmans Väg"
      } else if (roll < 5) {
        this.talent = "Hymnens Väg"
      } else {
        this.talent = "Stridsropets Väg"
      }
    } else if (this.profession === "Tjuv") {
      if (roll < 3) {
        this.talent = "Ansiktets Väg"
      } else if (roll < 5) {
        this.talent = "Giftets Väg"
      } else {
        this.talent = "Mördarens Väg"
      }
    } else if (this.profession === "Magiker") {
      let d8 = Math.floor(Math.random() * 8) + 1
      this.secondDie = d8
      if (d8 < 3) {
        this.talent = "Tecknets Väg"
      } else if (d8 < 5) {
        this.talent = "Stenens Väg"
      } else if (d8 < 7) {
        this.talent = "Blodets Väg"
      } else {
        this.talent = "Dödens Väg"
      }
    }
  }

  rollRace(): void {
    let result = this.roll2D6()
    this.determineRace(result)
  }

  rollProfession(): void {
    let result = this.roll2D6()
    this.determineProfession(result)
    this.talent = ""
  }

  rollTalent(): void {
    if (this.profession === "") {
      alert("You need to roll a profession first.")
    }
    let result = this.roll1D6()
    this.determineTalent(result)
  }

  rollChildhood(): void {
    let result = this.roll1D6() - 1
    this.childhood = this.childhoodAlderlänning[result].name
  }

  childhoodAlderlänning = [
    {
      name: "Föräldralös",
      description: "Du har aldrig mött din mor eller far, aldrig haft någon familj. Sedan du var liten har du fått klara dig själv. Det har härdat dig och gjort dig stark, men känslan av rotlöshet gnager inom dig.",
      attributes: {
        strength: 3,
        agility: 5,
        wits: 3,
        empathy: 4
      },
      skills: [
        {
          name: "Uthållighet",
          value: 1
        },
        {
          name: "Närkamp",
          value: 1
        },
        {
          name: "Speja",
          value: 1
        },
        {
          name: "Fingerfärdighet",
          value: 1
        },
        {
          name: "Överlevnad",
          value: 1
        },
        {
          name: "Genomskåda",
          value: 1
        },
      ]
    },
    {
      name: "Herde",
      description: "Du lärde dig som ung att kreatur är förutsättningen för liv. Som lärling vandrade du på Det glömda landets slätter, medan du vaktade din flock. Om nätterna sov du under stjärnhimlen och drömde om äventyr.",
      attributes: {
        strength: 4,
        agility: 4,
        wits: 3,
        empathy: 4
      },
      skills: [
        {
          name: "Styrkeprov",
          value: 1
        },
        {
          name: "Hantverk",
          value: 1
        },
        {
          name: "Speja",
          value: 2
        },
        {
          name: "Djurhantering",
          value: 2
        }
      ]
    },
    {
      name: "Vandrare",
      description: "Du och din familj rörde er från by till by och levde av enklare arbeten. Du hade aldrig något riktigt hem, varje dag var ett nytt äventyr. Du lärde dig vikten av att hålla ihop och hur man lever av landet.",
      attributes: {
        strength: 4,
        agility: 4,
        wits: 4,
        empathy: 3
      },
      skills: [
        {
          name: "Uthållighet",
          value: 1
        },
        {
          name: "Närkamp",
          value: 1
        },
        {
          name: "Speja",
          value: 1
        },
        {
          name: "Överlevnad",
          value: 2
        },
        {
          name: "Genomskåda",
          value: 1
        },
      ]
    },
    {
      name: "Väpnare",
      description: "Du tjänade en stolt krigare. Bar hennes vapen och utrustning, skötte hennes häst och lärde dig allt du kan. Du drömde om att en gång själv skapa dig ett namn i Det glömda landet, att en dag vara din egen.",
      attributes: {
        strength: 4,
        agility: 4,
        wits: 3,
        empathy: 4
      },
      skills: [
        {
          name: "Uthållighet",
          value: 1
        },
        {
          name: "Närkamp",
          value: 2
        },
        {
          name: "Skytte",
          value: 1
        },
        {
          name: "Rörlighet",
          value: 1
        },
        {
          name: "Läkekonst",
          value: 1
        },
      ]
    },
    {
      name: "Dräng/Piga",
      description: "Du arbetade på en bondgård med enkla men tunga sysslor. Du kan allt om spannmål, kreatur och grödor. Men innerst inne längtade du efter något annat.",
      attributes: {
        strength: 5,
        agility: 3,
        wits: 3,
        empathy: 4
      },
      skills: [
        {
          name: "Styrkeprov",
          value: 2
        },
        {
          name: "Närkamp",
          value: 1
        },
        {
          name: "Hantverk",
          value: 1
        },
        {
          name: "Överlevnad",
          value: 1
        },
        {
          name: "Djurhantering",
          value: 1
        },
      ]
    },
    {
      name: "Hårda studier",
      description: "En lärd man eller kvinna tog dig under sina vingars beskydd och satte dig att studera de äldre skrifterna. Dagarna var långa, studierna var tunga, men till slut fann du att kunskap är nyckeln till hela världen.",
      attributes: {
        strength: 3,
        agility: 3,
        wits: 5,
        empathy: 4
      },
      skills: [
        {
          name: "Hantverk",
          value: 1
        },
        {
          name: "Bildning",
          value: 3
        },
        {
          name: "Genomskåda",
          value: 1
        },
        {
          name: "Manipulera",
          value: 1
        },
      ]
    }
  ]

}
