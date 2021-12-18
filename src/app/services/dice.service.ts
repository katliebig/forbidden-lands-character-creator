import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DiceService {

  constructor() { }

  roll1D6(): number {
    let firstDie = 0
    let secondDie = Math.floor(Math.random() * 6) + 1
    return secondDie
  }

  roll2D6(): number {
    let firstDie = Math.floor(Math.random() * 6) + 1
    let secondDie = Math.floor(Math.random() * 6) + 1
    return (firstDie * 10) + secondDie
  }

  roll1D8(): number {
    let firstDie = 0
    let secondDie = Math.floor(Math.random() * 8) + 1
    return secondDie
  }

}
