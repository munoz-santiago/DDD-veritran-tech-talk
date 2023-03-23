
export default class BillID {
    private _value: string;

    constructor (value: string = null) {
        this.validate(value);
        this._value = value;
    }

    value() {
        return this._value;
    }

    private validate(value: string) {
    }
}
