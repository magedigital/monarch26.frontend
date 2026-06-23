import Slider from '@/src/services/slider/Slider.ts';

import I from '../types.ts';

const init: I['init'] = async function (this: I) {
    const slider = this.parent.current!;

    if (this.slider) {
        this.slider.destroy();
    }

    this.slider = new Slider({
        slider,
        area: slider.querySelector('.indexPrizes__sliderInner')!,
        moveArea: slider.querySelector('.indexPrizes__cards')!,
        itemClass: 'indexPrizes__cardsItem',
        showEach: true,
        withDrag: true,
        buttons: {
            prev: slider.querySelector('.indexPrizes__sliderBtn._prev') as HTMLElement,
            next: slider.querySelector('.indexPrizes__sliderBtn._next') as HTMLElement,
        },
    });

    this.unmountHandlers.all = () => {
        this.slider!.destroy();
    };
};

export default init;
