import { contentRequests } from '@/src/api/requests/content.ts';

import I from '../types.ts';

const getContent: I['getContent'] = async function () {
    try {
        const content = await contentRequests.getContent({ name: 'faq' });

        await this.asyncSetState({ content, isInit: true });
    } catch (e) {}
};

export default getContent;
