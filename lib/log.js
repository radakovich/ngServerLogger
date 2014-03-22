'use strict'

module.exports = angular.module('radakovich.ngServerLogger.log',
    [
        require('./LoggerService').name
    ]
).config(function($provide){
    $provide.decorator('$log', function($delegate, LoggerService){
        var _log = $delegate.log;
        var _info = $delegate.info;
        var _warn = $delegate.warn;
        var _error = $delegate.error;
        var _debug = $delegate.debug;

        $delegate.info = function(msg){
            _info(msg);
        }

        return $delegate;
    });
});