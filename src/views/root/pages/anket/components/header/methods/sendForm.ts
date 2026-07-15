import { AnketDataT, anketRequests } from '@/src/api/requests/anket.ts';
import { appStore } from '@/src/store/store.tsx';
import checkAuth from '@/src/utils/checkAuth.ts';
import sendGoal from '@/src/utils/sendGoal.ts';

import I from '../types.ts';

const sendForm: I['sendForm'] = async function (d) {
    const data: Partial<AnketDataT> = {
        firstName: d.firstName,
        lastName: d.lastName,
        thirdName: d.thirdName,
        phone: d.phone,
        agreement: !!d.agreement,
        mailing: d.mailing ? '1' : undefined,
        password1: d.password,
        password2: d.password2,
        referral: d.referral,
    };

    await anketRequests.send({ data });

    if (appStore.getState().authUser?.isFirstAnket) {
        sendGoal('regComplete', true);
    }

    await checkAuth({ redirect: true });
};

export default sendForm;
