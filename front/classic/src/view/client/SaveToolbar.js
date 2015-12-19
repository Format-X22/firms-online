/**
 * Тулбар сохранения каких-либо данных.
 * Необходим контроллер с методами save и reset.
 */
Ext.define('A.view.client.SaveToolbar', {
    extend: 'Ext.toolbar.Toolbar',
    xtype: 'clientEditorSaveToolbar',

    width: '100%',
    height: 60,
    border: '0 0 1 0',

    items: [
        {
            itemId: 'save',
            text: 'Сохранить',
            iconCls: 'x-fa fa-save',
            handler: 'save'
        },
        {
            itemId: 'reset',
            text: 'Сбросить',
            iconCls: 'x-fa fa-undo',
            handler: 'reset'
        }
    ]
});