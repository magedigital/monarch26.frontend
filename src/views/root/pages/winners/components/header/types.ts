import { WinnerT, WinnersDataT } from '@/src/api/requests/winners';
import DefaultI from '@/src/components/default/types';
import { TableRenderEmptyT, TableRenderRowT } from '@/src/components/table/types';

import { winnerTableCols } from './static/table';

type PropsT = {};

type StateT = {
    searchWeek?: string;
    searchPhone?: string;
    winnersData?: WinnersDataT;
    limit: number;
};

interface HeaderI extends DefaultI<PropsT, StateT> {
    step: number;

    setWeek(this: HeaderI, id: string): Promise<void>;
    setPhone(this: HeaderI, id: string): Promise<void>;

    getWinners(this: HeaderI): Promise<void>;
    getWinnersList(this: HeaderI): WinnerT[];

    renderTableCol: TableRenderRowT<WinnerT, keyof typeof winnerTableCols>;
    renderTableEmpty: TableRenderEmptyT;

    renderHead(this: HeaderI): React.ReactNode;
    renderBar(this: HeaderI): React.ReactNode;
    renderTable(this: HeaderI): React.ReactNode;
}

export default HeaderI;
