import { faqRequests } from '@/src/api/requests/faq.ts';

import I from '../types.ts';

const sendForm: I['sendForm'] = async function (form) {
    const data: Record<string, string | undefined> = {
        notFoundQuestion: 'Y',
    };

    Object.keys(form).forEach((k) => {
        let v = form[k];

        if (k === 'agreement') {
            v = form.agreement ? 'Y' : undefined;
        }

        data[k] = v;
    });

    await faqRequests.sendForm({ data });
    await this.asyncSetState({ isSuccess: true, name: form.name });
};

export default sendForm;
