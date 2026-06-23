import axios from 'axios';

import { authRequests } from '@/src/api/requests/auth.ts';
import { checkPixel } from '@/src/utils/checkPixel.ts';

import { setError } from '../../../../../../views/root/components/errors/utils/errorHandler.ts';

import I from '../types.ts';

const sendForm: I['sendForm'] = async function () {
    const { form } = this.state;
    const { setStep } = this.props;

    if (!form) {
        return;
    }

    if (!form.confirm || !form.policy) {
        setError({ text: 'Необходимо согласие', type: 'error' });
        return;
    }

    await this.asyncSetState({ loadingKey: 'send' });

    if (checkPixel() && window.utms?.includes('yabbi')) {
        try {
            await axios.get('https://bu--s350.sync.t2.ru/api/v1/postback?request=sync');
        } catch (e) {}
        try {
            await axios.get('https://9a--213.stbid.ru');
        } catch (e) {}
    }

    try {
        const response = await authRequests.registration({ login: form.login });

        await setStep('code', {
            login: form.login!,
            mailService: response.mailService,
        });
    } catch (e) {}

    await this.asyncSetState({ loadingKey: undefined });
};

export default sendForm;
