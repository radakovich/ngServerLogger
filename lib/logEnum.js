'use strict'

module.exports = angular.module('radakovich.ngServerLogger.logEnum',
    []
).config(function($provide){
    $provide.constant('LOGGING_LEVELS', Object.freeze({
        ERROR: {name: 'ERROR', level: 4},
        WARN: {name: 'WARN', level: 3},
        INFO: {name: 'INFO', level: 2},
        DEBUG: {name: 'DEBUG', level: 1}
    }));
});