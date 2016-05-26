/**
 * Абстрактный контроллер системы авторизации.
 */
Ext.define('A.view.main.auth.AbstractAuthController', {
    extend: 'Ext.app.ViewController',

    mixins: [
        'A.view.widget.FormSaveMessagesMixin'
    ],
    
    requires: [
        'A.view.main.auth.ClientOfferRegisterWindow'
    ],

    config: {

        /**
         * @cfg {String} url Адрес отправки данных.
         */
        url: ''
    },

    /**
     * Отправляет форму.
     */
    send: function () {
        var view = this.getView();

        view.mask();
        view.submit({
            clientValidation: true,
            url: this.getUrl(),
            callback: view.unmask.bind(view),
            success: function () {
                this.goToPage();
                view.unmask();
            }.bind(this),
            failure: function () {
                this.showFailureSaveMessage.apply(this, arguments);
                view.unmask();
            }.bind(this)
        });    
    },

    /**
     * Отправляет форму если была нажата клавиша Enter.
     * @param {Ext.form.field.Base} field Поле ввода.
     * @param {Ext.event.Event} event Объект эвента.
     */
    sendIfEnterKey: function (field, event) {
        if (event.getKey() === event.ENTER) {
            this.send();
        }
    },

    /**
     * Перенаправляет на страницу аккаунта.
     */
    goToPage: function () {
        var type = Ext.util.Cookies.get('type');
        var accPage = 0;
        var accHash = '';

        if (type === 'company') {
            accPage = 1;
            accHash = 'client';
        } else if (type === 'partner') {
            accPage = 2;
            accHash = 'partner';
        }

        A.getCmp('appMain').setActiveItem(accPage);
        this.redirectTo('account/' + accHash);
        this.getView().reset();
    },
    
    privates: {

        /**
         * @private
         */
        showClientOffer: function () {
            var offer = Ext.create('A.view.main.auth.ClientOfferRegisterWindow');
            
            offer.on('done', function () {
                offer.hide();
                offer.destroy();
                this.send();
            }, this, {single: true});
        }
    }
});