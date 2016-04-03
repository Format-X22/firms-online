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
            xtype: 'widgetSaveToolbar'
        },
		{
			xtype: 'adminTopDescription',
			border: '0 0 1 0',
			html:
				'Опишите вашу компанию. Подробно.<br>' +
				'Расскажите о том чем вы занимаетесь и что можете предложить.<br>' +
				'Особенно хорошо если клиент, прочитав первые предложения,<br>' +
				'сразу поймет что он может получить и на что рассчитывать.<br>' +
				'На основе этого текста будет сформировано первое впечатление<br>' +
				'о вас и вашей компании.'
		},
        {
            xtype: 'container',
            layout: {
                type: 'fit'
            },
            items: [
                {
                    name: 'summary',
                    xtype: 'htmleditor',
                    margin: 20,
                    flex: 1,
                    height: 200,
                    resizable: {
                        handles: 's'
                    },
                    value: 'А мы самые <b>лучшие!</b>',
                    listeners: {
                        change: 'validateAndUpdateCounter'
                    }
                }
            ]
        }
    ]
});