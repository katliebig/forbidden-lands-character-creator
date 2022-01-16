import Attribute from "./Attribute";

export default class Skill {
    name: string;
    value: number;
    scalesWith?: string;

    constructor(name: string, value: number, scalesWith: string) {
        this.name = name
        this.value = value
        this.scalesWith = scalesWith
    }
}