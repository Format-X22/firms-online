Ext.define('A.view.main.search.StartMobileSearch', {
    extend: 'Ext.Container',
    xtype: 'startMobileSearch',

    height: '100%',
    padding: 10,
    layout: {
        type: 'vbox',
        align: 'center'
    },

    items: [
        {
            flex: 1
        },
        {
            xtype: 'image',
            width: 240,
            height: 150,
            src: '/resources/logo.svg'
        },
        {
            xtype: 'component',
            padding: '0 0 10 0',
            html: 'Все фирмы на одном сайте'
        },
        {
            itemId: 'searchInput',
            xtype: 'textfield',
            cls: 'mobile-search',
            placeHolder: 'Введите запрос',
            width: '100%'
        },
        {
            itemId: 'searchButton',
            xtype: 'button',
            ui: 'search-with-text',
            html: 'Искать',
            iconCls: 'x-fa fa-search',
            width: '100%'
        },
        {
            flex: 2
        }
    ]
});