const db = require('./database');

beforeAll(async () => {
    await db.sequelize.sync({ force: true });
});

test('create user', async () => {
    expect.assertions(1);
    const user = await db.User.create({
        id: 1,
        name: 'Nehal Bhanushali',
        emailID: 'n1234@gal.com'
    });
    expect(user.id).toEqual(1);
});

test('get user', async () => {
    expect.assertions(2);
    const user = await db.User.findByPk(1);
    expect(user.name).toEqual('Nehal Bhanushali');
    expect(user.emailID).toEqual('n1234@gal.com');
});

test('delete user', async () => {
    expect.assertions(1);
    await db.User.destroy({
        where: {
            id: 1
        }
    });
    const user = await db.User.findByPk(1);
    expect(user).toBeNull();
});

afterAll(async () => {
    await db.sequelize.close();
});