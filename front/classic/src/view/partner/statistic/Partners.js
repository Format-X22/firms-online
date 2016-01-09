/**
 * График патнеров, привлеченных партнером.
 */
Ext.define('A.view.partner.statistic.Partners', {
    extend: 'Ext.container.Container',
    xtype: 'partnerStatisticPartners',

    layout: 'fit',

    items: [
        {
            itemId: 'placeholder',
            xtype: 'partnerStatisticEmptyPlaceholder'
        },
        {
            itemId: 'chart',
            xtype: 'cartesian',
            hidden: true,
            store: {
                model: 'A.model.Stats',
                data: [
                    {
                        date: 'янв',
                        value: 0
                    },
                    {
                        date: 'фев',
                        value: 1
                    },
                    {
                        date: 'мар',
                        value: 4
                    },
                    {
                        date: 'апр',
                        value: 8
                    },
                    {
                        date: 'май',
                        value: 9
                    },
                    {
                        date: 'июн',
                        value: 11
                    },
                    {
                        date: 'июл',
                        value: 12
                    },
                    {
                        date: 'авг',
                        value: 14
                    },
                    {
                        date: 'сен',
                        value: 16
                    },
                    {
                        date: 'окт',
                        value: 16
                    },
                    {
                        date: 'ноя',
                        value: 16
                    },
                    {
                        date: 'дек',
                        value: 18
                    }
                ]
            },
            theme: 'sky',
            axes: [
                {
                    type: 'numeric',
                    position: 'left',
                    title: 'Количество зарегистрированных с ключем',
                    grid: true,
                    minimum: 0,
                    fields: [
                        'value'
                    ]
                },
                {
                    type: 'category',
                    position: 'bottom',
                    title: 'Месяц',
                    fields: [
                        'date'
                    ]
                }
            ],
            series: {
                type: 'area',
                xField: 'date',
                yField: 'value',
                marker: {
                    opacity: 0,
                    scaling: 0.01,
                    fx: {
                        duration: 200,
                        easing: 'easeOut'
                    }
                },
                highlightCfg: {
                    opacity: 1,
                    scaling: 1.5
                },
                subStyle: {
                    fill: '#1BC3CB'
                },
                tooltip: {
                    trackMouse: true,
                    renderer: function (tooltip, record) {
                        tooltip.setHtml(record.get('value') + 'шт');
                    }
                }
            }
        }
    ]
});