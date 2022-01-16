import { Component, Input, OnInit } from '@angular/core';
import Skill from '../classes/Skill';
import Character from '../classes/Character';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  @Input() character: Character = new Character


  constructor() { }

  ngOnInit(): void {
  }

  decreaseSkill(skill: Skill) {
    if (skill.value > 0) {
      skill.value -= 1
      this.character.currentSkillSum -= 1
    }
  }

  increaseSkill(skill: Skill) {
    if (skill.value < 5 && this.character.currentSkillSum < this.character.maxSkillSum) {
      skill.value += 1
      this.character.currentSkillSum += 1
    }
  }
}
