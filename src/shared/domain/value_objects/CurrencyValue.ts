
export default class CurrencyValue {
    private _value: number;

    constructor (value: number) {
        this.ward(value);
        this._value = value;
    }

    value() {
        return this._value;
    }

    private ward(value: number) {
        // TODO: Valudate if the sent value is a valid
    }
}
