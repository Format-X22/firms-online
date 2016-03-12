/**
 * Логика входа на сайт.
 */
Ext.define('B.biz.auth.Login', {
    extend: 'B.AbstractRequestHandler',

    requires: [
        'B.biz.auth.util.Account',
        'B.biz.auth.util.Crypt',
        'B.biz.auth.util.Session'
    ],

    config: {

        /**
         * @private
         * @cfg {Object} account Объект данных аккаунта.
         */
        account: null,

        /**
         * @private
         * @cfg {B.biz.auth.util.Crypt} crypt Утилита криптографии.
         */
        crypt: null,

		/**
		 * @private
         * @cfg {B.biz.auth.util.Session} sessionUtil Утилита сессий.
         */
        sessionUtil: null
    },

    constructor: function () {
        this.callParent(arguments);

        var model = this.getRequestModel();

        Ext.create('B.biz.auth.util.Account', {
            login: model.get('login'),
            type: model.get('type'),
            scope: this,
            callback: this.handleAccountSearch
        });
    },

	/**
     * @inheritdoc
     */
    sendError: function () {
        this.callParent(['Не верный логин или пароль!']);
    },

    privates: {

        /**
         * @private
         * @param {B.biz.auth.util.Account} accountUtil Утилита данных аккаунта.
         */
        handleAccountSearch: function (accountUtil) {
            var account = accountUtil.getFullAccountData();

            if (account) {
                this.setAccount(account);
                this.makeCrypt();
                this.checkPass();
            } else {
                this.sendError();
            }
        },

        /**
         * @private
         */
        makeCrypt: function () {
            var model = this.getRequestModel();
            var crypt = Ext.create('B.biz.auth.util.Crypt', {
                login: model.get('login'),
                pass: model.get('pass'),
                hash: this.getAccount().pass,
                scope: this
            });

            this.setCrypt(crypt);
        },

        /**
         * @private
         */
        checkPass: function () {
            var crypt = this.getCrypt();

            crypt.setCallback(this.handlePassCheck);
            crypt.checkPass();
        },

        /**
         * @private
         * @param {B.biz.auth.util.Crypt} crypt Утилита криптографии.
         */
        handlePassCheck: function (crypt) {
            if (crypt.getCheckPassResult()) {
                this.addSession();
            } else {
                this.sendError();
            }
        },

        /**
         * @private
         */
        addSession: function () {
            var model = this.getRequestModel();
            var util = Ext.create('B.biz.auth.util.Session', {
                login: model.get('login'),
                type: model.get('type'),
                account: this.getAccount(),
                scope: this,
                callback: this.handleSessionAdd
            });

            this.setSessionUtil(util);
            util.addSession();
        },

        /**
         * @private
         * @param {B.biz.auth.util.Session} util Утилита сессий.
         */
        handleSessionAdd: function (util) {
            if (util.getError()) {
                this.sendError();
            } else {
                this.setSessionCookie();
                this.sendSuccess();
            }
        },

        /**
         * @private
         */
        setSessionCookie: function () {
            this.getExpressResponse().cookie('key', this.getSessionUtil().getSession(), {
                httpOnly: true
            });
        }
    }
});