
export default class CurrencyValue {
    private _value: number;

    constructor (value: number) {
        this.validate(value);
        this._value = value;
    }

    value() {
        return this._value;
    }

    private validate(value: number) {
        // TODO: Valudate if the sent value is a valid
    }
}
