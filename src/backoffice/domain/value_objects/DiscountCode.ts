
export default class DiscountCode {
    private _value: string;

    constructor (value: string) {
        this.ward(value);
        this._value = value;
    }

    value() {
        return this._value;
    }

    private ward(value: string) {
        // TODO: Validate if is a valid value
    }
}
