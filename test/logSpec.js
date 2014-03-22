describe('$log decorator', function(){
    beforeEach(module('radakovich.ngServerLogger.log'));

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

    it('use the decorated $log', function(){
        log.info('An info message');

        expect(log.info.logs.length).toEqual(1);
        expect(log.info.logs[0][0]).toEqual('An info message');
    });
});