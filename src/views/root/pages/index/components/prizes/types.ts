import DefaultI from '@/src/components/default/types';

type PropsT = {};

type StateT = {};

interface PrizesI extends DefaultI<PropsT, StateT> {
    renderCards(this: PrizesI): React.ReactNode;
}

export default PrizesI;
