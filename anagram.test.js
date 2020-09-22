const isAnagram = require('./anagram')

test('isAnagram function exists', () => {
    expect(typeof isAnagram).toEqual('function')
})

test('cinema is an anogram of iceman', () => {
    expect(isAnagram('cinema', 'iceman')).toBeTruthy()
})

test('Dormitory is an anogram of dirty room', () => {
    expect(isAnagram('Dormitory', 'dirty room')).toBeTruthy()
})

test('hello is not an anogram of hola', () => {
    expect(isAnagram('hello', 'hola')).toBeFalsy()
})