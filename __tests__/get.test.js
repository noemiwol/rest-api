const request = require('./request');

describe('GET / all post', () => {
    it('return code 200 and all post and time less 500', async () => {

        let start = performance.now();
        const response = await request.get('/posts/99');
        let end = performance.now();

        expect(end - start).toBeLessThan(500);
        expect(response.statusCode).toEqual(200);
    });
});

describe('GET / all photos', () => {
    it('return code 200 and all post', async () => {

        const response = await request.get('/photos');

        expect(response.statusCode).toEqual(200);
        expect(response.body);
    });
});

describe('GET/ todo nr 1',() => {
    it('return status, time, vaule of ', async () => {

        let start = performance.now();
        const response = await request.get('/todos/2');
        let end = performance.now();

        expect(end - start).toBeLessThan(500);
        expect(response.body).not.toBeNull();
        expect(response.statusCode).toBe(200);
        expect(response.type).toEqual('application/json') 
        expect(response.body).toHaveProperty("userId", "id","title","completed");
    });
});