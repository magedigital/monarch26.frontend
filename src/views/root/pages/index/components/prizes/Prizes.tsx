import React from 'react';

import Default from '@/src/components/default/Default.tsx';
import Media from '@/src/components/media/Media.tsx';

import Slider from './components/slider/Slider.tsx';

import PrizesI from './types.ts';

import renderCards from './renders/renderCards.tsx';

class Prizes extends Default<PrizesI['props'], PrizesI['state']> implements PrizesI {
    parent: PrizesI['parent'];

    constructor(props: PrizesI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    renderCards = renderCards;

    render() {
        return (
            <div ref={this.parent} className="indexPrizes _SECTION" data-ancor="prizes">
                <div className="indexPrizes__inner _INNER">
                    <h3 className="indexPrizes__title _TITLE">Главный приз</h3>
                    <div className="indexPrizes__main">
                        <Media check={(d) => d === 'desktop'}>
                            <img
                                src={require('@/src/media/main-prize-desktop.jpg')}
                                alt=""
                                className="indexPrizes__mainThumb _FULL"
                            />
                        </Media>
                        <Media check={(d) => d === 'mobile'}>
                            <img
                                src={require('@/src/media/main-prize-mob.jpg')}
                                alt=""
                                className="indexPrizes__mainThumb _FULL"
                            />
                        </Media>
                        <p className="indexPrizes__mainTitle">
                            сертификат на&nbsp;покупку ноутбука
                        </p>
                    </div>
                    <h3 className="indexPrizes__title _TITLE">ЕЖЕНЕДЕЛЬНЫЕ ПРИЗЫ</h3>
                    <Media check={(d) => d === 'desktop'}>{this.renderCards()}</Media>
                    <Media check={(d) => d === 'mobile'}>
                        <Slider render={this.renderCards.bind(this)} />
                    </Media>
                </div>
            </div>
        );
    }
}

export default Prizes;
