import { v4 as uuidv4, validate } from 'uuid';

class EntityId {
    private _value: string;

    constructor (value: string = null) {
        this._value = value || uuidv4();
        this.validate(this._value);
    }

    value() {
        return this._value;
    }

    private validate(value: string) {
        if (!validate(value)) 
            throw new Error('Invalid uuid.');
    }
}

export default EntityId;