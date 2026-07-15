import I from '../types.ts';

const setPhone: I['setPhone'] = async function (p) {
    const phone = p.replace(/\D/gi, '').slice(0, 4);
    let limit: number | undefined;

    if (
        phone &&
        ((phone.length === 4 && this.state.searchPhone?.length !== 4) ||
            (phone.length !== 4 && this.state.searchPhone?.length === 4))
    ) {
        limit = this.step;
    }

    await this.asyncSetState({ searchPhone: phone, ...(limit ? { limit } : {}) });
};

export default setPhone;
