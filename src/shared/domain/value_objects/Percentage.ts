
export default class Percentage {
    private _value: string;

    constructor (value: string) {
        this.ward(value);
        this._value = value;
    }

    value() {
        return this._value;
    }

    private ward(value: string) {
        // TODO: Valudate if the sent value is a valid
        // Si es un número entre cero y 100
    }
}
