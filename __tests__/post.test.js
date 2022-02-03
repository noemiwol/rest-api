const supertest = require('supertest');
const host = 'https://jsonplaceholder.typicode.com';
const request = supertest(host);

describe('POST / add photo ', () =>{
    it('if successull add post return code 201', async () => {
        const response = await request.post('/photos')
            .send({
                albumId: 1,
                id: 5001,
                title: "accusamus exemple photo",
                url: "https://via.placeholder.com/600/92e952",
                thumbnailUrl: "https://via.placeholder.com/150/92e952"
            })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/);
            expect(response.statusCode).toBe(201);
            expect((await response).body).not.toBeNull();
            expect(response.body).toEqual(expect.objectContaining({
                albumId: 1,
                id: 5001,
                title: "accusamus exemple photo",
                url: "https://via.placeholder.com/600/92e952",
                thumbnailUrl: "https://via.placeholder.com/150/92e952"
            }));
            console.log(response.body);
            });
    });