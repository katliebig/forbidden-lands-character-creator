export default class Talent {
    name: string = "";
    description?: string = "";
    value: number = 0;

    constructor(name: string) {
        this.name = name
        this.value = 1
    }
}