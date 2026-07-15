import DefaultI from '@/src/components/default/types';

type PropsT = {
    disabled?: boolean;
};

type StateT = {
    isSuccess?: boolean;
    name?: string;
};

interface FormI extends DefaultI<PropsT, StateT> {
    sendForm(this: FormI, d: Partial<Record<string, string>>): Promise<void>;
}

export default FormI;
