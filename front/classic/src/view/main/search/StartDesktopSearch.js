/**
 *
 */
Ext.define('A.view.main.search.StartDesktopSearch', {
    extend: 'Ext.container.Container',
    xtype: 'startDesktopSearch',

    flex: 1,
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
            xtype: 'container',
            layout: 'hbox',
            width: '90%',
            maxWidth: 500,
            items: [
                {
                    itemId: 'searchInput',
                    xtype: 'textfield',
                    inputType: 'search',
                    border: 1,
                    emptyText: 'Что ищем? Например - кафе в Москве',
                    submitEmptyText: false,
                    flex: 1,
                    listeners: {
                        render: 'focusSearchInput'
                    }
                },
                {
                    itemId: 'searchButton',
                    xtype: 'button',
                    html: 'Искать',
                    iconCls: 'x-fa fa-search'
                }
            ]
        },
        {
            flex: 2
        }
    ]
});