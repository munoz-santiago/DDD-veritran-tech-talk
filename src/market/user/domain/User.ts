import Email from '@/shared/domain/value_objects/Email';
import Password from '@/shared/domain/value_objects/Password';

import FullName from './value_objects/FullName';

export default class User {
    private email: Email;
    private fullName: FullName;
    private password: Password;
}
