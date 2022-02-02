const request = require('supertest');

describe('POST / add post ', () =>{
    it('if successull add post return code 201', async ()=>{
        const response = await request('https://jsonplaceholder.typicode.com')
        .post('/photos')
        .send({
            "albumId": 1,
            "id": 1,
            "title": "accusamus exemple photo",
            "url": "https://via.placeholder.com/600/92e952",
            "thumbnailUrl": "https://via.placeholder.com/150/92e952"
        });
        console.log(response.body);
        expect(response.statusCode).toEqual(201);
    });
});