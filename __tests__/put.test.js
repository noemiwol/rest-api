const request = require('./request');

describe('PUT / post NR 98', () =>{
    it('return code 200 if update is done', async () =>{
        const response = await request.put('/posts/98')
        .send({
            id: 98,
            title: 'foo',
            body: 'bar',
            userId: 1,
        })
        .set('Accept', 'application/json')
        .expect('content-type', 'application/json; charset=utf-8');

        expect(response.statusCode).toEqual(200)
        expect((await response).body).not.toBeNull()
        expect(response.body).toEqual(expect.objectContaining({
            id: 98,
            title: 'foo',
            body: 'bar',
            userId: 1,
        }));
    });
});