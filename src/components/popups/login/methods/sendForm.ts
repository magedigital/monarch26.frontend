import axios from 'axios';

import { authRequests } from '@/src/api/requests/auth.ts';
import { enums } from '@/src/global/enums.ts';
import checkAuth from '@/src/utils/checkAuth.ts';
import { checkPixel } from '@/src/utils/checkPixel.ts';
import { getCookie } from '@/src/utils/cookies.ts';
import { RequestErrorT } from '@/src/utils/request.ts';

import I from '../types.ts';

const sendForm: I['sendForm'] = async function () {
    const { form } = this.state;

    if (!form) {
        return;
    }

    if (getCookie(enums.ACCESS_TOKEN)) {
        return;
    }

    await this.asyncSetState({ loadingKey: 'send', error: undefined });

    try {
        await authRequests.login({
            login: form.login,
            password: form.password,
        });
        await checkAuth({ redirect: true });

        if (checkPixel() && window.utms?.includes('yabbi')) {
            try {
                await axios.get('https://bu--s351.sync.t2.ru/api/v1/postback?request=sync');
            } catch (e) {}
            try {
                await axios.get('https://9a--214.stbid.ru');
            } catch (e) {}
        }
    } catch (e) {
        const error = e as RequestErrorT;

        await this.asyncSetState({ error: { text: error?.errorText } });
    }

    await this.asyncSetState({ loadingKey: undefined });
};

export default sendForm;
