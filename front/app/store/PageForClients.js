/**
 * Стор страницы для клиентов.
 */
Ext.define('A.store.PageForClients', {
    extend: 'Ext.data.Store',
    singleton: true,
    storeId: 'pageForClients',

    model: 'A.model.InfoPage',

    proxy: {
        type: 'memory'
    },

    data: [
        {
            id: 3,
            url: '/resources/img/client3.svg',
            header: 'Мягкий способ',
            description: 'Человек обычно заходит на наш сайт специально чтобы найти одну из компаний, ' +
            'он уже готов к предложениям, готов к заказам. Это лучше чем надоевшая всем реклама.'
        },
        {
            id: 5,
            url: '/resources/img/client5.svg',
            header: 'Телефоны и планшеты',
            description: 'Наш сайт специально оптимизирован под мобильные устройства, ' +
            'а значит и каждая компания сразу получает возможность быть доступной ' +
            'и для мобильных клиентов.'
        },
        {
            id: 6,
            url: '/resources/img/client6.svg',
            header: 'Enterprise',
            description: 'Сайт использует промышленные стандарты технологий, ' +
            'используемые в банковской среде.'
        },
        {
            id: 2,
            url: '/resources/img/client2.svg',
            header: 'Информация важнее',
            description: 'Человек ищет что-то чтобы решить свою проблему, ему нужна информация. ' +
            'Устройство и дизайн нашего сайта единообразен, что позволяет сразу получать ' +
            'информацию, пропустив этап изучения и привыкания к каждому новому сайту.'
        },
        {
            id: 1,
            url: '/resources/img/client1.svg',
            header: 'Интерактив',
            description: 'Человек лучше воспринимает изображения, инфографику, ' +
                         'именно по этому наш поиск показывает изображения вместо обычного текста.'
        },
        {
            id: 4,
            url: '/resources/img/client4.svg',
            header: 'Коротко и по делу',
            description: 'Описание компаний содержит только те вещи, что важнее при знакомстве ' +
                         'с компанией, никакой перегрузки новостями, статьями и прочей второстепенной информацией.'
        }
    ]
});