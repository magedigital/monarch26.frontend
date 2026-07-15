import I from '../types.ts';

const setWeek: I['setWeek'] = async function (week) {
    await this.asyncSetState({ searchWeek: week, limit: this.step });
};

export default setWeek;
