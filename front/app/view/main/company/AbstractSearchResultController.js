/**
 * Абстрактный контроллер результатов поиска.
 */
Ext.define('A.view.main.company.AbstractSearchResultController', {
    extend: 'Ext.app.ViewController',

    requires: [
        'A.store.Company'
    ],

    control: {
        '#searchResult': {
            itemclick: 'openCompanyFromClassic',
            itemtap: 'openCompanyFromModern'
        },
        'companyContainer #backToSearch': {
            tap: 'backToSearch',
            click: 'backToSearch'
        }
    },

    /**
     * @protected
     * Открывает компанию, соответствующую данным рекорда или по ID.
     * @param {Ext.data.Model/Number} recordOrId Рекорд.
     */
    openCompany: function (recordOrId) {
        this.loadCompany(recordOrId);
        this.showCompany();
    },

    /**
     * @protected
     * Открывает компанию, соответствующую данным рекорда или по ID.
     * @param {Ext.data.Model/Number} recordOrId Рекорд.
     */
    loadCompany: function (recordOrId) {
        /*A.store.Company.load({
            params: {
                id: record.get('id')
            }
        });*/
    },

    /**
     * @protected
     * Показывает компанию.
     */
    showCompany: function () {
        this.hideSearch();
        this.resetCompanyInnerTabs();
        this.switchToCompany();
    },

    /**
     * @protected
     * Возвращает к результатам поиска.
     */
    backToSearch: function () {
        this.showSearch();
        this.switchToSearch();
    },

    /**
     * @protected
     * Показывает поисковый виджет.
     */
    showSearch: function () {
        this.getSearchToolbar().show();
    },

    /**
     * @protected
     * Прячет поисковый виджет.
     */
    hideSearch: function () {
        this.getSearchToolbar().hide();
    },

    /**
     * @protected
     * Сбрасывает вкладки деталей компании на первую.
     */
    resetCompanyInnerTabs: function () {
        Ext.each(this.getCompanyDetailsTabPanels(), function (tabPanel) {
            if (Ext.isClassic) {
                tabPanel.setActiveTab(0);
            } else {
                tabPanel.setActiveItem(0);
            }
        }, this);
    },

    /**
     * @protected
     * Переключает отображение на показ виджета компании.
     */
    switchToCompany: function () {
        this.getResultCard().setActiveItem(1);
    },

    /**
     * @protected
     * Переключает отображение на показ виджета результатов поиска.
     */
    switchToSearch: function () {
        this.getResultCard().setActiveItem(0);
    },

    /**
     * @protected
     * @return {Ext.toolbar.Toolbar/Ext.Toolbar} Тулбар поиска.
     */
    getSearchToolbar: function () {
        return this.getView().down('#searchToolbar');
    },

    /**
     * @protected
     * @return {Ext.container.Container/Ext.Container} Контейнер с результатом поиска и деталями
     * компании с возможностью переключения отображения.
     */
    getResultCard: function () {
        return this.getView().down('#resultCard');
    },

    /**
     * @protected
     * @return {Ext.tab.Panel[]} Все панели вкладок с деталями компании.
     */
    getCompanyDetailsTabPanels: function () {
        return Ext.ComponentQuery.query('[companyDetailsTabPanel]');
    },

    privates: {

        /**
         * @private
         * @param {Ext.view.View} view Вью.
         * @param {Ext.data.Model} record Рекорд.
         */
        openCompanyFromClassic: function (view, record) {
            this.openCompany(record);
        },

        /**
         * @private
         * @param {Ext.dataview.DataView} view Вью.
         * @param {Number} index Индекс.
         * @param {Ext.dataview.component.DataItem} target Цель.
         * @param {Ext.data.Model} record Рекорд.
         */
        openCompanyFromModern: function (view, index, target, record) {
            this.openCompany(record);
        }
    }
});