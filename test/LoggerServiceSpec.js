describe('LoggerService', function(){
    beforeEach(module('radakovich.ngServerLogger.LoggerService'));
    beforeEach(module('radakovich.ngServerLogger.logEnum'));

    var $httpBackend;

    beforeEach(inject(function($injector) {
        $httpBackend = $injector.get('$httpBackend');
    }));

    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it('should post to /log', inject(function(LoggerService, LOGGING_LEVELS){
        $httpBackend.expectPOST('/log', {level: LOGGING_LEVELS.ERROR, message: 'There was a problem.'})
            .respond(201, '');

        LoggerService.sendToServer(LOGGING_LEVELS.ERROR, 'There was a problem.');

        $httpBackend.flush();
    }));
});