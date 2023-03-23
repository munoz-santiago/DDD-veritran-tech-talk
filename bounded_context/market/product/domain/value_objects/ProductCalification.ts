
export default class ProductCalification {
    private _value: number;

    constructor (value: number) {
        this.validate(value);
        this._value = value;
    }

    value() {
        return this._value;
    }

    private validate(value: number) {
        if (value < 0 || value > 5) throw new Error('Product calification must be between 1 and 5.'); 
    }
}
