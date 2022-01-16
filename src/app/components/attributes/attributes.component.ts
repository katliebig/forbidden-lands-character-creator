import { Component, Input, OnInit } from '@angular/core';
import Attribute from '../classes/Attribute';
import Character from '../classes/Character';

@Component({
  selector: 'app-attributes',
  templateUrl: './attributes.component.html',
  styleUrls: ['./attributes.component.scss']
})
export class AttributesComponent implements OnInit {
  @Input() character: Character = new Character

  constructor() { }

  ngOnInit(): void {
    console.log(this.character)
  }

  decreaseAttribute(attribute: Attribute) {
    // this.currentAttributeSum = this.character.upbringing.attributes.map(attr => attr.value).reduce((a, b) => a + b)

    if (attribute.value > 0) {
      attribute.value -= 1
      this.character.currentAttributeSum -= 1
      this.character.eventCredits += 1
    }
  }

  increaseAttribute(attribute: Attribute) {
    if (this.character.upbringing) {
      if (attribute.value < 5 && this.character.currentAttributeSum < this.character.maxAttributeSum && this.character.eventCredits > 0) {
        attribute.value += 1
        this.character.currentAttributeSum += 1
        this.character.eventCredits -= 1
      }
    }
  }
}
