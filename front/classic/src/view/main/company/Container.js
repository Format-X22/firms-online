Ext.define('A.view.main.company.Container', {
    extend: 'Ext.panel.Panel',
    xtype: 'companyContainer',
    viewModel: 'companyContainer',

    requires: [
        'A.view.main.company.Summary',
        'A.view.main.company.Map'
    ],

    layout: 'fit',

    tbar: [
        {
            itemId: 'backToSearch',
            xtype: 'button',
            text: 'Назад',
            iconCls: 'x-fa fa-chevron-left'
        },
        '->',
        {
            xtype: 'tbtext',
            bind: {
                html: '<b>{name}</b>'
            }
        },
        '->'
    ],

    items: [
        {
            xtype: 'tabpanel',
            tabBarPosition: 'top',
            flex: 1,
            items: [
                {
                    xtype: 'companySummary',
                    iconCls: 'x-fa fa-file-text-o',
                    title: 'Описание'
                },
                {
                    iconCls: 'x-fa fa-image',
                    title: 'Фотографии'
                },
                {
                    iconCls: 'x-fa fa-eye',
                    title: 'Отзывы'
                },
                {
                    xtype: 'companyMap',
                    iconCls: 'x-fa fa-map-o',
                    title: 'На карте'
                }
            ]
        }
    ]
});