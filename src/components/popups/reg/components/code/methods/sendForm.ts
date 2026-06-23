import axios from 'axios';

import { authRequests } from '@/src/api/requests/auth.ts';
import { appStore } from '@/src/store/store.tsx';
import checkAuth from '@/src/utils/checkAuth.ts';
import { checkPixel } from '@/src/utils/checkPixel.ts';
import { RequestErrorT } from '@/src/utils/request.ts';

import I from '../types.ts';

const sendForm: I['sendForm'] = async function (code) {
    const { login } = this.props;

    if (!login) {
        return;
    }

    await this.asyncSetState({ loadingKey: 'send', error: undefined });

    try {
        await authRequests.login({
            login,
            password: code,
            isCode: true,
            ...(appStore.getState().authUser?.status === 'EMAIL_CONFIRM_REQUIRED'
                ? { confirmEmail: true }
                : {}),
        });

        await checkAuth({ redirect: true });

        if (checkPixel()) {
            if (window.reachGoal && window.utms?.includes('mediadesk')) {
                try {
                    window.reachGoal('Y2xpZW50SWQ9MjM3MCZjb3VudGVySWQ9MTc3MCZnb2FsSWQ9MTQzMA==');
                } catch (e) {}
            }

            if (window._tmr && window.utms?.includes('vk')) {
                try {
                    window._tmr.push({
                        type: 'reachGoal',
                        id: 3752391,
                        goal: 'Registration_ST_26',
                    });
                } catch (error) {}
            }

            if (window.utms?.includes('enter-digital')) {
                try {
                    await axios.get('https://sync.opendsp.ru/match/sp?sadd=298');
                } catch (e) {}
            }

            if (window.utms?.includes('redllama')) {
                try {
                    await axios.get('https://event-1-ad424.sync.sspnet.tech/sync');
                } catch (e) {}
            }

            if (window.utms?.includes('yabbi')) {
                try {
                    await axios.get('https://bu--s349.sync.t2.ru/api/v1/postback?request=sync');
                } catch (e) {}
                try {
                    await axios.get('https://9a--212.stbid.ru');
                } catch (e) {}
            }
        }
    } catch (e) {
        const error = e as RequestErrorT;
        await this.asyncSetState({ error: { text: error?.errorText } });
    }

    await this.asyncSetState({ loadingKey: undefined });
};

export default sendForm;
