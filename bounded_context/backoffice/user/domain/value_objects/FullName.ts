
export default class FullName {
    private _value: string;

    constructor (value: string) {
        this.validate(value);
        this._value = value;
    }

    value() {
        return this._value;
    }

    private validate(value: string) {
        if (!value) throw new Error('Full name can\'t be null.');
    }
}
