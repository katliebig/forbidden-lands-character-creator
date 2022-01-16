import { Component, OnInit, Input } from '@angular/core';
import { DiceService } from 'src/app/services/dice.service';
import Upbringing from '../classes/Upbringing';
import Character from '../classes/Character';
import Skill from '../classes/Skill';

@Component({
  selector: 'app-upbringing',
  templateUrl: './upbringing.component.html',
  styleUrls: ['./upbringing.component.scss']
})
export class UpbringingComponent implements OnInit {
  @Input() character: Character = new Character

  constructor(private diceService: DiceService) { }

  ngOnInit(): void {
  }

  rollUpbringing(): void {
    this.resetUpbringingSkills()
    let result = this.diceService.roll1D6() - 1
    this.character.upbringing = this.upbringingAlderlänning[result]
    this.character.currentAttributeSum = 15
    this.character.currentSkillSum = 6
    this.updateSkills(this.character.upbringing.skills)
  }

  resetUpbringingSkills() {
    for (let characterSkill of this.character.skills) {
      for (let upbringingSkill of this.character.upbringing.skills) {
        if (characterSkill.name === upbringingSkill.name) {
          characterSkill.value -= upbringingSkill.value
        }
      }
    }
  }

  updateSkills(skills: Skill[]) {
    for (let oldSkill of this.character.skills) {
      for (let newSkill of skills) {
        if (oldSkill.name === newSkill.name) {
          oldSkill.value += newSkill.value
        }
      }
    }
  }

  upbringingAlderlänning: Upbringing[] = [
    {
      name: "Föräldralös",
      description: "Du har aldrig mött din mor eller far, aldrig haft någon familj. Sedan du var liten har du fått klara dig själv. Det har härdat dig och gjort dig stark, men känslan av rotlöshet gnager inom dig.",
      attributes: [
        {
          name: "Styrka",
          value: 3,
        },
        {
          name: "Smidighet",
          value: 5,
        },
        {
          name: "Intelligens",
          value: 3,
        },
        {
          name: "Karisma",
          value: 4,
        }
      ],
      skills: [
        {
          name: "Uthållighet",
          value: 1,
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
      attributes: [
        {
          name: "Styrka",
          value: 4,
        },
        {
          name: "Smidighet",
          value: 4,
        },
        {
          name: "Intelligens",
          value: 3,
        },
        {
          name: "Karisma",
          value: 4,
        }
      ],
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
      attributes: [
        {
          name: "Styrka",
          value: 4,
        },
        {
          name: "Smidighet",
          value: 4,
        },
        {
          name: "Intelligens",
          value: 4,
        },
        {
          name: "Karisma",
          value: 3,
        }
      ],
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
      attributes: [
        {
          name: "Styrka",
          value: 4,
        },
        {
          name: "Smidighet",
          value: 4,
        },
        {
          name: "Intelligens",
          value: 3,
        },
        {
          name: "Karisma",
          value: 4,
        }
      ],
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
      attributes: [
        {
          name: "Styrka",
          value: 5,
        },
        {
          name: "Smidighet",
          value: 3,
        },
        {
          name: "Intelligens",
          value: 3,
        },
        {
          name: "Karisma",
          value: 4,
        }
      ],
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
      attributes: [
        {
          name: "Styrka",
          value: 3,
        },
        {
          name: "Smidighet",
          value: 3,
        },
        {
          name: "Intelligens",
          value: 5,
        },
        {
          name: "Karisma",
          value: 4,
        }
      ],
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
