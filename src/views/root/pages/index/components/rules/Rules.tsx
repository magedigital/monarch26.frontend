import React from 'react';

import Default from '@/src/components/default/Default.tsx';
import Icon from '@/src/components/icon/Icon.tsx';
import Media from '@/src/components/media/Media.tsx';
import { AppRouter } from '@/src/index.tsx';

import RulesI from './types.ts';

class Rules extends Default<RulesI['props'], RulesI['state']> implements RulesI {
    parent: RulesI['parent'];

    constructor(props: RulesI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    render() {
        return (
            <div ref={this.parent} className="indexRules _SECTION" data-ancor="rules">
                <div className="indexRules__inner _INNER">
                    <p className="indexRules__date">с 22 июля по 19 августа 2026</p>
                    <div className="indexRules__cards">
                        <div className="indexRules__cardsItem">
                            <Icon name="rules-arrow" className="indexRules__cardsItemArrow" />
                            <div className="indexRules__card">
                                <div className="indexRules__cardHead">
                                    <h3 className="indexRules__cardTitle">Покупайте</h3>
                                    <p className="indexRules__cardText">
                                        акционные продукты от&nbsp;100 рублей в чеке
                                    </p>
                                </div>
                                <img
                                    src={require('@/src/media/step01-bg-desktop.svg').default}
                                    alt=""
                                    className="indexRules__cardBack"
                                />
                                <Media check={(d) => d === 'desktop'}>
                                    <img
                                        src={require('@/src/media/step01-image-desktop.png')}
                                        alt=""
                                        className="indexRules__cardThumb"
                                    />
                                </Media>
                                <Media check={(d) => d === 'mobile'}>
                                    <img
                                        src={require('@/src/media/step01-image-mob.png')}
                                        alt=""
                                        className="indexRules__cardThumb"
                                    />
                                </Media>
                            </div>
                        </div>
                        <div className="indexRules__cardsItem">
                            <Icon name="rules-arrow" className="indexRules__cardsItemArrow" />
                            <div className="indexRules__card">
                                <div className="indexRules__cardHead">
                                    <h3 className="indexRules__cardTitle">регистрируйте чеки</h3>
                                    <p className="indexRules__cardText">
                                        в{' '}
                                        <span
                                            className="_CLICK"
                                            onClick={() => {
                                                AppRouter.changePage({ pageName: 'profile' });
                                            }}
                                        >
                                            Личном кабинете
                                        </span>
                                    </p>
                                </div>
                                <img
                                    src={require('@/src/media/step02-bg-desktop.svg').default}
                                    alt=""
                                    className="indexRules__cardBack"
                                />
                                <Media check={(d) => d === 'desktop'}>
                                    <img
                                        src={require('@/src/media/step02-image-desktop.png')}
                                        alt=""
                                        className="indexRules__cardThumb"
                                    />
                                </Media>
                                <Media check={(d) => d === 'mobile'}>
                                    <img
                                        src={require('@/src/media/step02-image-mob.png')}
                                        alt=""
                                        className="indexRules__cardThumb"
                                    />
                                </Media>
                            </div>
                        </div>
                        <div className="indexRules__cardsItem">
                            <div className="indexRules__card">
                                <div className="indexRules__cardHead">
                                    <h3 className="indexRules__cardTitle">выигрывайте призы</h3>
                                </div>
                                <img
                                    src={require('@/src/media/step03-bg-desktop.svg').default}
                                    alt=""
                                    className="indexRules__cardBack"
                                />
                                <Media check={(d) => d === 'desktop'}>
                                    <img
                                        src={require('@/src/media/step03-image-desktop.png')}
                                        alt=""
                                        className="indexRules__cardThumb"
                                    />
                                </Media>
                                <Media check={(d) => d === 'mobile'}>
                                    <img
                                        src={require('@/src/media/step03-image-mob.png')}
                                        alt=""
                                        className="indexRules__cardThumb"
                                    />
                                </Media>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Rules;
