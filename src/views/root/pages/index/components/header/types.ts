import DefaultI from '@/src/components/default/types';

import { MainContentT } from '../../types';

type PropsT = {
    mainContent: MainContentT;
};

type StateT = {};

interface HeaderI extends DefaultI<PropsT, StateT> {}

export default HeaderI;
