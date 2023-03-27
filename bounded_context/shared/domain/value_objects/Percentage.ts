
export default class Percentage {
    private _value: number;

    constructor (value: number) {
        this.validate(value);
        this._value = value;
    }

    value() {
        return this._value;
    }

    private validate(value: number) {
        if (value < 0 || value > 100) throw new Error('Sent percentage value is not valid');
    }
}
