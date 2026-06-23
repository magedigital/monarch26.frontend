import { FooterContentT, HeaderContentT } from '@/src/api/requests/content';
import PageI from '@/src/components/page/types';
import { StoreT } from '@/src/store/store';

type PropsT = {
    mainContent: StoreT['mainContent'];
};

type StateT = {};

type MainContentT = {
    components: {
        header: HeaderContentT;
        footer: FooterContentT;
        app: {
            qr: {
                thumb: string;
                url: string;
            };
        };
        anounce: {
            slogan: {
                title: string;
                description: string;
            };
            button: {
                title: string;
            };
            carousel: {
                title: string;
                thumbs: string[];
                thumbsExtra: string[][];
            };
        };
        howto: {
            steps: {
                description: string;
                thumb: string;
                title: string;
            }[];
        };
        contestWinners?: {
            contest: string;
            description: string;
            title: string;
        }[];
        partners: {
            header: {
                title: {
                    title: string;
                };
            };
            items: {
                title: string;
                url: string;
                thumb: string;
                goal?: string;
            }[];
        };
        prizesCommon: {
            items: {
                title: string;
                description: string;
                thumb: string;
                subtitle: string;
            }[];
        };
        prizes: {
            instant: {
                items: PrizeT[];
            };
            merch: {
                items: PrizeT[];
            };
            weekly: {
                items: PrizeT[];
            };
            main: {
                items: PrizeT[];
            };
        };
    };
};

type PrizeT = {
    title: string;
    description: string;
    thumb: string;
    price?: string;
    thumbsExtra?: [string, string][];
};

interface IndexI extends PageI<PropsT, StateT> {}

export default IndexI;
export type { MainContentT, PrizeT };
