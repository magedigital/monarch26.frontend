import React from 'react';

import Default from '@/src/components/default/Default.tsx';

import HeaderI from './types.ts';

class Header extends Default<HeaderI['props'], HeaderI['state']> implements HeaderI {
    parent: HeaderI['parent'];

    constructor(props: HeaderI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    render() {
        return (
            <div ref={this.parent} className="indexHeader _SECTION" data-ancor="index">
                <div className="indexHeader__inner _INNER">
                    <div className="indexHeader__content _COL">
                        <img
                            src={require('@/src/media/slogan-desktop.svg').default}
                            alt=""
                            className="indexHeader__slogan"
                        />
                        <div className="indexHeader__button _ROW _ROW_CENTER _CLICK">ЗАГРУЗИТЬ ЧЕК</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
