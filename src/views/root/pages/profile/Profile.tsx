import React from 'react';

import { getLocalContent } from '@/src/api/requests/content.ts';
import Page from '@/src/components/page/Page.tsx';
import { StoreT, WithStore } from '@/src/store/store.tsx';

import getContent from './methods/getContent.ts';
import pageInit from './methods/pageInit.ts';

import ProfileI from './types.ts';

import renderCheques from './renders/renderCheques.tsx';
import renderContent from './renders/renderContent.tsx';
import renderHead from './renders/renderHead.tsx';
import renderMain from './renders/renderMain.tsx';
import renderPrizes from './renders/renderPrizes.tsx';
import renderTableCol from './renders/renderTableCol.tsx';

class Profile extends Page<ProfileI['props'], ProfileI['state']> implements ProfileI {
    parent: ProfileI['parent'];

    constructor(props: ProfileI['props']) {
        super(props);

        this.state = {
            content: getLocalContent('profile'),
        };

        this.parent = React.createRef();
    }

    mode = 'inner' as const;

    pageInit = pageInit;
    getContent = getContent;

    renderContent = renderContent;
    renderHead = renderHead;
    renderMain = renderMain;
    renderCheques = renderCheques;
    renderTableCol = renderTableCol;
    renderPrizes = renderPrizes;

    render() {
        const { content } = this.state;

        return this.renderPage({
            render: () =>
                content ? (
                    <>
                        {this.renderHead()}
                        {this.renderContent()}
                    </>
                ) : null,
        });
    }
}

const mapStore = (s: StoreT) => ({
    authUser: s.authUser,
});

export default WithStore(Profile, mapStore);
