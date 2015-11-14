Ext.define('A.view.main.search.SearchResult', {
    extend: 'Ext.container.Container',
    xtype: 'searchResult',
    controller: 'searchResultController',

    requires: [
        'Ext.plugin.Responsive',
        'A.store.Search',
        'A.view.main.search.SearchResultController'
    ],

    cls: 'search-result',
    layout: 'vbox',

    items: [
        {
            xtype: 'container',
            layout: 'hbox',
            width: '100%',
            padding: 7,
            cls: 'search-toolbar',
            items: [
                {
                    itemId: 'searchInput',
                    xtype: 'textfield',
                    emptyText: 'Введите запрос',
                    submitEmptyText: false,
                    flex: 1,
                    maxWidth: 500
                },
                {
                    itemId: 'searchButton',
                    xtype: 'button',
                    iconCls: 'x-fa fa-search',
                    text: 'Искать'
                }
            ]
        },
        {
            xtype: 'container',
            layout: {
                type: 'hbox',
                pack: 'center'
            },
            padding: '0 10',
            flex: 1,
            width: '100%',
            scrollable: 'vertical',
            items: [
                {
                    itemId: 'searchResult',
                    xtype: 'dataview',
                    store: 'search',
                    plugins: 'responsive',
                    tpl:
                        '<tpl for=".">' +
                            '<div class="item">' +
                                '<img src="http://www.wilsoninfo.com/300x300.gif">' +
                            '</div>' +
                        '</tpl>',
                    itemSelector: '.item',
                    responsiveConfig: {
                        'width < 730': {
                            width: 350
                        },
                        'width < 1080 && width >= 730': {
                            width: 700
                        },
                        'width < 1430 && width >= 1080': {
                            width: 1050
                        },
                        'width < 1780 && width >= 1430': {
                            width: 1400
                        },
                        'width >= 1780': {
                            width: 1750
                        }
                    }
                }
            ]
        }
    ]
});