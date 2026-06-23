import { authRequests } from '@/src/api/requests/auth.ts';
import { RequestErrorT } from '@/src/utils/request.ts';

import I from '../types.ts';

const sendAgainReg: I['sendAgainReg'] = async function () {
    const { login } = this.props;

    if (!login) {
        return;
    }

    await this.asyncSetState({ loadingKey: 'again', error: undefined });

    try {
        await authRequests.registration({ login });
    } catch (e) {
        const error = e as RequestErrorT;
        await this.asyncSetState({ error: { text: error?.errorText } });
    }

    await this.asyncSetState({ loadingKey: undefined });
};

export default sendAgainReg;
