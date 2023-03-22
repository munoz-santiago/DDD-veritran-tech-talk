
export default class ProductName {
    private _value: string;

    constructor (value: string) {
        this.ward(value);
        this._value = value;
    }

    value() {
        return this._value;
    }

    private ward(value: string) {
        if (!value) throw new Error('Product name can\'t be null.');
    }
}
