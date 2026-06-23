import React from 'react';

import Fade from '@/src/components/fade/Fade.tsx';
import LoaderBlock from '@/src/components/loaderBlock/LoaderBlock.tsx';
import Media from '@/src/components/media/Media.tsx';

import Menu from '../../../views/root/components/menu/Menu.tsx';
import TopBar from '../../../views/root/components/topBar/TopBar.tsx';

import I from '../types.ts';

const renderPage: I['renderPage'] = function ({ render, className, withClose = true }) {
    const { isFixBarShow, isInit, isMenuShow, isPopupShow } = this.state;

    return (
        <div
            ref={this.parent}
            className={this.getClass(
                'page',
                className,
                isInit === false && '_loading',
                isPopupShow && '_disabled',
                this.mode === 'inner' && '_inner',
            )}
        >
            <>
                <div className={this.getClass('page__topBar _fix', isFixBarShow ? '_show' : '')}>
                    <TopBar
                        mode={this.mode}
                        setMenuState={this.setMenuState.bind(this)}
                        pageCloseHandler={this.close.bind(this)}
                        className="_fix"
                    />
                </div>
                <Media check={(d) => d === 'mobile'}>
                    <Fade isShow={!!isMenuShow} className="page__menu">
                        <Menu setState={this.setMenuState.bind(this)} />
                    </Fade>
                </Media>
                <Media check={(d) => d === 'desktop' && withClose && this.mode === 'inner'}>
                    {this.renderInnerClose()}
                </Media>
            </>

            <div className="page__scroll" onScroll={this.checkScroll.bind(this)}>
                <div className="page__scrollInner">
                    {!window.isBot && (
                        <div className="page__topBar">
                            <TopBar
                                mode={this.mode}
                                setMenuState={this.setMenuState.bind(this)}
                                pageCloseHandler={this.close.bind(this)}
                            />
                        </div>
                    )}

                    {typeof isInit === 'boolean' && (
                        <LoaderBlock isShow={!isInit} className="page__loader" />
                    )}
                    <div className="page__scrollContent _COL">{render()}</div>
                </div>
            </div>
        </div>
    );
};

export default renderPage;
