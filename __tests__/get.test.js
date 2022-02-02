const supertest = require('supertest');
const host = 'https://jsonplaceholder.typicode.com';
const request = supertest(host);

describe('GET / all post', () =>{
    it('return code 200 and all post in log and time response', async () =>{
        var start = performance.now();
        const response = await request.get('/posts');
        var end = performance.now();
        console.log(end - start);
        expect(end - start).toBeLessThan(500);
        //console.log(response.body);
        expect(response.statusCode).toEqual(200);
    });
});

describe('GET / all photos', () =>{
    it('return code 200 and all post in log', async () =>{
        const response = await request.get('/photos');

        //console.log(response.body);
        expect(response.statusCode).toEqual(200);
    });
});

describe('GET/ todo nr 1',() =>{
    it('return status, time, vaule of ', async () =>{
        var start = performance.now();
        const response = await request.get('/todos/2');
        var end = performance.now();
        console.log(end - start);
        expect(end - start).toBeLessThan(500);
        console.log(response.body);
        expect((response).body).not.toBeNull();
        expect(response.statusCode).toBe(200);
        expect(response.type).toEqual('application/json') 
        expect(response.body).toHaveProperty("userId", "id","title","completed");
        
    });
});