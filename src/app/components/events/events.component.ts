import { Component, Input, OnInit } from '@angular/core';
import { DiceService } from 'src/app/services/dice.service';
import Character from '../classes/Character';
import Skill from '../classes/Skill';
import Event from '../classes/Event';
import Talent from '../classes/Talent';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  @Input() character: Character = new Character

  constructor(private diceService: DiceService) { }

  ngOnInit(): void {
  }

  rollEvent(initialRoll: boolean = true): void {
    if (this.character.eventCredits > 0 && this.character.events.length < 3) {
      this.character.eventCredits -= 1

      // not the first event
      if (this.character.events.length !== 0 && initialRoll) {
        this.character.maxAttributeSum -= 1
      }

      let event = this.druidEvents[this.diceService.roll1D6() - 1]
      while (this.character.events.includes(event)) {
        event = this.druidEvents[this.diceService.roll1D6() - 1]
      }
      this.character.events.push(event)
      this.updateSkills(event.skills)
      this.character.talents.push(new Talent(event.talent))
    }
  }

  rerollEvent(event: Event): void {
    this.character.events = this.character.events.filter(item => item !== event)
    this.character.eventCredits += 1
    this.updateSkills(event.skills, false)
    this.character.talents = this.character.talents.filter(talent => talent.name !== event.talent)

    this.rollEvent(false)
  }

  updateSkills(skills: Skill[], increase: boolean = true) {
    for (let oldSkill of this.character.skills) {
      for (let newSkill of skills) {
        if (oldSkill.name === newSkill.name) {
          if (increase) oldSkill.value += newSkill.value
          else oldSkill.value -= newSkill.value
        }
      }
    }
  }

  druidEvents: Event[] = [
    {
      name: "Pilgrimsresa",
      description: "Du genomförde en pilgrimsresa som tog dig genom Det glömda landet. Efter många strapatser nådde du ditt mål, men du kommer aldrig att glömma din farofyllda vandring genom landet.",
      skills: [
        {
          name: "Bildning",
          value: 1
        },
        {
          name: "Överlevnad",
          value: 1
        }
      ],
      talent: "Vandrare",
      items: "Få en stav, ryggsäck och ett vattenskinn."
    },
    {
      name: "Jagad",
      description: "Något hände som gjorde att du var tvungen att fly för ditt liv. Kanske kom du på kant med fel person, kanske blev du oskyldigt anklagad för något.",
      skills: [
        {
          name: "Närkamp",
          value: 1
        },
        {
          name: "Rörlighet",
          value: 1
        }
      ],
      talent: "Ögon i nacken",
      items: "Få T3 doser sövande gift och en dolk."
    },
    {
      name: "Oväntat fynd",
      description: "Du hittade en skatt med tecknet från din gud. Du såg det som ett tecken på att ditt värv var rättfärdigt, men andra såg det inte på samma sätt. Kanske letar någon efter skatten fortfarande?",
      skills: [
        {
          name: "Hantverk",
          value: 1
        },
        {
          name: "Överlevnad",
          value: 1
        }
      ],
      talent: "Tursam",
      items: "Slå en gång på tabellen för Värdefulla fynd i hålan. Slå om resultat under 32."
    },
    {
      name: "Studerade hos mästare",
      description: "En vis druid tog dig under sina vingar och undervisade dig. Kanske lever mästaren fortfarande någonstans, kanske blev han dödad av järngardister.",
      skills: [
        {
          name: "Bildning",
          value: 1
        },
        {
          name: "Läkekonst",
          value: 1
        }
      ],
      talent: "Vass tunga",
      items: "Få pergament, bläck och fjäder."
    },
    {
      name: "Skyddade skogen",
      description: "Du tog det som din uppgift att skydda en skog mot främlingars våld. Du levde i skydd av stolta träd, ett med skogens väsen och alltid på naturens sida.",
      skills: [
        {
          name: "Skytte",
          value: 1
        },
        {
          name: "Djurhantering",
          value: 1
        }
      ],
      talent: "Örtakännare",
      items: "Få en kortbåge med resurstärning T12 i pilar."
    },
    {
      name: "Levde som eremit",
      description: "Du sökte dig till naturens skönhet. Kanske isolerade du dig i djupet av en skog, kanske begav du dig högt upp i bergen. När du återvände var det med nyvunnen kraft.",
      skills: [
        {
          name: "Uthållighet",
          value: 1
        },
        {
          name: "Överlevnad",
          value: 1
        }
      ],
      talent: "Stigfinnare",
      items: "Få ett tält och ett fältkök."
    },
  ]
}
