const request = require('supertest');
const app = require('../app');
const User = require('../models/user.model');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const user1Id = new mongoose.Types.ObjectId()

const user1 = {
    _id: user1Id,
    name: 'Ashish123',
    email: 'ashishsingh26@gmail.com',
    password: 'MyPass77!',
    tokens: [
        {
            token: jwt.sign({_id: user1Id}, 'trans23app')
        }
    ]
}

beforeEach(async () => {
    jest.setTimeout(60000);
    await User.deleteMany()
    const user = new User(user1);
    await user.save()
});

// afterAll(() => {
//     mongoose.connection.close()
// })


test('Should signup a new user', async () => {
    await request(app).post('/api/v1/create-user').send({
        name: 'Ashish',
        email: 'ashishsingh2641@gmail.com',
        password: 'MyPass777!'
    }).expect(201)
});

test('Should login existing user', async () => {
    const response = await request(app).post('/api/v1/user-login').send({...user1}).expect(200);
    const user = await User.findById(user1Id);

    expect(response.body.token).toBe(user.tokens[0].token)
})

test('Should able to see myProfile', async () => {
    await request(app)
        .get('/api/v1/my-profile')
        .set('Authorization', `Bearer ${user1.tokens[0].token}`)
        .send({...user1})
        .expect(200)
})

test('Should not get profile for unauthenticated user', async () => {
    await request(app)
        .get('/api/v1/my-profile')
        .send({...user1})
        .expect(401)
})

test('Should delete account for user', async () => {
    await request(app)
        .delete('/api/v1/delete-profile')
        .set('Authorization', `Bearer ${user1.tokens[0].token}`)
        .send({...user1})
        .expect(200)
})

test('Should not able to delete account for unauthenticated user', async () => {
    await request(app)
        .delete('/api/v1/delete-profile')
        .send({...user1})
        .expect(401)
})