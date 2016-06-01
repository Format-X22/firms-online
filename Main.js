/**
 * Основной класс приложения.
 */
Ext.define('B.Main', {
    singleton: true,

    requires: [
        'B.Mongo',
		'B.Cloudinary',
        'B.MainRouter',
		'B.service.MainLoop',
        'B.util.Function',
        'B.util.String'
    ],

    config: {

        /**
         * @cfg {Object} express Модуль Express.
         */
        express: require('express'),

        /**
         * @cfg {Object} expressApp Приложение Express.
         */
        expressApp: null,

        /**
         * @cfg {Object} server Объект сервера.
         */
        server: null,

        /**
         * @cfg {Number} rerunTime Время до попытки перезапуска сервера.
         */
        rerunTime: 10 * 1000,

        /**
         * @cfg {Object} fileSizeLimitsConfig Конфигурация максимальных размеров файлов.
         */
        fileSizeLimitsConfig: {
            limits: {
                fileSize: 10 * 1024 * 1024
            }
        }
    },

    constructor: function () {
        this.initConfig(this.config);
        this.setExpressApp(this.getExpress()());

        B.util.Function.queue([
            this.initDataBase,
            this.initExpress,
            this.initRouter,
            this.createServer,
            this.launchServer
        ], this);
    },

    /**
     * Инициализация базы.
     * @param {Function} next Следующий шаг.
     */
    initDataBase: function (next) {
        this.log('Инициализация Mongo.');

        B.Mongo.connect(next);
    },

    /**
     * Инициализация Экспресса.
     * @param {Function} next Следующий шаг.
     */
    initExpress: function (next) {
        this.log('Инициализация Express.');

        this.initFavicon();
        this.initParsers();
        this.initStaticDir();
        
        next();
    },

    /**
     * Инициализация роутера.
     * @param {Function} next Следующий шаг.
     */
    initRouter: function (next) {
        this.log('Инициализация главного роутера.');

        var dir = __dirname;
        var path = require('path');
        var indexHtml = path.join(dir, 'public', 'index.html');

        Ext.create('B.MainRouter', {
            callback: next
        });

        this.getExpressApp().get(/^\/page-/, function (request, response) {
            response.sendFile(indexHtml);
        });
    },

    /**
     * Создание объекта сервера.
     * @param {Function} [next] Следующий шаг.
     */
    createServer: function (next) {
        this.log('Создание сервера.');

        var http = require('http');
        var app = this.getExpressApp();

        this.setServer(http.createServer(app));
        next && next();
    },

    /**
     * Запуск сервера.
     */
    launchServer: function () {
        this.log('Запуск сервера.');

        var server = this.getServer();
        var port = this.normalizePort(process.env.PORT) || 3000;

        this.log('Порт запуска определен - ' + port);

        server.on('error', this.handleServerError.bind(this));
        server.listen(port, this.onServerStart.bind(this));
    },

    privates: {

        /**
         * @private
         */
        initFavicon: function () {
            var app = this.getExpressApp();
            var dir = __dirname;
            var path = require('path');
            var faviconPath = path.join(dir, 'public', 'resources', 'img', 'favicon.png');
            var favicon = require('serve-favicon')(faviconPath);

            app.use(favicon);
        },

        /**
         * @private
         */
        initParsers: function () {
            var app = this.getExpressApp();
            var bodyParser = require('body-parser');
            var jsonParser = bodyParser.json();
            var urlParser = bodyParser.urlencoded({
                extended: false
            });
            var cookieParser = require('cookie-parser')();
            var fileParser = require('connect-busboy')(this.getFileSizeLimitsConfig());

            app.use(jsonParser);
            app.use(urlParser);
            app.use(cookieParser);
            app.use(fileParser);
        },

        /**
         * @private
         */
        initStaticDir: function () {
            var app = this.getExpressApp();
            var dir = __dirname;
            var path = require('path');
            var publicDir = path.join(dir, 'public');
            var staticDirSign = this.getExpress().static(publicDir);
            
            app.use(staticDirSign);
        },
        
        /**
         * @private
         * @param value Значение порта.
         * @return {Number/Boolean} Номер порта числом, либо его алиас не числом, иначе false.
         */
        normalizePort: function (value) {
            var port = parseInt(value, 10);

            if (isNaN(port)) {
                return value;
            }
            if (port >= 0) {
                return port;
            }
            return false;
        },

        /**
         * @private
         * @param {Object} error Объект ошибки сервера.
         */
        handleServerError: function (error) {
            this.error('Ошибка сервера!\n\n' + error);

            this.log('Попытка перезапуска сервера...');
            this.tryRunServerLate();
        },

        /**
         * @private
         * @param {Object} error Объект ошибки сервера.
         */
        onServerStart: function (error) {
            if (error) {
                this.error(error);
                this.tryRunServerLate();
            } else {
                this.log('Сервер успешно запущен.');
            }
        },

        /**
         * @private
         */
        tryRunServerLate: function () {
            this.getServer().close();

            Ext.defer(function () {
                this.createServer();
                this.launchServer();
            }, this.getRerunTime(), this);
        },

        /**
         * @private
         * @param {String} msg Сообщение.
         */
        log: function (msg) {
            Ext.log({
                level: 'info',
                msg: msg
            });
        },

        /**
         * @private
         * @param {String} msg Сообщение.
         */
        error: function (msg) {
            Ext.log({
                level: 'error',
                msg: msg
            });
        }
    }
});