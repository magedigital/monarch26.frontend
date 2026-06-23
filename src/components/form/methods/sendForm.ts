import { RequestErrorT } from '@/src/utils/request.ts';

import I from '../types.ts';

const sendForm: I['sendForm'] = async function () {
    const { form } = this.state;
    const { disabled } = this.props;

    if (disabled) {
        return;
    }

    if (!form) {
        return;
    }

    const { request } = this.props;

    await this.asyncSetState({ loadingKey: 'send', error: undefined });

    try {
        await request(form);
    } catch (e) {
        const error = e as RequestErrorT;
        await this.asyncSetState({ error: { text: error?.errorText } });
    }

    await this.asyncSetState({ loadingKey: undefined });
};

export default sendForm;
