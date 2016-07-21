/**
 * Тулбар сохранения каких-либо данных.
 * Необходимо явно указать контроллер с методами save и reset.
 */
Ext.define('A.view.widget.SaveToolbar', {
    extend: 'Ext.toolbar.Toolbar',
    xtype: 'widgetSaveToolbar',

    width: '100%',
    height: 60,
    border: '0 0 1 0',

    items: [
        {
            itemId: 'save',
            text: 'Сохранить',
            handler: 'save',
            disabled: true
        },
        {
            itemId: 'reset',
            text: 'Сбросить',
            handler: 'reset',
            disabled: true
        }
    ]
});