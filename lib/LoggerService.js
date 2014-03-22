'use strict'

module.exports = angular.module('radakovich.ngServerLogger.LoggerService',
    [
        require('./logUrl').name
    ]
).service('LoggerService', function($injector, logServerUrl){

    var http;

    return {
        sendToServer: function(level, msg){
            if(!http){
                http = $injector.get('$http');
            }

            http.post(logServerUrl, {level: level, message: msg});
        }
    };
});