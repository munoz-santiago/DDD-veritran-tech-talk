
export default class Percentage {
    private _value: string;

    constructor (value: string) {
        this.validate(value);
        this._value = value;
    }

    value() {
        return this._value;
    }

    private validate(value: string) {
        // TODO: Valudate if the sent value is a valid
        // Si es un número entre cero y 100
    }
}
