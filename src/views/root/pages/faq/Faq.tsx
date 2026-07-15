import React from 'react';

import { getLocalContent } from '@/src/api/requests/content.ts';
import Page from '@/src/components/page/Page.tsx';

import Form from './components/form/Form.tsx';
import Header from './components/header/Header.tsx';

import getContent from './methods/getContent.ts';
import pageInit from './methods/pageInit.ts';

import FaqI from './types.ts';

class Faq extends Page<FaqI['props'], FaqI['state']> implements FaqI {
    parent: FaqI['parent'];

    constructor(props: FaqI['props']) {
        super(props);
        this.state = {
            isInit: !!getLocalContent('faq'),
            content: getLocalContent('faq'),
        };

        this.parent = React.createRef();
    }

    pageName = 'faq';
    mode = 'inner' as const;

    getContent = getContent;
    pageInit = pageInit;

    render() {
        const { content, isPopupShow } = this.state;
        const { is5ka } = this.props;

        return this.renderPage({
            render: () =>
                content ? (
                    <>
                        <Header is5ka={is5ka} content={content} />
                        <Form disabled={!!isPopupShow} />
                    </>
                ) : null,
            className: '_inner',
        });
    }
}

export default Faq;
