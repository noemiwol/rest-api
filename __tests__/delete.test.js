const request = require('./request');

describe('DELETE / post 99', () =>{
    it('if successull add delete return code 201', async () => {
        
        const response = await request.delete('/posts/99');

        expect(response.statusCode).toEqual(200);
    });
});