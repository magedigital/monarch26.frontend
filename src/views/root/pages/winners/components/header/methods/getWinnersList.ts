import I from '../types.ts';

const getWinnersList: I['getWinnersList'] = function () {
    const { winnersData, searchWeek, searchPhone = '' } = this.state;

    if (!winnersData) {
        return [];
    }

    const list = winnersData.winners.filter(
        (item) =>
            (searchPhone.length !== 4 ||
                item.phone.replace(/\D/gi, '').slice(-4) === searchPhone) &&
            (!searchWeek || item.raffleId === searchWeek),
    );

    return list;
};

export default getWinnersList;
