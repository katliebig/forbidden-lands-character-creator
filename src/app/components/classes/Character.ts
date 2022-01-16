import Skill from "./Skill"
import Attribute from "./Attribute"
import Upbringing from "./Upbringing"
import Event from "./Event"
import Talent from "./Talent"
import Kin from "./Kin"

export default class Character {
  kin: Kin = new Kin()
  profession: string = ""
  professionalTalent: Talent = new Talent("")
  skills: Skill[] = [
    {
      name: "Styrkeprov",
      value: 0,
      scalesWith: "Styrka"
    },
    {
      name: "Uthållighet",
      value: 0,
      scalesWith: "Styrka"
    },
    {
      name: "Närkamp",
      value: 0,
      scalesWith: "Styrka"
    },
    {
      name: "Hantverk",
      value: 0,
      scalesWith: "Styrka"
    },
    {
      name: "Smyga",
      value: 0,
      scalesWith: "Smidighet"
    },
    {
      name: "Fingerfärdighet",
      value: 0,
      scalesWith: "Smidighet"
    },
    {
      name: "Rörlighet",
      value: 0,
      scalesWith: "Smidighet"
    },
    {
      name: "Skytte",
      value: 0,
      scalesWith: "Smidighet"
    },
    {
      name: "Speja",
      value: 0,
      scalesWith: "Intelligens"
    },
    {
      name: "Bildning",
      value: 0,
      scalesWith: "Intelligens"
    },
    {
      name: "Överlevnad",
      value: 0,
      scalesWith: "Intelligens"
    },
    {
      name: "Genomskåda",
      value: 0,
      scalesWith: "Intelligens"
    },
    {
      name: "Manipulera",
      value: 0,
      scalesWith: "Karisma"
    },
    {
      name: "Skaldekonst",
      value: 0,
      scalesWith: "Karisma"
    },
    {
      name: "Läkekonst",
      value: 0,
      scalesWith: "Karisma"
    },
    {
      name: "Djurhantering",
      value: 0,
      scalesWith: "Karisma"
    }
  ]
  attributes: Attribute[] = []
  upbringing: Upbringing = new Upbringing
  talents: Talent[] = []
  events: Event[] = []
  eventCredits: number = 1
  maxAttributeSum: number = 15
  currentAttributeSum: number = 0
  maxSkillSum: number = 6
  currentSkillSum: number = 0
}