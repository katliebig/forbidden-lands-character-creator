import { Component, OnInit } from '@angular/core';
import { DiceService } from 'src/app/services/dice.service';
import Upbringing from '../classes/Upbringing';

@Component({
  selector: 'app-upbringing',
  templateUrl: './upbringing.component.html',
  styleUrls: ['./upbringing.component.scss']
})
export class UpbringingComponent implements OnInit {
  upbringing: Upbringing = {
    name: "",
      description: "",
      attributes: [
        {
          name: "Styrka",
          value: 0,
        },
        {
          name: "Smidighet",
          value: 0,
        },
        {
          name: "Intelligens",
          value: 0,
        },
        {
          name: "Karisma",
          value: 0,
        }
      ], 
      skills: []
  }

  constructor(private diceService: DiceService) { }

  ngOnInit(): void {
  }

  rollUpbringing(): void {
    let result = this.diceService.roll1D6() - 1
    this.upbringing = this.upbringingAlderlänning[result]
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
