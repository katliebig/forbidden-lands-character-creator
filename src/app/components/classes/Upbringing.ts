import Skill from "./Skill";
import Attribute from "./Attribute";

export default class Upbringing {
    name: string;
    description: string;
    attributes: Attribute[];
    skills: Skill[];

    constructor(name: string, description: string, attributes: Attribute[], skills: Skill[]) {
        this.name = name
        this.description = description
        this.attributes = attributes
        this.skills = skills
    }
}