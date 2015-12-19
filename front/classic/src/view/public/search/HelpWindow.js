/**
 * Окно, выводящее подсказку о том что нужно нажимать на
 * квадраты для получения подробной инфорамации.
 */
Ext.define('A.view.public.search.HelpWindow', {
    extend: 'Ext.window.Window',
    xtype: 'searchHelpWindow',
    controller: 'searchHelpWindow',

    requires: [
        'A.view.public.search.HelpWindowController'
    ],

    width: 200,
    height: 350,
    resizable: false,

    items: [
        {
            xtype: 'image',
            src: '/resources/img/help.svg'
        },
        {
            xtype: 'component',
            padding: 15,
            html: 'Нажмайте на любой квадрат для получения информации о компании.'
        }
    ],

    bbar: [
        {
            xtype: 'component',
            border: 0,
            flex: 1
        },
        {
            text: 'Ок!',
            handler: 'closeWindowHandler'
        },
        {
            xtype: 'component',
            border: 0,
            flex: 1
        }
    ]
});