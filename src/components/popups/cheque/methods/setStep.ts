import I from '../types.ts';

const setStep: I['setStep'] = async function (this: I, s, ...otherProps) {
    await this.asyncSetState({
        currentStep: s,
        ...(Object.keys(otherProps).includes('mode') ? { mode: otherProps[0] } : {}),
    });
};

export default setStep;
