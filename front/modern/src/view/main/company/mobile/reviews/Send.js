/**
 * Виждет отправки своего отзыва.
 */
Ext.define('A.view.main.company.mobile.reviews.Send', {
    extend: 'Ext.container.Container',
    xtype: 'companyMobileReviewsSend',
    controller: 'companyReviewsSend',

    requires: [
        'A.view.main.company.reviews.SendController'
    ],

    cls: 'company-mobile-reviews-send',

    width: '100%',
    layout: {
        type: 'hbox',
        pack: 'center'
    },
    items: [
        {
            itemId: 'reviewForm',
            xtype: 'formpanel',
            width: '100%',
            padding: 5,
            defaults: {
                margin: 5
            },
            items: [
                {
                    name: 'name',
                    xtype: 'textfield',
                    placeHolder: 'Имя',
                    maxLength: 100,
                    component: {
                        autoComplete: false,
                        autoCapitalize: false,
                        autoCorrect: false
                    }
                },
                {
                    name: 'header',
                    xtype: 'textfield',
                    placeHolder: 'Заголовок',
                    maxLength: 100,
                    component: {
                        autoComplete: false,
                        autoCapitalize: false,
                        autoCorrect: false
                    }
                },
                {
                    name: 'description',
                    xtype: 'textareafield',
                    cls: 'review-textarea',
                    placeHolder: 'Отзыв',
                    height: 120,
                    maxLength: 1000,
                    border: 1,
                    component: {
                        autoComplete: false,
                        autoCapitalize: false,
                        autoCorrect: false
                    }
                },
                {
                    itemId: 'rating',
                    name: 'rating',
                    xtype: 'hiddenfield',
                    value: 3
                },
                {
                    xtype: 'container',
                    layout: {
                        type: 'hbox',
                        pack: 'center'
                    },
                    defaults: {
                        padding: 10,
                        margin: '10 2',
                        flex: 1
                    },
                    items: [
                        {
                            itemId: 'star1',
                            xtype: 'button',
                            iconCls: 'x-fa fa-star',
                            handler: 'set1star'
                        },
                        {
                            itemId: 'star2',
                            xtype: 'button',
                            iconCls: 'x-fa fa-star',
                            handler: 'set2star'
                        },
                        {
                            itemId: 'star3',
                            xtype: 'button',
                            iconCls: 'x-fa fa-star',
                            handler: 'set3star'
                        },
                        {
                            itemId: 'star4',
                            xtype: 'button',
                            iconCls: 'x-fa fa-star-o',
                            handler: 'set4star'
                        },
                        {
                            itemId: 'star5',
                            xtype: 'button',
                            iconCls: 'x-fa fa-star-o',
                            handler: 'set5star'
                        }
                    ]
                },
                {
                    itemId: 'showCaptcha',
                    xtype: 'button',
                    text: 'Отправить',
                    handler: 'showCaptchaBlock'
                },
                {
                    itemId: 'captchaInputContainer',
                    xtype: 'container',
                    hidden: true,
                    layout: 'hbox',
                    items: [
                        {
                            itemId: 'captchaInput',
                            name: 'captcha',
                            xtype: 'textfield',
                            disabled: true,
                            placeHolder: 'Вы не робот?',
                            width: '100%',
                            margin: '20 0 0 0',
                            maxLength: 10,
                            component: {
                                autoComplete: false,
                                autoCapitalize: false,
                                autoCorrect: false
                            }
                        }
                    ]
                },
                {
                    itemId: 'captchaImageContainer',
                    xtype: 'container',
                    hidden: true,
                    layout: 'hbox',
                    items: [
                        {
                            xtype: 'image',
                            width: '100%'
                        }
                    ]
                },
                {
                    itemId: 'sendWithCaptchaContainer',
                    xtype: 'container',
                    hidden: true,
                    layout: 'hbox',
                    items: [
                        {
                            itemId: 'send',
                            xtype: 'button',
                            text: 'Отправить',
                            width: '100%',
                            handler: 'send'
                        }
                    ]
                }
            ]
        }
    ]
});