import { winnersRequests } from '@/src/api/requests/winners.ts';

import I from '../types.ts';

const getWinners: I['getWinners'] = async function () {
    try {
        const winnersData = await winnersRequests.getList();
        await this.asyncSetState({ winnersData });
    } catch (e) {}
};

export default getWinners;
