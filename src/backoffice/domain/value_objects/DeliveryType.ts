
export default class DeliveryType {
    private _value: string;

    static PREMIUM = 'PREMIUM';
    static STANDARD = 'STANDARD';

    private types = [DeliveryType.PREMIUM, DeliveryType.STANDARD];

    constructor (value: string) {
        this.ward(value);
        this._value = value;
    }

    value() {
        return this._value;
    }

    private ward(value: string) {
        if (!value) throw new Error('type can\'t be null.');
        if (!(value in this.types)) throw new Error('sent type is not a valid value.');
    }
}
