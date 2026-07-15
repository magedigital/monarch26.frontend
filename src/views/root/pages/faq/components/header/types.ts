import DefaultI from '@/src/components/default/types';

import { FaqContentT } from '../../types';

type PropsT = {
    content: FaqContentT;
    is5ka?: boolean;
};

type StateT = {};

interface HeaderI extends DefaultI<PropsT, StateT> {}

export default HeaderI;
