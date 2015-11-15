Ext.define('A.view.main.company.Container', {
    extend: 'Ext.Container',
    xtype: 'companyContainer',
    viewModel: 'companyContainer',

    requires: [
        'A.view.main.company.mobile.TabPanel',
        'A.view.main.company.tablet.TabPanel',
        //'A.view.main.company.Gallery',
        //'A.view.main.company.Reviews',
        //'A.view.main.company.Map'
    ],

    layout: 'vbox',

    items: [
        {
            xtype: 'toolbar',
            hidden: true,
            bind: {
                title: '{name}'
            },
            plugins: 'responsive',
            responsiveConfig: {
                'width < 600 || height < 500': {
                    hidden: true
                },
                'width >= 600 && height >= 500': {
                    hidden: false
                }
            },
            items: [
                '->',
                {
                    itemId: 'backToSearch',
                    xtype: 'button',
                    text: 'Назад',
                    iconCls: 'x-fa fa-chevron-left'
                }
            ]
        },
        {
            xtype: 'companyTabPanelMobile',
            flex: 1,
            plugins: 'responsive',
            responsiveConfig: {
                'width < 600 || height < 500': {
                    hidden: false
                },
                'width >= 600 && height >= 500': {
                    hidden: true
                }
            }
        },
        {
            xtype: 'companyTabPanelTablet',
            flex: 1,
            plugins: 'responsive',
            responsiveConfig: {
                'width < 600 || height < 500': {
                    hidden: true
                },
                'width >= 600 && height >= 500': {
                    hidden: false
                }
            }
        }
    ]
});