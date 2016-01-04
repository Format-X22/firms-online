/**
 * Модель общей статистики для партнеров.
 */
Ext.define('A.model.PartnerTotalStats', {
    extend: 'Ext.data.Model',

    fields: [
        {name: 'name',  type: 'string'},
        {name: 'value', type: 'int'   }
    ]
});