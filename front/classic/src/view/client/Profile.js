/**
 * Профиль клиента.
 */
Ext.define('A.view.client.Profile', {
    extend: 'Ext.form.Panel',
    xtype: 'clientProfile',
    controller: 'clientProfile',

    requires: [
        'A.view.partner.ProfileController'
    ],

    layout: {
        type: 'vbox',
        align: 'center'
    },

    items: [
        {
            flex: 1
        },
        {
            name: 'email',
            xtype: 'textfield',
            fieldLabel: 'Ваша почта',
            width: 600,
            regex: /^.*@.*\..*$/,
            regexText: Ext.form.field.VTypes.emailText,
            allowBlank: false,
            msgTarget: 'under',
            validateOnBlur: false,
            validateOnChange: false
        },
        {
            xtype: 'container',
            layout: {
                type: 'vbox',
                align: 'right'
            },
            width: 600,
            margin: '0 0 40 0',
            items: [
                {
                    xtype: 'button',
                    text: 'Сменить почту',
                    handler: 'changeEmail',
                    width: 200
                }
            ]
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Ваш пароль',
            value: '????????',
            width: 600,
            readOnly: true
        },
        {
            xtype: 'container',
            layout: {
                type: 'vbox',
                align: 'right'
            },
            width: 600,
            items: [
                {
                    xtype: 'button',
                    text: 'Сбросить пароль',
                    handler: 'resetPassword',
                    width: 200
                }
            ]
        },
        {
            flex: 2
        }
    ]
});