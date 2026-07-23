import UserT from '@/src/api/entities/User';
import { authRequests } from '@/src/api/requests/auth';
import { enums } from '@/src/global/enums';
import { PageNamesT } from '@/src/services/router/static/pages';
import { appStore } from '@/src/store/store';

import { AppRouter } from '..';
import { deleteCookie, getCookie } from './cookies';

export const logoutHandler = async function (): Promise<void> {
    window.userAuthorized = false;
    appStore.getState().setAuthProcess(true);

    deleteCookie(enums.ACCESS_TOKEN);
    localStorage.removeItem(enums.USER);

    if (window.isBot) {
        if (window.Telegram?.WebApp) {
            window.Telegram.WebApp.close();
        }

        return;
    }

    AppRouter.changePage({ pageName: 'index' });
    appStore.getState().setPopup({ name: 'loginPopup' });

    setTimeout(async () => {
        appStore.getState().setAuthUser(undefined);
    }, 300);
};

type ParamsT = {
    redirect?: boolean;
};

export default async function checkAuth({ redirect }: ParamsT): Promise<UserT | undefined> {
    if (!getCookie(enums.ACCESS_TOKEN)) {
        if (localStorage.getItem(enums.USER)) {
            await logoutHandler();
        }

        if (localStorage.getItem('forgetEmail')) {
            // await changePage({ pageName: 'forget' });
        }

        return;
    }

    let user;

    try {
        user = (await authRequests.getUser()).user;
    } catch (e) {
        await logoutHandler();

        return;
    }

    if (!user) {
        await logoutHandler();

        return;
    }

    window.profileDataPromise = new Promise((resolve) => {
        try {
            authRequests.getInfo().then(() => {
                resolve();
            });
        } catch (e) {
            resolve();
        }
    });

    await window.profileDataPromise;

    if (user.personal.phone && user.personal.phone.length === 11) {
        user.personal.phone = user.personal.phone.slice(1);
    }

    appStore.getState().setAuthUser(user);
    window.userAuthorized = true;
    localStorage.setItem(enums.USER, JSON.stringify(user));

    let pageName: PageNamesT | undefined;
    let ids: Record<string, string> | undefined;

    if (user?.status === 'ANKET_REQUIRED') {
        pageName = 'anket';
    } else if (user?.status === 'EXTRA_ANKET_REQUIRED') {
        pageName = 'fullAnket';
    }

    if (redirect && !pageName) {
        pageName = 'profile';
    }

    if (pageName) {
        AppRouter.changePage({ pageName, ids, saveSearch: !!window.isBot });
    }

    if (!window.isBot && user?.status === 'EMAIL_CONFIRM_REQUIRED') {
        appStore.getState().setPopup({ name: 'regPopup' });
    }

    return user;
}
