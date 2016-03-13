/**
 * Модель фото клиента.
 */
Ext.define('B.biz.client.model.Photo', {
	extend: 'Ext.data.Model',

	fields: [
		{
			name: 'logo',
			validators: {
				type: 'presence'
			}
		},
		{
			name: 'photo1'
		},
		{
			name: 'photo2'
		},
		{
			name: 'photo3'
		},
		{
			name: 'photo4'
		},
		{
			name: 'photo5'
		},
		{
			name: 'photo6'
		},
		{
			name: 'photo7'
		},
		{
			name: 'photo8'
		},
		{
			name: 'photo9'
		},
		{
			name: 'photo10'
		}
	]
});