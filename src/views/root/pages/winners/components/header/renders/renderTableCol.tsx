import React from 'react';

import I from '../types.ts';

const renderTableCol: I['renderTableCol'] = function ({ row, name }) {
    if (name === 'date') {
        return <>{row.publish}</>;
    }

    if (name === 'phone') {
        return <>{row.phone}</>;
    }

    if (name === 'prize') {
        return <>{row.prize}</>;
    }
};

export default renderTableCol;
