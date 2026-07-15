import UserT from '@/src/api/entities/User';
import DefaultI from '@/src/components/default/types';

import { ProfilePrizeT } from '../../types';

type PropsT = {
    prize: ProfilePrizeT;
    user: UserT;
};

type StateT = {
    isPromoShow?: boolean;
    isPromoForceShow?: boolean;
};

interface PrizeI extends DefaultI<PropsT, StateT> {
    promoHandler(this: PrizeI, isShow?: boolean): Promise<void>;

    renderHead(this: PrizeI): React.ReactNode;
    renderPreview(this: PrizeI): React.ReactNode;
    renderFoot(this: PrizeI): React.ReactNode;

    renderMain(this: PrizeI): React.ReactNode;
    renderPromo(this: PrizeI): React.ReactNode;
}

export default PrizeI;
