
export default class BillID {
    private _value: string;

    constructor (value: string = null) {
        this.ward(value);
        this._value = value;
    }

    value() {
        return this._value;
    }

    private ward(value: string) {
    }
}
