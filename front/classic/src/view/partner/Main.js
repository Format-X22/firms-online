/**
 * Главный виджет части приложения для партнеров для ПК.
 */
Ext.define('A.view.partner.Main', {
    extend: 'Ext.form.Panel',
    xtype: 'appMainPartner',
    controller: 'partnerMain',

    requires: [
        'A.view.partner.MainController',
        'A.view.partner.TopToolbar',
        'A.view.partner.Profile',
        'A.view.partner.Key',
        'A.view.widget.AdminTopDescription'
    ],

    layout: 'vbox',
    defaults: {
        width: '100%'
    },

    items: [
        {
            xtype: 'partnerTopToolbar'
        },
        {
            xtype: 'tabpanel',
            flex: 1,
            items: [
                {
                    xtype: 'partnerKey',
                    title: 'Ключ агента'
                },
                {
                    xtype: 'partnerActs',
                    title: 'Акты'
                },
                {
                    xtype: 'partnerProfile',
                    title: 'Профиль'
                }
            ]
        }
    ],

    listeners: {
        show: 'loadData'
    }
});