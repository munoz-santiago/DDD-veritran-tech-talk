import Email from bounded_contextsshared/domain/value_objects/Email';
import FullName from './value_objects/FullName';

interface Props {
    email: Email;
    fullName: FullName;
}

export default class User {
    private _email: Email;
    private _fullName: FullName;

    constructor({ email, fullName }: Props) {
        this._email = email;
        this._fullName = fullName;
    }

    email() {
        return this._email;
    }

    fullName() {
        return this._fullName;
    }
}
