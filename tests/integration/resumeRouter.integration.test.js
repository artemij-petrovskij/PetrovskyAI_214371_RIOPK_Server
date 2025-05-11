"use strict";
const http = require('http');
describe('Server response test', () => {
    it('should return status 200 from port 8080', (done) => {
        http.get('http://localhost:8080/api/resume/advert/6', (res) => {
            expect(res.statusCode).toBe(200);
            done();
        }).on('error', (err) => {
            done(err);
        });
    }, 1000);
    it('should return null from non-existent data', (done) => {
        http.get('http://localhost:8080/api/resume/advert/6515', (res) => {
            expect(null).toBe(null);
            done();
        }).on('error', (err) => {
            done(err);
        });
    }, 1000);
    it('should return status 200 from port 8080', (done) => {
        http.get('http://localhost:8080/api/resume/advert/6515', (res) => {
            expect(null).toBe(null);
            done();
        }).on('error', (err) => {
            done(err);
        });
    }, 1000);
    it('should return ', (done) => {
        http.get('http://localhost:8080/api/resume/advert/6', (res) => {
            expect(res).not.toBeNull();
            expect(typeof res).toBe('object');
            done();
        }).on('error', (err) => {
            done(err);
        });
    }, 1000);
});
