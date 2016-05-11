/**
 * Стор страницы контактов.
 */
Ext.define('A.store.PageForContacts', {
    extend: 'Ext.data.Store',
    singleton: true,
    storeId: 'pageForContacts',

    model: 'A.model.InfoPage',

    proxy: {
        type: 'memory'
    },

    data: [
        {
            id: 1,
            url: '/resources/img/contacts1.svg',
            header: 'Единая связь',
            description:
                'По любому вопросу вы<br>' +
                'всегда можете<br>' +
                'написать на почту<br>' +
                '<a class="link" href="mailto:contact@фирмы.онлайн">contact@фирмы.онлайн</a><br>' +
                'или позвонить на номер<br>' +
                '8 (925) 154-68-79'
        },
        {
            id: 2,
            url: '/resources/img/contacts2.svg',
            header: 'Юридические данные',
            description:
                'ООО «Простые числа»<br>' +
                '129345, г. Москва, ул. Тайнинская, д.26,<br> пом. I, комн. 1<br>' +
                'ОГРН<br>' +
                '1167746406805<br>' +
                'ИНН/КПП<br>' +
                '7716823512/771601001'
        },
        {
            id: 3,
            url: '/resources/img/contacts3.svg',
            header: 'Банковские реквизиты',
            description:
                'Р/сч:<br>' +
                '40702810201270006807<br>' +
                'БИК:<br>' +
                '044583999<br>' +
                'Кор/сч:<br>' +
                '30101810600000000999<br>' +
                'в Ф ОНЛАЙН ПАО "ХАНТЫ-МАНСИЙСКИЙ БАНК ОТКРЫТИЕ"'
        }
    ]
});