
export default class StockTotal {
    private _value: number;

    constructor (value: number = 0) {
        this.ward(value);
        this._value = value;
    }

    value() {
        return this._value;
    }

    private ward(value: number) {
        if (value < 0) throw new Error('Stock can\'t be less than 0');
    }
}
