/**
 * Таб-панель деталей компании для планшетов.
 */
Ext.define('A.view.main.company.tablet.TabPanel', {
    extend: 'A.view.main.company.AbstractTabPanel',
    xtype: 'companyTabPanelTablet',

    requires: [
        'A.view.main.company.tablet.Summary',
        'A.view.main.company.Gallery',
        'A.view.main.company.Map'
    ],

    items: [
        {
            xtype: 'companySummaryTablet',
            iconCls: 'x-fa fa-file-text-o'
        },
        {
            xtype: 'companyGallery',
            iconCls: 'x-fa fa-image'
        },
        {
            iconCls: 'x-fa fa-eye'
        },
        {
            xtype: 'companyMap',
            iconCls: 'x-fa fa-map-o'
        }
    ]
});