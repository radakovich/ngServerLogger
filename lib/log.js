'use strict'

module.exports = angular.module('radakovich.ngServerLogger.log',
    [
        require('./LoggerService').name,
        require('./logEnum').name
    ]
).config(function($provide){
    $provide.decorator('$log', function($delegate, LOGGING_LEVELS, LoggerService){
        var _log = $delegate.log;
        var _info = $delegate.info;
        var _warn = $delegate.warn;
        var _error = $delegate.error;
        var _debug = $delegate.debug;

        $delegate.log = function(msg){
            LoggerService.sendToServer(LOGGING_LEVELS.INFO, msg);

            _log(msg);
        }

        $delegate.info = function(msg){
            console.log('inside this thing');
            LoggerService.sendToServer(LOGGING_LEVELS.INFO, msg);

            _info(msg);
        }

        $delegate.warn = function(msg){
            LoggerService.sendToServer(LOGGING_LEVELS.WARN, msg);

            _warn(msg);
        }

        $delegate.error = function(msg){
            LoggerService.sendToServer(LOGGING_LEVELS.ERROR, msg);

            _error(msg);
        }

        $delegate.debug = function(msg){
            LoggerService.sendToServer(LOGGING_LEVELS.DEBUG, msg);

            _debug(msg);
        }

        return $delegate;
    });
});