'use strict'

module.exports = angular.module('radakovich.ngServerLogger.logUrl',
    [
    ]
).config(function($provide){
    $provide.value('logServerUrl', '/log');
});