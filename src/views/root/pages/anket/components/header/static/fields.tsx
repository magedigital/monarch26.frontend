import React from 'react';

export const anketFields = {
    firstName: {
        type: 'input',
        support: 'Имя*',
    },
    lastName: {
        type: 'input',
        support: 'Фамилия*',
    },
    phone: {
        type: 'input',
        support: 'Номер мобильного телефона*',
        input: {
            reg: 'phone',
        },
    },
    password: {
        type: 'input',
        support: 'Пароль*',
        input: {
            isPassword: true,
        },
    },
    password2: {
        type: 'input',
        support: 'Повтор пароля*',
        input: {
            isPassword: true,
        },
    },
    agreement: {
        type: 'checkbox',
        checkbox: {
            content: (
                <>
                    Я соглашаюсь с{' '}
                    <a href="/upload/docs/politics.pdf" target="_blank">
                        политикой конфиденциальности
                    </a>
                </>
            ),
        },
    },
    personal: {
        type: 'checkbox',
        checkbox: {
            content: (
                <>
                    Я соглашаюсь с{' '}
                    <a href="/upload/docs/agreement-anket.pdf" target="_blank">
                        условиями обработки персональных данных
                    </a>
                </>
            ),
        },
    },
    mailing: {
        type: 'checkbox',
        checkbox: {
            content: <>Я соглашаюсь получать рассылку с новостями акции</>,
        },
    },
} as const;
