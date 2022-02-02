const request = require('supertest');

describe('DELETE / post 99', () =>{
    it('if successull add delete return code 201', async ()=>{
        const response = await request('https://jsonplaceholder.typicode.com').delete('/posts/99');

        console.log(response.body);
        expect(response.statusCode).toEqual(200);
    });
});