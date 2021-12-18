import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiceComponent } from './components/dice/dice.component';
import { KinComponent } from './components/kin/kin.component';
import { CharacterSheetComponent } from './components/character-sheet/character-sheet.component';
import { ProfessionComponent } from './components/profession/profession.component';
import { UpbringingComponent } from './components/upbringing/upbringing.component';
import { SkillsComponent } from './components/skills/skills.component';
import { AttributesComponent } from './components/attributes/attributes.component';

@NgModule({
  declarations: [
    AppComponent,
    DiceComponent,
    KinComponent,
    CharacterSheetComponent,
    ProfessionComponent,
    UpbringingComponent,
    SkillsComponent,
    AttributesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
