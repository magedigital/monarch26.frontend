import React from 'react';

import Default from '@/src/components/default/Default.tsx';
import Icon from '@/src/components/icon/Icon.tsx';
import Media from '@/src/components/media/Media.tsx';
import { AppRouter } from '@/src/index.tsx';

import TopBarI from './types.ts';

import renderNav from './renders/renderNav.tsx';

class TopBar extends Default<TopBarI['props'], TopBarI['state']> implements TopBarI {
    parent: TopBarI['parent'];

    constructor(props: TopBarI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    renderNav = renderNav;

    render() {
        const { className, mode, setMenuState } = this.props;

        return (
            <div
                ref={this.parent}
                className={this.getClass('topBar _SECTION', className, this.setClass(mode))}
            >
                <div className="topBar__inner _INNER">
                    <Media check={(d) => d === 'mobile'}>
                        <Icon
                            name={mode === 'menu' ? 'menu-close' : 'menu-open'}
                            className="topBar__btn"
                            onClick={async () => {
                                await setMenuState(mode !== 'menu');
                            }}
                        />
                    </Media>
                    <img
                        src={require('@/src/media/monarch-logo-desktop.png')}
                        alt=""
                        className="topBar__logo _monarh"
                    />
                    {this.renderNav()}
                    <img
                        src={require('@/src/media/magnit-logo-desktop.svg').default}
                        alt=""
                        className="topBar__logo _magnit"
                    />
                    <Media check={(d) => d === 'mobile'}>
                        <img
                            className="topBar__profile"
                            src={require('@/src/media/user-icon.svg').default}
                            alt=""
                            onClick={() => {
                                AppRouter.changePage({ pageName: 'profile' });
                            }}
                        />
                    </Media>
                </div>
            </div>
        );
    }
}

export default TopBar;
