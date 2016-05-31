/**
 * Контроллер платежей клиента.
 */
Ext.define('A.view.client.PayController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.clientPay',

    /**
     * Оплата на 1 месяц.
     */
    pay1Month: function () {
        // @TODO
    },

    /**
     * Оплата на 12 месяцев.
     */
    pay12Month: function () {
        // @TODO
    },

    /**
     * Оплата на 1 месяц без карты.
     */
    noCardPay1Month: function () {
        this.noCardPay(1);
    },

    /**
     * Оплата на 12 месяцев без карты.
     */
    noCardPay12Month: function () {
        this.noCardPay(12);
    },

    /**
     * Оплата на 18 месяцев без карты.
     */
    noCardPay18Month: function () {
        this.noCardPay(18);
    },

    /**
     * Оплата на 24 месяцев без карты.
     */
    noCardPay24Month: function () {
        this.noCardPay(24);
    },

    privates: {

        /**
         * @private
         * @param {Number} month Количество месяцев.
         */
        noCardPay: function (month) {
            Ext.create('A.view.client.pay.NoCardPayWindow', {
                monthCount: month,
                companyId: this.getCompanyId()
            });
        },

        /**
         * @private
         * @return {String} ID.
         */
        getCompanyId: function () {
            return this.getView().up('form').getValues()._id;
        }
    }
});