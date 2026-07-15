import { authRequests } from '@/src/api/requests/auth.ts';

import I from '../types.ts';

const requestLogout: I['requestLogout'] = async function () {
    await this.asyncSetState({ loadingKey: 'logout' });

    try {
        await authRequests.logout();
    } catch (e) {}

    await this.asyncSetState({ loadingKey: undefined });
};

export default requestLogout;
