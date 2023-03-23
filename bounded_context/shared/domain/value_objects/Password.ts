
export default class Password {
    private _value: string;

    constructor (value: string) {
        this.validate(value);
        this._value = value;
    }

    value() {
        return this._value;
    }

    private validate(value: string) {
        if (value.length < 8) throw new Error('Invalid password');
    }
}
