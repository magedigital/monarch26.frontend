import React from 'react';

import Default from '@/src/components/default/Default.tsx';
import Form from '@/src/components/form/Form.tsx';
import List from '@/src/components/list/List.tsx';

import sendForm from './methods/sendForm.ts';

import FormI from './types.ts';

import { faqFields } from './static/fields.tsx';

class FaqForm extends Default<FormI['props'], FormI['state']> implements FormI {
    parent: FormI['parent'];

    constructor(props: FormI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    sendForm = sendForm;

    render() {
        const { isSuccess, name } = this.state;
        const { disabled } = this.props;

        return (
            <div ref={this.parent} className="faqForm _SECTION">
                <div className="faqForm__inner _COL">
                    <List
                        renderKey={isSuccess ? '1' : '0'}
                        items={isSuccess ? [{ _id: 'success' }] : [{ _id: 'form' }]}
                        parentClass="faqForm__innerBlocks"
                        itemClass="faqForm__innerBlock"
                        itemStyleProps={[]}
                        parentStyleProps={['width']}
                        parentRealStyleProps={['width']}
                        render={({ item }) => ({
                            item: (
                                <div className="faqForm__innerBlock">
                                    {item._id === 'success' && (
                                        <div className="faqForm__success">
                                            <div className="faqForm__successInner _COL">
                                                <h3 className="faqForm__successTitle">
                                                    Спасибо, {name}!
                                                </h3>
                                                <p className="faqForm__successText">
                                                    Сообщение отправлено, мы свяжемся{' '}
                                                    <br className="_DESKTOP" />
                                                    с&nbsp;тобой в&nbsp;ближайшее время
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                    {item._id === 'form' && (
                                        <>
                                            <h3 className="faqForm__title">
                                                Если вы не нашли ответ на&nbsp;свой вопрос, <br />{' '}
                                                напишите нам:
                                            </h3>
                                            <div className="faqForm__form">
                                                <Form
                                                    fields={faqFields}
                                                    button={{
                                                        text: 'отправить',
                                                        className: '_mainColor',
                                                    }}
                                                    request={this.sendForm.bind(this)}
                                                    disabled={disabled}
                                                />
                                            </div>
                                        </>
                                    )}
                                </div>
                            ),
                        })}
                        resizeWidth={true}
                    />
                </div>
            </div>
        );
    }
}

export default FaqForm;
