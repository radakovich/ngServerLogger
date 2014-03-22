describe('logUrl', function(){
    beforeEach(module('radakovich.ngServerLogger.logUrl'));

    it('should have a default url of /log', inject(function(logServerUrl){
        expect(logServerUrl).toEqual('/log');
    }));
});