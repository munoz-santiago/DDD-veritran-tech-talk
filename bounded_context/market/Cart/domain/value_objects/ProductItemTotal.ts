
export default class ProductItemTotal {
    private _value: number;

    constructor (value: number) {
        this.validate(value);
        this._value = value;
    }

    value() {
        return this._value;
    }

    private validate(value: number) {
        if (value < 0) throw new Error('Product item TOTAL must be > 0')
    }
}
