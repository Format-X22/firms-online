/**
 * Цикл ожидания запуска сервисов в назначенное время.
 * Централизованно хранит и сам план запусков.
 */
Ext.define('B.service.MainLoop', {
	singleton: true,

	requires: [
		'B.service.ClientStat',
		'B.service.PartnerStat',
		'B.service.SearchCleaner'
	],

	constructor: function () {
		setInterval(function () {
			var date = new Date();
			var hour = date.getUTCHours() + 3;

			if (hour === 4) {
				Ext.create('B.service.SearchCleaner', {});
                Ext.create('B.service.ClientStat', {});
                Ext.create('B.service.PartnerStat', {});
			}

		}.bind(this), 1000 * 60 * 60);
	}
});