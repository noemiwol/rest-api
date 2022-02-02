const request = require ('supertest');

describe('GET / all post', () =>{
    it('return code 200 and all post in log', async () =>{
        const response = await request('https://jsonplaceholder.typicode.com').get('/posts');

        //console.log(response.body);
        expect(response.statusCode).toEqual(200);
    });
});

describe('GET / all photos', () =>{
    it('return code 200 and all post in log', async () =>{
        const response = await request('https://jsonplaceholder.typicode.com').get('/photos');

        //console.log(response.body);
        expect(response.statusCode).toEqual(200);
    });
});