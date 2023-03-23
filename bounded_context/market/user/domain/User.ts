import Email from '@/shared/domain/value_objects/Email';
import Password from '@/shared/domain/value_objects/Password';

import FullName from './value_objects/FullName';

interface Props {
    email: Email;
    fullName: FullName;
    password: Password;
}

export default class User {
    private _email: Email;
    private _fullName: FullName;
    private _password: Password;
    
    constructor({ email, fullName, password}: Props) {
        this._email = email;
        this._fullName = fullName;
        this._password = password;
    }

    email() {
        return this._email;
    }

    fullName() {
        return this._fullName;
    }

    password() {
        return this._password;
    }

}
