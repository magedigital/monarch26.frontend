import { StoreT, appStore } from '../../../store/store';

const pages = {
    index: {
        links: ['', undefined],
        isPublic: true,
    },
    profile: {
        links: ['profile'],
        check: (s: StoreT) => {
            if (
                !s.authUser ||
                s.authUser.status === 'EMAIL_CONFIRM_REQUIRED' ||
                s.authUser.status === 'EXTRA_ANKET_REQUIRED'
            ) {
                let pageName = s.showPages.find((p) => (pages[p] as PageT).isPublic);

                if (s.authUser?.status === 'EMAIL_CONFIRM_REQUIRED') {
                    pageName = 'anket';
                }

                if (s.authUser?.status === 'EXTRA_ANKET_REQUIRED') {
                    pageName = 'fullAnket';
                }

                return {
                    pageName: pageName || 'index',
                    callback: !s.authUser
                        ? () => {
                              appStore.getState().setPopup({ name: 'loginPopup' });
                          }
                        : undefined,
                };
            }
        },
    },
    'profile-codes': {
        links: ['', undefined, 'codes'],
        level: 1,
        parentName: 'profile',
    },
    'profile-cheques': {
        links: ['cheques'],
        level: 1,
        parentName: 'profile',
    },
    'profile-prizes': {
        links: ['prizes'],
        level: 1,
        parentName: 'profile',
    },
    faq: {
        links: ['faq'],
        isPublic: true,
    },
    faq5ka: {
        links: ['faq-5ka'],
        isPublic: true,
    },
    anket: {
        links: ['anket'],
    },
    fullAnket: {
        links: ['full-anket'],
    },
    anketMap: {
        links: ['anket-map'],
    },
    winners: {
        links: ['winners'],
    },
    products: {
        links: ['products'],
    },
    rules: {
        links: ['rules'],
    },
    login: {
        links: ['login'],
    },
} as const;

type PageT = {
    links: readonly (string | undefined)[];
} & Partial<{
    level: number;
    parentName: PageNamesT;
    isPopup: boolean;
    content: string;
    group: string;
    className: string;
    isPublic: boolean;
    mainPage: string | ((data: StoreT) => string);
    check: (s: StoreT) => { pageName: PageNamesT; callback?: () => void } | undefined;
    withId: boolean;
    forBot: boolean;
}>;

type PageNamesT = keyof typeof pages;

export default pages;

export type { PageT, PageNamesT };
