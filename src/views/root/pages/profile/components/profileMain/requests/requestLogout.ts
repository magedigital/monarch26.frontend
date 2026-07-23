import { authRequests } from '@/src/api/requests/auth.ts';
import { logoutHandler } from '@/src/utils/checkAuth.ts';

import I from '../types.ts';

const requestLogout: I['requestLogout'] = async function () {
    await this.asyncSetState({ loadingKey: 'logout' });

    try {
        await authRequests.logout();
        await logoutHandler();
    } catch (e) {}

    await this.asyncSetState({ loadingKey: undefined });
};

export default requestLogout;
