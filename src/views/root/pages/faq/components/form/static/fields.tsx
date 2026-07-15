import React from 'react';

export const faqFields = {
    question: {
        type: 'input',
        support: 'Твой вопрос',
        input: {
            isArea: true,
        },
    },
    name: {
        type: 'input',
        support: 'Как тебя зовут',
        input: {},
    },
    email: {
        type: 'input',
        support: 'E-mail для получения ответа',
        input: {},
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
                    <a href="/upload/docs/agreement-feedback.pdf" target="_blank">
                        условиями обработки персональных данных
                    </a>
                </>
            ),
        },
    },
} as const;
