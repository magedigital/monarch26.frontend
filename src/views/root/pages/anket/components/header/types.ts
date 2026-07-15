import UserT from '@/src/api/entities/User';
import DefaultI from '@/src/components/default/types';

type PropsT = {
    authUser: UserT;
};

type StateT = {};

interface HeaderI extends DefaultI<PropsT, StateT> {
    getUserData(this: HeaderI): Partial<Record<string, string>>;

    sendForm(this: HeaderI, d: Partial<Record<string, string>>): Promise<void>;
}

export default HeaderI;
