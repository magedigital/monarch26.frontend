import PageI from '@/src/components/page/types';

import { QuestionT } from './components/question/types';

type PropsT = {
    is5ka?: boolean;
};

type StateT = {
    content?: FaqContentT;
};

type FaqContentT = {
    components: {
        faq: QuestionT[];
        'faq-5ka': QuestionT[];
    };
};

interface IndexI extends PageI<PropsT, StateT> {
    getContent(this: IndexI): Promise<void>;
}

export default IndexI;
export type { FaqContentT };
