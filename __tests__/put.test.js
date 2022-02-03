const supertest = require('supertest');
const host = 'https://jsonplaceholder.typicode.com';
const request = supertest(host);
describe('PUT / post NR 1', () =>{
    it('return code 200 if update is done', async () =>{
        const response = await request.put('/posts/98')
        .send({
            id: 1,
            title: 'foo',
            body: 'bar',
            userId: 1,
        });

        console.log(response.body);
        expect(response.statusCode).toEqual(200);
    });
});