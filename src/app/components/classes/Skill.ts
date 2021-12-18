import Attribute from "./Attribute";

export default class Skill {
    name: string;
    value: number;
    scalesWith?: Attribute;

    constructor(name: string, value: number, scalesWith: Attribute) {
        this.name = name
        this.value = value
        this.scalesWith = scalesWith
    }
}