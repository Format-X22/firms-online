/**
 * Логика регистрации.
 */
Ext.define('B.biz.auth.Register', {
    extend: 'B.AbstractRequestHandler',

    constructor: function () {
        this.callParent(arguments);
        this.getProtocol().sendSuccess();
    }
});

/**
 * Обработка регистрации.
 * @param {Object} config Набор параметров.
 * @param {String} config.type Тип аккаунта.
 * @param {String} config.login Логин.
 * @param {String/Undefined} config.partner Ключ партнера.
 * @param {String} config.captcha Ключ капчи.
 * @param {Function} callback Следующий шаг.
 */
exports.register = function (config, callback) {
    var login = config.login;
    var type = config.type;
    var captcha = config.captcha;
    var backFalse = getStoredBackFalse(callback);

    if (invalidRegisterParams(config)) {
        return callback(false);
    }

    checkCaptcha(captcha, backFalse(function () {

        checkLogin(login, type, backFalse(function () {

            Salt.makePass(login, function (pass, passHash) {

                insertNewCompany(acc(type, login, passHash), backFalse(function () {

                    Mail.sendAuthMail(acc(type, login, pass), callback);
                }));
            });
        }));
    }));
};

/**
 * @private
 * @param {Object} config Объект параметров.
 * @param {String} config.login Логин.
 * @param {String} config.pass Пароль.
 * @param {String} config.type Тип аккаунта.
 * @param {Function} callback Следующий шаг.
 */
function insertNewCompany (config, callback) {
    var login = config.login;
    var pass = config.pass;
    var type = config.type;

    Mongo
        .collection(type)
        .insertOne(
            {
                login: login,
                pass: pass
            },
            {},
            function (error) {
                return callback(!error);
            }
        );
}

/**
 * Обработка смены пароля.
 * @param {String} key Ключ сессии.
 * @param {Function} callback Следующий шаг.
 */
exports.changePass = function (key, callback) {
    var backFalse = getStoredBackFalse(callback);

    if (!key) {
        return callback(false);
    }

    Account.getAccountByKey(key, backFalse(function (account, type) {

        Salt.makePass(account.login, backFalse(function (pass, passHash) {

            Mail.sendAuthMail(acc(type, account.login, pass), backFalse(function () {

                setAuthData({
                    type: type,
                    session: key,
                    set: {
                        pass: passHash
                    }
                }, backFalse(function () {

                    removeSession(key, type, callback);
                }));
            }));
        }));
    }));
};

/**
 * Обработка смены почты.
 * @param {String} key Ключ сессии.
 * @param {String} login Логин.
 * @param {Function} callback Следующий шаг.
 */
exports.changeEmail = function (key, login, callback) {
    var backFalse = getStoredBackFalse(callback);

    if (!key) {
        return callback(false);
    }

    Account.getAccountByKey(key, backFalse(function (account, type) {

        Salt.makePass(login, backFalse(function (pass, passHash) {

            Mail.sendAuthMail(acc(type, login, pass), function () {

                setAuthData({
                    type: type,
                    session: key,
                    set: {
                        login: login,
                        pass: passHash
                    }
                }, backFalse(function () {

                    removeSession(key, type, callback);
                }));
            })
        }));
    }));
};

/**
 * Обработка восстановления пароля.
 * @param {String} login Логин.
 * @param {String} type Тип аккаунта.
 * @param {Function} callback Следующий шаг.
 */
exports.restorePass = function (login, type, callback) {
    var backFalse = getStoredBackFalse(callback);

    if (!login) {
        return callback(false);
    }

    Account.getAccountByLogin(login, type, backFalse(function (account) {
        // @TODO
    }));
};

/**
 * @private
 * @param {String} key Ключ сессии.
 * @param {String} type Тип аккаунта.
 * @param {Function} callback
 * Следующий шаг, куда в случае если всё плохо передается false,
 * если всё успешно выполнено передается true,
 * а если документ не был наден - null.
 */
function removeSession (key, type, callback) {
    Mongo
        .collection(type)
        .findOneAndUpdate(
            {
                session: key
            },
            {
                $set: {
                    session: '',
                    randomSalt: ''
                }
            },
            {},
            function (error, document) {
                if (error) {
                    return callback(false);
                }

                if (document.value) {
                    return callback(true);
                } else {
                    return callback(null);
                }
            }
        )
}

/**
 * @private
 * @param {String} captcha Капча.
 * @param {Function} callback Следующий шаг.
 */
function checkCaptcha (captcha, callback) {
    // @TODO

    return callback(true);
}

/**
 * @private
 * @param {String} login Логин.
 * @param {String} type Тип аккаунта.
 * @param {Function} callback Следующий шаг.
 */
function checkLogin (login, type, callback) {
    Mongo
        .collection(type)
        .find({
            login: login
        })
        .limit(1)
        .next(function (error, account) {
            if (error || account) {
                return callback(false);
            } else {
                return callback(true);
            }
        });
}

/**
 * @private
 * @param {Object} config Объект параметров.
 * @param {Object} config.type Тип аккаунта.
 * @param {Object} config.session Ключ сессии.
 * @param {Object} config.set Набор данных для установки.
 * @param {Function} callback Следующий шаг.
 */
function setAuthData (config, callback) {
    Mongo
        .collection(config.type)
        .findOneAndUpdate(
            {
                session: config.session
            },
            {
                $set: config.set
            },
            {},
            function (error) {
                return callback(!error);
            }
        )
}

/**
 * @private
 * @param {String} type Тип аккаунта.
 * @param {String} login Логин.
 * @param {String} pass Пароль.
 * @return {Object} Сгруппированные в объект параметры.
 */
function acc (type, login, pass) {
    return {
        type: type,
        login: login,
        pass: pass
    }
}