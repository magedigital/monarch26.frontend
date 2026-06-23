import axios from 'axios';

import { contentRequests } from '@/src/api/requests/content.ts';
import { enums } from '@/src/global/enums.ts';
import { appStore } from '@/src/store/store.tsx';
import checkAuth from '@/src/utils/checkAuth.ts';
import { checkPixel } from '@/src/utils/checkPixel.ts';
import { getCookie, setCookie } from '@/src/utils/cookies.ts';

import I from '../types.ts';

window.visibillityHandlers = {};

const init: I['init'] = async function () {
    const rootJWT = document.querySelector('#root')!.getAttribute('data-jwt');

    if (rootJWT) {
        setCookie(enums.ACCESS_TOKEN, rootJWT);
    }

    window.getJWT = () => getCookie(enums.ACCESS_TOKEN);
    window.saveJWT = (t) => setCookie(enums.ACCESS_TOKEN, t);

    window.userAuthorized = !!getCookie(enums.ACCESS_TOKEN);

    this.resizeHandler(true);

    document.body.style.setProperty('--mediaM', `${window.mediaM}px`);

    window.addEventListener('resize', () => {
        this.resizeHandler();
    });

    this.popupsHandler(true);

    document.addEventListener('mouseenter', () => {
        Object.keys(window.visibillityHandlers).forEach((k) => {
            window.visibillityHandlers[k](true);
        });
    });

    document.addEventListener('mouseleave', () => {
        Object.keys(window.visibillityHandlers).forEach((k) => {
            window.visibillityHandlers[k](false);
        });
    });

    (document.addEventListener as CustomListenerT)('changePage', this.changePageListener);

    checkAuth({});

    const content = await contentRequests.getContent({ name: 'main' });
    appStore.getState().setMainContent(content);

    if (checkPixel() && window.utms?.includes('redllama')) {
        try {
            await axios.get('https://page-1-ad424.sync.sspnet.tech/sync');
        } catch (e) {}
    }
};

export default init;
