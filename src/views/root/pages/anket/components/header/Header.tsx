import React from 'react';

import Default from '@/src/components/default/Default.tsx';
import Form from '@/src/components/form/Form.tsx';

import getUserData from './methods/getUserData.ts';
import sendForm from './methods/sendForm.ts';

import HeaderI from './types.ts';

import { anketFields } from './static/fields.tsx';

class Header extends Default<HeaderI['props'], HeaderI['state']> implements HeaderI {
    parent: HeaderI['parent'];

    constructor(props: HeaderI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    getUserData = getUserData;

    sendForm = sendForm;

    render() {
        const { authUser } = this.props;

        return (
            <div ref={this.parent} className="anketHeader _SECTION">
                <div className="anketHeader__head _COL">
                    <h1 className="anketHeader__headTitle _TITLE _inner">АНКЕТА</h1>
                    <p className="anketHeader__headText _TEXT">
                        {authUser.isFirstAnket
                            ? 'Для завершения регистрации заполните данные ниже'
                            : 'Вы можете изменить данные ниже'}
                    </p>
                </div>
                <div className="anketHeader__content _COL">
                    <div className="anketHeader__contentInner">
                        <Form
                            data={this.getUserData()}
                            fields={anketFields}
                            fieldsList={Object.keys(anketFields).filter(
                                (k) =>
                                    authUser.isFirstAnket || (k !== 'mailing' && k !== 'referral'),
                            )}
                            button={{
                                text: authUser.isFirstAnket ? 'завершить регистрацию' : 'Сохранить',
                                className: '_mainColor',
                            }}
                            request={this.sendForm.bind(this)}
                            fieldClassName="_"
                            requiredText="* обязательные поля"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
