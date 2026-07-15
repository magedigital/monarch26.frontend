import React from 'react';

import I from '../types.ts';

const renderTableCol: I['renderTableCol'] = function ({ row, name }) {
    if (name === 'date') {
        return <>{row.date}</>;
    }

    if (name === 'fd') {
        return <>{row.fd}</>;
    }

    if (name === 'status') {
        return <>{row.status}</>;
    }

    if (name === 'result') {
        return <>{row.result || '–'}</>;
    }
};

export default renderTableCol;
