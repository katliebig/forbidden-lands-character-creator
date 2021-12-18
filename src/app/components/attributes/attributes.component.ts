import { Component, Input, OnInit } from '@angular/core';
import Attribute from '../classes/Attribute';
import Upbringing from '../classes/Upbringing';

@Component({
  selector: 'app-attributes',
  templateUrl: './attributes.component.html',
  styleUrls: ['./attributes.component.scss']
})
export class AttributesComponent implements OnInit {
  @Input() upbringing: Upbringing | null = null
  maxAttributeSum: number = 15
  currentAttributeSum: number = 15
  // TODO: update currentAttributeSum when rolling an upbringing

  constructor() {}

  ngOnInit(): void {
  }

  decreaseAttribute(attribute: Attribute) {
    if (attribute.value > 0) {
      attribute.value -= 1
      this.currentAttributeSum -= 1
    }
  }

  increaseAttribute(attribute: Attribute) {
    if (this.upbringing) {
      // let currentAttributeSum = this.upbringing.attributes.map(attr => attr.value).reduce((a, b) => a+b)

      if (attribute.value < 5 && this.currentAttributeSum < this.maxAttributeSum) {
        attribute.value += 1
        this.currentAttributeSum += 1
      }
    }
  }


}
