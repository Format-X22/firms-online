/**
 * Модель данный для галереи.
 */
Ext.define('A.model.Gallery', {
    extend: 'Ext.data.Model',

    fields: [
        {name: 'id',   type: 'int'   },
        {name: 'name', type: 'string'}
    ]
});