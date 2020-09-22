const { TestScheduler } = require('jest');
const functions = require('./functions');

beforeAll(()=>initDatabase())
afterAll(()=> closeDatabase())

const initDatabase = () => console.log('Database initialzed..')
const closeDatabase = () => console.log('Database closed..')

const nameCheck = () => console.log('Checking name...')

describe('Checking Names', ()=>{
    beforeEach(()=> nameCheck())

    test('User is Jeff', ()=>{
        const user = 'Jeff'
        expect(user).toBe('Jeff')
    })

    test('User is Jim', ()=>{
        const user = 'Jim'
        expect(user).toBe('Jim')
    })
})

test('Adds 2 + 2 to equal 4', ()=>{
    expect(functions.add(2,2)).toBe(4)
});

test('Should be Null', ()=>{
    expect(functions.isNull()).toBeNull()
});

test('Should be falsy', ()=>{
    expect(functions.checkValue(null)).toBeFalsy()
});

test('User should be Gil Lig object', ()=>{
    expect(functions.createUser()).toEqual({
        firstName: 'Gil', lastName: 'Lig'
    })
});

test('Should be under 1600', ()=>{
    const num1 = 800
    const num2 = 700
    expect(num1 + num2).toBeLessThan(1600)
    })

test('There is no I in team', ()=>{
    expect('team').not.toMatch(/I/)
})  

test('Admin should be in username', ()=>{
    usernames = ['john', 'tim', 'admin']
    expect(usernames).toContain('admin')
})

test('User fetched name should be Leanne Graham', ()=>{
    expect.assertions(1)
    return functions.fetchUser()
        .then(data =>{
            expect(data.name).toEqual('Leanne Graham')
        })
})

test('User fetched name should be Leanne Graham', async()=>{
    expect.assertions(1)
    const data = await functions.fetchUser()
    expect(data.name).toEqual('Leanne Graham')
        
})