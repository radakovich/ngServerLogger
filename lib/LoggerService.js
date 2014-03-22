'use strict'

module.exports = angular.module('radakovich.ngServerLogger.LoggerService',
    []
).service('LoggerService', function($injector){

    var http;

    return {
        sendToServer: function(level, msg){
            if(!http){
                http = $injector.get('$http');
            }

        }
    };
});