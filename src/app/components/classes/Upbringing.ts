import Skill from "./Skill";
import Attribute from "./Attribute";

export default class Upbringing {
    name: string = "";
    description: string = "";
    attributes: Attribute[] = [
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
      ];
    skills: Skill[] = [];
}