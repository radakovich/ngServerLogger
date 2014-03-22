describe('ngLoggerServer', function(){
    beforeEach(module('radakovich.ngServerLogger.logEnum'));

    it('should have a LOGGING_LEVELS enum', inject(function(LOGGING_LEVELS){
        expect(LOGGING_LEVELS.ERROR).toEqual({name: 'ERROR', level: 4});
        expect(LOGGING_LEVELS.WARN).toEqual({name: 'WARN', level: 3});
        expect(LOGGING_LEVELS.INFO).toEqual({name: 'INFO', level: 2});
        expect(LOGGING_LEVELS.DEBUG).toEqual({name: 'DEBUG', level: 1});
    }));
});
