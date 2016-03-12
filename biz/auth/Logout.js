/**
 * Логика выхода из сайта.
 */
Ext.define('B.biz.auth.Logout', {
    extend: 'B.AbstractRequestHandler',

    requires: [
        'B.biz.auth.util.Session'
    ],

    constructor: function () {
        this.callParent(arguments);

        var sessionUtil = Ext.create('B.biz.auth.util.Session', {
            session: this.getRequestModel().get('key'),
            scope: this,
            callback: function () {
                if (sessionUtil.getError()) {
                    this.sendError();
                } else {
                    this.sendSuccess();
                }
            }
        });

        sessionUtil.removeSession();
    },

	privates: {

		/**
		 * @private
		 */
		sendSuccess: function () {
			this.getProtocol().sendSuccess();
		},

		/**
		 * @private
		 */
		sendError: function () {
			this.getProtocol().sendError('Сессии не существует.');
		}
	}
});