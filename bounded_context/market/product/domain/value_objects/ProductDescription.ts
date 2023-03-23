
export default class ProductDescription {
    private _value: string;

    constructor (value: string) {
        this.validate(value);
        this._value = value;
    }

    value() {
        return this._value;
    }

    private validate(value: string) { }
}
