/**
 * Редактор описания компании.
 */
Ext.define('A.view.client.editor.Summary', {
    extend: 'Ext.form.Panel',
    xtype: 'clientEditorSummary',
    controller: 'clientEditorSummary',

    requires: [
        'A.view.client.editor.SummaryController'
    ],

    items: [
        {
            xtype: 'clientEditorSaveToolbar'
        },
        {
            name: 'summary',
            xtype: 'htmleditor',
            padding: '20 20 20 50',
            width: '100%',
            height: 350,
            resizable: {
                handles: 's'
            },
            enableColors: false,
            enableFont: false,
            enableFontSize: false,
            enableSourceEdit: false,
            enableLinks: false,
            value: 'А мы самые <b>лучшие!</b>'
        }
    ]
});