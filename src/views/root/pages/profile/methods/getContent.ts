import { authRequests } from '@/src/api/requests/auth.ts';
import { contentRequests, setLocalContent } from '@/src/api/requests/content.ts';

import I from '../types.ts';

const getContent: I['getContent'] = async function () {
    try {
        const data = await authRequests.getInfo();

        await this.asyncSetState({ data });
    } catch (error) {}

    try {
        const content = await contentRequests.getContent({ name: 'profile' });

        setLocalContent({ name: 'profile', data: content });

        await this.asyncSetState({ content });
    } catch (error) {}
};

export default getContent;
