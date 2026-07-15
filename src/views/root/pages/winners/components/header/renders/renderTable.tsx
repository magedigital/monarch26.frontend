import React from 'react';

import Button from '@/src/components/button/Button.tsx';
import Table from '@/src/components/table/Table.tsx';

import I from '../types.ts';

import { winnerTableCols } from '../static/table.ts';

const renderTable: I['renderTable'] = function () {
    const { limit, searchPhone, searchWeek } = this.state;
    const allWinners = this.getWinnersList();
    const hasMore = allWinners.length > limit;
    const winners = allWinners.filter((w, i) => i < limit);

    return (
        <div className="winners__table">
            <div className="winners__tableInner">
                <Table
                    name="winners"
                    rows={winners}
                    cols={winnerTableCols}
                    render={this.renderTableCol.bind(this)}
                    isMobRows={true}
                    emptyId={searchPhone?.length === 4 ? 'phone' : searchWeek || 'empty'}
                    renderEmpty={this.renderTableEmpty.bind(this)}
                />
            </div>
            {hasMore && (
                <div className="winners__tableButton">
                    <Button
                        className="_whiteColor _boldBorder"
                        onClick={() => {
                            this.setState({ limit: limit + this.step });
                        }}
                    >
                        показать ещё
                    </Button>
                </div>
            )}
        </div>
    );
};

export default renderTable;
