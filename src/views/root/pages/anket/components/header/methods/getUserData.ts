import Phone from '@/src/services/phone/Phone.service.ts';

import I from '../types.ts';

const getUserData: I['getUserData'] = function () {
    const { authUser } = this.props;

    return {
        firstName: authUser.personal.firstName,
        lastName: authUser.personal.lastName,
        phone: new Phone().format(authUser.personal.phone),
        mailing: authUser.mailing ? '1' : undefined,
    };
};

export default getUserData;
