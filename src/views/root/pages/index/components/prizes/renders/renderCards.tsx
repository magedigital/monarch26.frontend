import React from 'react';

import I from '../types.ts';

const renderCards: I['renderCards'] = function () {
    return (
        <div className="indexPrizes__cards">
            <div className="indexPrizes__cardsItem">
                <div className="indexPrizes__card">
                    <div className="indexPrizes__cardHead">
                        <img
                            src={require('@/src/media/weekly-prize01.png')}
                            alt=""
                            className="indexPrizes__cardHeadThumb"
                        />
                    </div>
                    <p className="indexPrizes__cardName">
                        сертификат
                        <br />
                        на покупку спортивных аксессуаров
                    </p>
                </div>
            </div>
            <div className="indexPrizes__cardsItem">
                <div className="indexPrizes__card">
                    <div className="indexPrizes__cardHead">
                        <img
                            src={require('@/src/media/weekly-prize02.png')}
                            alt=""
                            className="indexPrizes__cardHeadThumb"
                        />
                    </div>
                    <p className="indexPrizes__cardName">
                        сертификат
                        <br />
                        на покупку модной одежды
                    </p>
                </div>
            </div>
            <div className="indexPrizes__cardsItem">
                <div className="indexPrizes__card">
                    <div className="indexPrizes__cardHead">
                        <img
                            src={require('@/src/media/weekly-prize03.png')}
                            alt=""
                            className="indexPrizes__cardHeadThumb"
                        />
                    </div>
                    <p className="indexPrizes__cardName">
                        сертификат
                        <br />
                        на покупку фотоаппарата
                    </p>
                </div>
            </div>
            <div className="indexPrizes__cardsItem">
                <div className="indexPrizes__card">
                    <div className="indexPrizes__cardHead">
                        <img
                            src={require('@/src/media/weekly-prize04.png')}
                            alt=""
                            className="indexPrizes__cardHeadThumb"
                        />
                    </div>
                    <p className="indexPrizes__cardName">
                        сертификат
                        <br />
                        на покупку игровой прИставки
                    </p>
                </div>
            </div>
        </div>
    );
};

export default renderCards;
