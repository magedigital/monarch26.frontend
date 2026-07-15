import React from 'react';

import Icon from '@/src/components/icon/Icon.tsx';
import StringService from '@/src/services/string/String.service.ts';

import I from '../types.ts';

const renderFoot: I['renderFoot'] = function () {
    const { prize } = this.props;

    return (
        <div className="prize__foot _COL _COL_H_CENTER">
            <div
                className="prize__name"
                onClick={() => {
                    if (prize.status === 'DOWNLOAD') {
                        window.open(prize.url, '_blank');
                    }
                }}
            >
                {prize.status === 'DOWNLOAD' && (
                    <i className="prize__nameIcon">
                        <Icon name="download" />
                    </i>
                )}
                <span
                    dangerouslySetInnerHTML={{ __html: new StringService().setSpaces(prize.title) }}
                ></span>
            </div>
        </div>
    );
};

export default renderFoot;
