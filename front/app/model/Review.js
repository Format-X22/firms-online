/**
 * Модель данных отзыва.
 */
Ext.define('A.model.Review', {
    extend: 'Ext.data.Model',

    fields: [
        {name: 'rating',      type: 'int'                       },
        {name: 'name',        type: 'string'                    },
        {name: 'header',      type: 'string'                    },
        {name: 'description', type: 'string'                    },
        {name: 'date',        type: 'date',  dateFormat: 'd.m.Y'}
    ]
});