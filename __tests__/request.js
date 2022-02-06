const supertest = require('supertest');
const host = 'https://jsonplaceholder.typicode.com';
const request = supertest(host);

module.exports = request;