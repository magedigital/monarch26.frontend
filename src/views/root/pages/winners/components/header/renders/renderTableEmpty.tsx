import React from 'react';

import I from '../types.ts';

const renderTableEmpty: I['renderTableEmpty'] = function (this: I, { id }) {
    if (id === 'empty') {
        return (
            <>
                <h3>Победителей пока нет</h3>
                <p>Выберите неделю</p>
            </>
        );
    }

    if (id === 'phone') {
        return (
            <>
                <h3>Победители не найдены</h3>
                <p>Попробуйте изменить критерии поиска</p>
            </>
        );
    }

    const { winnersData } = this.state;
    const raffle = (winnersData?.raffles || []).find((r) => r.id === id);

    if (raffle) {
        return (
            <>
                <h3>Победителей пока нет</h3>
                <p>Они будут объявлены {raffle.publish}</p>
            </>
        );
    }

    return (
        <>
            <h3>Победители не найдены</h3>
            <p>Попробуйте изменить критерии поиска</p>
        </>
    );
};

export default renderTableEmpty;
