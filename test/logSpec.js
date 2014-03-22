describe('$log decorator', function(){
    beforeEach(module('radakovich.ngServerLogger.log'));

    beforeEach(module(function($provide){
        $provide.decorator('LoggerService', function($delegate){

            $delegate.sendToServer = jasmine.createSpy('sendToServer spy');

            return $delegate;
        });
    }));

    var log;

    /**
     * This is necessary because the angular-mocks version of $log
     * has a 'logs' list associated with each logging function.
     */
    beforeEach(inject(function($log){
        ['log', 'info', 'warn', 'error', 'debug'].forEach(function(level){
            $log[level].logs = [];
        });

        log = $log;
    }));

    it('use the decorated $log.log', inject(function(LoggerService, LOGGING_LEVELS){
        log.log('A log message');

        expect(log.log.logs.length).toEqual(1);
        expect(log.log.logs[0][0]).toEqual('A log message');

        expect(LoggerService.sendToServer).toHaveBeenCalledWith(LOGGING_LEVELS.INFO, 'A log message');
    }));

    it('use the decorated $log.info', inject(function(LoggerService, LOGGING_LEVELS){
        log.info('An info message');

        expect(log.info.logs.length).toEqual(1);
        expect(log.info.logs[0][0]).toEqual('An info message');

        expect(LoggerService.sendToServer).toHaveBeenCalledWith(LOGGING_LEVELS.INFO, 'An info message');
    }));

    it('use the decorated $log.warn', inject(function(LoggerService, LOGGING_LEVELS){
        log.warn('A warn message');

        expect(log.warn.logs.length).toEqual(1);
        expect(log.warn.logs[0][0]).toEqual('A warn message');

        expect(LoggerService.sendToServer).toHaveBeenCalledWith(LOGGING_LEVELS.WARN, 'A warn message');
    }));

    it('use the decorated $log.error', inject(function(LoggerService, LOGGING_LEVELS){
        log.error('An error message');

        expect(log.error.logs.length).toEqual(1);
        expect(log.error.logs[0][0]).toEqual('An error message');

        expect(LoggerService.sendToServer).toHaveBeenCalledWith(LOGGING_LEVELS.ERROR, 'An error message');
    }));

    it('use the decorated $log.debug', inject(function(LoggerService, LOGGING_LEVELS){
        log.debug('A debug message');

        expect(log.debug.logs.length).toEqual(1);
        expect(log.debug.logs[0][0]).toEqual('A debug message');

        expect(LoggerService.sendToServer).toHaveBeenCalledWith(LOGGING_LEVELS.DEBUG, 'A debug message');
    }));
});