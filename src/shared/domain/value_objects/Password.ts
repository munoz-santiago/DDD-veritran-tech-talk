
export default class Password {
    private _value: string;

    constructor (value: string) {
        this.ward(value);
        this._value = value;
    }

    value() {
        return this._value;
    }

    private ward(value: string) {
        if (value.length < 8) throw new Error('Invalid password');
    }
}
