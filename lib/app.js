'use strict'

angular.module('radakovich.ngServerLogger',
    []
).config(function($provide){
    $provide.constant('LOGGING_LEVELS', Object.freeze({
        ERROR: {name: 'ERROR', level: 4},
        WARN: {name: 'WARN', level: 3},
        INFO: {name: 'INFO', level: 2},
        DEBUG: {name: 'DEBUG', level: 1}
    }));
});
