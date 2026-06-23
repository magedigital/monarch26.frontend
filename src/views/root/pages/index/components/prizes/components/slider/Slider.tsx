import React from 'react';

import Default from '@/src/components/default/Default.tsx';
import Icon from '@/src/components/icon/Icon.tsx';

import init from './methods/init.ts';

import SliderI from './types.ts';

class Slider extends Default<SliderI['props'], SliderI['state']> implements SliderI {
    parent: SliderI['parent'];

    constructor(props: SliderI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    init = init;

    render() {
        return (
            <div ref={this.parent} className="indexPrizes__slider">
                <div className="indexPrizes__sliderBtn _prev">
                    <Icon name="prev-arrow" />
                </div>
                <div className="indexPrizes__sliderBtn _next">
                    <Icon name="next-arrow" />
                </div>
                <div className="indexPrizes__sliderInner">{this.props.render()}</div>
            </div>
        );
    }
}

export default Slider;
