import { v4 } from 'uuid';

import { chequeRequests } from '@/src/api/requests/cheque.ts';
import sendGoal from '@/src/utils/sendGoal.ts';

import I from '../types.ts';

const sendCRAGoal = (type: string) => {
    const utmSource = localStorage.getItem('2026utmSource');
    if (utmSource !== 'winbox' && utmSource !== 'advcake') {
        return;
    }
    window.advcake_data = window.advcake_data || [];
    window.advcake_data.push({
        pageType: 6,
        user: {
            email: v4(),
            type,
        },
        leadInfo: {
            id: 'e9adccc96c051de0ae5997a3bd624b36',
            leadid: '1',
            name: 'Регистрация чека',
            totalPrice: 0,
            coupon: 'NO',
        },
    });
};

const sendForm: I['sendForm'] = async function () {
    const { form } = this.state;

    if (!form) {
        return;
    }

    const { setStep, mode } = this.props;

    const formData: Record<string, string | null> = {
        fn: form.fn || null,
        fp: form.fp || null,
        fd: form.fd || null,
        sum: form.amount || null,
        day: null,
        month: null,
        hour: null,
        min: null,
        loadType: mode || null,
    };

    if (form.date) {
        const [day, month] = form.date.split('.');

        formData.day = day;
        formData.month = month;
    }

    if (form.time) {
        const [hour, min] = form.time.split(':');

        formData.hour = hour;
        formData.min = min;
    }

    Object.keys(formData).forEach((key) => {
        if (formData[key]) {
            this.formData.set(key, formData[key]);
        }
    });

    // if (checkChatbot()) {
    //     this.formData.set('interface', 'tg-bot');
    // }

    await this.asyncSetState({ loadingKey: 'send', error: undefined });

    try {
        const r = await chequeRequests.regCheque({ data: this.formData });

        const isSend = sendGoal('regCheckSuccess', true);

        if (isSend) {
            console.log('Send ym regCheckSuccess');
        }

        setStep('final');

        document.dispatchEvent(new CustomEvent('getProfileContent'));

        if (r?.isFirstCheck) {
            sendGoal('regFirstCheck', true);
        }

        sendCRAGoal(r?.isFirstCheck ? 'new' : 'old');
    } catch (e) {
        const error = e as { errorText?: string };

        await this.asyncSetState({ error: { text: error.errorText } });

        sendGoal('regCheckError', true);
    }

    await this.asyncSetState({ loadingKey: undefined });
};

export default sendForm;
