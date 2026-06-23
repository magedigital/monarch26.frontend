import DefaultI from '@/src/components/default/types';
import Slider from '@/src/services/slider/Slider';

type PropsT = {
    render: () => React.ReactNode;
};

type StateT = {};

interface SliderI extends DefaultI<PropsT, StateT> {
    slider?: Slider;
}

export default SliderI;
